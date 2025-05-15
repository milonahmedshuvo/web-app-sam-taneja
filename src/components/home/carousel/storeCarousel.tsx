"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";

interface TProject {
    id: string;
    name: string;
    description: string;
    price: string;
    img: string;
    summary: string;
    categoryId: string;
    storeId: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}

interface TProjectProps {
    projects: TProject[]
}






export default function StoreCarousel({projects}:TProjectProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(()=> {
    setCanScrollRight(true)
  },[projects])

 



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
    <div className="relative p-4 ">


      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-1 cursor-pointer bg-[#fff] drop-shadow-lg text-white rounded-full z-10"
        >
          {/* &#9664; */}
          <FaAngleLeft className="text-2xl text-gray-500"> </FaAngleLeft>
        </button>
      )}



      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 scrollbar-hide hide-scrollbar cursor-pointer"
        onScroll={updateScrollButtons}
      >
        {projects.reverse().map((project) => (
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

            <p className="text-xs text-gray-500 pt-2"> {project.name.substring(0, 32)} </p>

            <div className="flex flex-col justify-between min-h-[86px] ">

              <h3 className="mt-1 font-medium text-black text-md ">
                {project.name.substring(0, 30)}
              </h3>

              <p className="text-[#00A863] font-medium text-xl">
                {project.price.substring(0, 14)}
              </p>
            </div>

            <button className="!text-[#2C65BB] text-sm absolute w-full bottom-0 left-0 cursor-pointer pt-3 pb-2 text-end flex justify-end items-center hover:bg-gray-100 gap-1 pr-3"> 
              <Link href={`/cardDatails/${project.id}`} > <span className="!text-[#2c65af] text-[14px]">Daitals</span> </Link> <FaAngleRight className="text-[12px] "> </FaAngleRight> 
            </button>
          </div>
        ))}
      </div>


      

      {
        canScrollRight && 
      
         <button 
          onClick={() => scroll("right")}
          className="absolute right-[10px] top-1/2 -translate-y-1/2 p-1 bg-[#fff] cursor-pointer drop-shadow-lg text-white rounded-full z-10"
        > 
          <FaAngleRight className="text-2xl text-gray-500"></FaAngleRight>
        </button> 
      }



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
