/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import CardTab from "@/components/card/cardTab";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaFire, FaUser } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { MdReport } from "react-icons/md";
import applogo from '../../../../image/app.webp'



interface cardTypes {
  id: string;
  name: string;
  description: string;
  img: string | StaticImport 
  price: string;
  summary: string;
  store: {
    name: string;
  };
  updatedAt: string
}

const HomeCardDatailspage = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
      const [data, setData] = useState<cardTypes >();
      const [loading, setLoading] = useState(true);
      const useparams = useParams()
      const id = useparams.id
     


              useEffect(() => {
                fetch(`http://10.0.10.245:9829/api/v1/products/${id}`)
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
                return (
                  <div className="text-center py-10 text-lg font-medium">Loading...</div>
                );
              }
      
      
              console.log("ami data", data)


              const day = new Date(`${data?.updatedAt}`).getDate();


  return (
    <div className="max-w-7xl mx-auto"> 
    <div className="flex flex-col justify-center xl:flex-row gap-6">  
    
    <div className="xl:w-[70%] "> 
    <div className="bg-white  p-4 rounded-lg my-5 border border-[#c1c4cc]">
    <div className=" flex flex-wrap md:grid md:grid-cols-[auto_1fr_auto] gap-4  relative  ">


      {/* First Column - Image */}
      <div >

        <Image
          height={100}
          width={500}
          src={data?.img as string}
          alt="Product"
          className="w-full h-full object-cover rounded-md"
        />
      </div>





      {/* Second Column - Content */}
      <div className="flex-1 w-full">
        <div className="flex justify-between">
        <p className="text-gray-500 text-xs sm:text-sm">
        {data?.store?.name || "Unknown Store"} {day} day ago
      </p>

          
        </div>

        <h3 className="text-base sm:text-lg font-semibold mt-1">{data?.name}</h3>
        <div className="flex items-center gap-1 text-sm sm:text-base">
          <p className="text-green-600 font-bold">{data?.price}</p>

          <span className="text-xs text-gray-400 font-medium italic mt-[-14px] ">
            + Free shipping w/ Prime
          </span>
        </div>

        {/* Description with Read More/Less */}
        <p className="text-[#303437] mt-2 text-[14px] font-extralight tracking-wide leading-5">
         {data?.summary} 
        </p>
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
                <Link href={`/cardDatails/${id}`}>
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

        
      </div>

        
    </div>

    
       <div className={`flex justify-end`}>
          <button className="bg-[#00a862] cursor-pointer hover:opacity-45 hover:drop-shadow-2xl delay-150 ease-in-out decoration-2 !text-white font-semibold  px-4 py-2 rounded-xs text-xs sm:text-sm w-full md:w-auto">
            Shop Now
          </button>
        </div>



    { <CardTab></CardTab>}
    </div>
    </div>






    <div className="w-full xl:w-[30%] mt-5 space-y-8"> 
        <div className="border border-[#c1c4cc] px-1 py-1.5 rounded-sm ">
            <Image src={applogo} width={500} height={500} alt="app" />
        </div>

        <div className="border border-[#c1c4cc] px-1 py-1.5 rounded-sm ">
            <Image src={applogo} width={500} height={500} alt="app" />
        </div>

        <div className="border border-[#c1c4cc] px-1 py-1.5 rounded-sm ">
            <Image src={applogo} width={500} height={500} alt="app" />
        </div>

        
    </div>



  </div>
  </div>
  )
}

export default HomeCardDatailspage;