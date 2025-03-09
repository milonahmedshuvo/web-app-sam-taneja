"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="h-[220px] px-8">
        <Image
          className="w-full h-full  "
          src="https://c.dlnws.com/image/upload/dpr_auto,f_auto,q_auto:low/v1740749512/Promotional%20Banners%20%28MH%29/Copy_of_2528014_January-Banner_011525_1.jpg"
          width={500}
          height={500}
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
