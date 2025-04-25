"use client";

import Image from "next/image";
import banner from "../../../image/banner.webp"


const Banner = () => {
  return (
    <div>
      <div className="h-[220px] px-8">
        <Image
          className="w-full h-full  "
          src={banner}
          width={500}
          height={500}
          priority={true}
          alt="image"
        />
      </div>

      <h1 className="text-xl md:text-2xl lg:text-3xl !font-semibold !mt-6 text-center text-[#303437]">
        DealNews: Best Daily Deals, Discounts & Sales
      </h1>
    </div>
  );
};



export default Banner;
