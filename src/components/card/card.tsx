"use client";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaFire, FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import CardTab from "./cardTab";
import Link from "next/link";
import { MdReport } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";

interface CardProps {
  image: string;
  smallText: string;
  title: string;
  price: string;
  description: string;
}

const Card = ({ image, smallText, title, price, description }: CardProps) => {
  const [showFullText, setShowFullText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white  p-4 rounded-lg w-full my-5 border border-[#c1c4cc]">
      <div className=" flex flex-wrap md:grid md:grid-cols-[auto_1fr_auto] gap-4  relative  ">
        {/* First Column - Image */}
        <div
          className={`${
            !showFullText ? "w-24 h-24 sm:w-full sm:h-32 flex-shrink-0" : ""
          }`}
        >
          <Image
            height={100}
            width={500}
            src={image}
            alt="Product"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Second Column - Content */}
        <div className="flex-1 w-full">
          <div className="flex justify-between">
            <p className="text-gray-500 text-xs sm:text-sm">{smallText}</p>

            <div className={`${showFullText ? "flex gap-2" : "hidden"}`}>
              <FaFire className="text-red-500 text-xl" />
              <FiMoreVertical className="text-gray-600 text-xl cursor-pointer" />
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-semibold mt-1">{title}</h3>
          <div className="flex items-center gap-1 text-sm sm:text-base">
            <p className="text-green-600 font-bold">{price}</p>

            <span className="text-xs text-gray-400 font-medium italic mt-[-14px] ">
              + Free shipping w/ Prime
            </span>
          </div>

          {/* Description with Read More/Less */}
          <p className="text-[#303437] mt-2 text-[14px] font-extralight tracking-wide leading-5">
            {showFullText ? description : `${description.substring(0, 80)}... `}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-blue-500 hover:underline"
            >
              {showFullText ? (
                <span className="text-[#557fb5] font-semibold ml-5">Less</span>
              ) : (
                <span className="text-[#557fb5] font-semibold ml-3">More</span>
              )}
            </button>
          </p>

          <div className={`${showFullText ? "flex justify-end" : "hidden"}`}>
            <button className="bg-[#00a862] cursor-pointer hover:opacity-45 hover:drop-shadow-2xl delay-150 ease-in-out decoration-2 !text-white font-semibold  px-4 py-2 rounded-xs text-xs sm:text-sm w-full md:w-auto">
              Shop Now
            </button>
          </div>
        </div>

        {/* Third Column - Buttons & Icons */}
        <div
          className={`${
            showFullText
              ? "hidden"
              : "flex flex-col items-end gap-4 w-full md:w-auto"
          }`}
        >
          <div className="flex gap-2 ">
            <FaFire className="text-red-500 text-xl" />

            <div className="group">
              <FiMoreVertical
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="text-gray-600 text-2xl cursor-pointer hover:border border-dotted"
              />
              <div className="hidden group-hover:block absolute right-[-180px] top-[20px] bg-white p-5 w-[230px] shadow-2xl rounded space-y-3.5">
                <div
                  className="flex gap-3"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaUser className="cursor-pointer text-[#2c65af] ml-1" />
                  <Link href="/viewProfile">
                    <span className="text-[#2c65af] !font-thin text-[14px]">
                      Open Offer in New Tab
                    </span>
                  </Link>
                </div>

                <div
                  className="flex gap-3"
                  onClick={() => setIsModalOpen(false)}
                >
                  <IoIosNotifications className="cursor-pointer  text-[#2c65af] text-2xl" />
                  <Link href="/saveDeals">
                    <span className="text-[#2c65af] font-normal text-[15px] ">
                      Create Alert 
                    </span>
                  </Link>
                </div>

                <div className="flex gap-3 cursor-pointer">
                  <MdReport className="cursor-pointer  text-[#2c65af] text-2xl" />
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    Report in Error
                  </span>
                </div>

                <div
                  className="flex gap-3 cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  <CiShare2 className="cursor-pointer  text-[#2c65af] text-2xl" />
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-[#00a862]  cursor-pointer hover:opacity-45 hover:drop-shadow-2xl delay-150 ease-in-out decoration-2 !text-white font-semibold  px-4 py-2 rounded-xs text-xs sm:text-sm w-full md:w-auto">
            Shop Now
          </button>
        </div>

        {/* {showFullText &&  <Button type="primary">Primary Button</Button> } */}
      </div>

      {showFullText && <CardTab></CardTab>}
    </div>
  );
};

export default Card;
