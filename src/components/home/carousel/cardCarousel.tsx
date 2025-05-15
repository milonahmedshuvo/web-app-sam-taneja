/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Loading from "@/utils/Loading";
import Link from "next/link";

export default function CartCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // https://samtaneja-api.code-commando.com/api/v1
  useEffect(() => {
    fetch(
      "https://samtaneja-api.code-commando.com/api/v1/products?page=1&limit=20&populate=category,store"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  console.log("card carosel", data);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative pt-4 mt-5">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-5 h-10 drop-shadow-xl bg-[#ACAEAF] text-white rounded-r-full flex items-center justify-center z-10"
        >
          <FaAngleLeft className="text-md text-white"></FaAngleLeft>
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 scrollbar-hide hide-scrollbar "
        onScroll={updateScrollButtons}
      >
        {data?.map((project) => (
          <div
            key={project.id}
            className="min-w-[160px] h-[300px] relative bg-white shadow-md rounded-lg  p-1 border border-gray-200"
          >
            <div className="overflow-hidden">
              <Link href={`/cardDatails/${project.id}`} >
              <Image
                src={project.img}
                alt={project.name}
                width={150}
                height={150}
                className="h-[130px] w-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
               </Link>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              {" "}
              {project.name.substring(0, 32)}{" "}
            </p>

            <div className="flex flex-col justify-between min-h-[86px] ">
              <h3 className="mt-1 font-medium text-black text-md ">
                {project.name.substring(0, 30)}
              </h3>

              <p className="text-[#00A863] font-medium text-xl">
                {project.price.substring(0, 14)}
              </p>
            </div>

            <button className="!text-[#2C65BB] text-sm absolute w-full bottom-0 left-0 cursor-pointer pt-3 pb-2 text-end flex justify-end items-center hover:bg-gray-100 gap-1 pr-3">
              <Link href={`/cardDatails/${project.id}`}>
                {" "}
                <span className="!text-[#2c65af] text-[14px]">
                  Daitals
                </span>{" "}
              </Link>{" "}
              <FaAngleRight className="text-[12px] "> </FaAngleRight>
            </button>
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-[-19px] top-1/2 -translate-y-1/2 w-5 h-10 drop-shadow-xl bg-[#ACAEAF] text-white rounded-l-full flex items-center justify-center z-10"
        >
          <FaAngleRight className="text-md text-white"></FaAngleRight>
        </button>
      )}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
