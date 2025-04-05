"use client";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import Image from "next/image";
// import { Button } from 'antd';
import CardTab from "./cardTab";

interface CardProps {
  image: string;
  smallText: string;
  title: string;
  price: string;
  description: string;
}

const Card = ({ image, smallText, title, price, description }: CardProps) => {
  const [showFullText, setShowFullText] = useState(false);


  
  return (
    <div className="bg-white  p-4 rounded-lg w-full my-5 border border-[#c1c4cc]">
      <div className=" flex flex-wrap md:grid md:grid-cols-[auto_1fr_auto] gap-4  relative  ">
        {/* First Column - Image */}
        <div className={`${!showFullText? 'w-24 h-24 sm:w-full sm:h-32 flex-shrink-0': ""}`}>
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

          <div  className={`${showFullText? 'flex gap-2': 'hidden'}`}>
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
            {showFullText
              ? description
              : `${description.substring(0, 80)}... `}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-blue-500 hover:underline"
            >
              {showFullText ? <span className="text-[#557fb5] font-semibold ml-5">Less</span> : <span className="text-[#557fb5] font-semibold ml-3">More</span>}
            </button>
          </p>   


          <div className={`${showFullText ? 'flex justify-end': 'hidden'}`}>
            <button className="bg-[#00a862] cursor-pointer hover:opacity-45 hover:drop-shadow-2xl delay-150 ease-in-out decoration-2 !text-white font-semibold  px-4 py-2 rounded-xs text-xs sm:text-sm w-full md:w-auto">
            Shop Now
          </button> 
          </div>      
        </div>



        {/* Third Column - Buttons & Icons */}
        <div className={`${showFullText ? 'hidden': 'flex flex-col items-end gap-4 w-full md:w-auto'}`}>
          <div  className="flex gap-2">
            <FaFire className="text-red-500 text-xl" />
            <FiMoreVertical className="text-gray-600 text-xl cursor-pointer" />
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
