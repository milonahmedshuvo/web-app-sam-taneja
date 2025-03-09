import { FaRegCompass, FaFireAlt } from "react-icons/fa";
import { Breadcrumb } from "antd";
import CartCarousel from "../home/carousel/cardCarousel";




const CardDeals = () => {


  return (
    <div className="flex  w-full">
      <div className="space-y-10 w-2/5 mt-6 ">
        {/* card 1 */}
        <div className="flex items-center gap-5">
          <div>
            <FaRegCompass className="text-3xl text-gray-300"></FaRegCompass>
          </div>

          <div>
            <p className="text-[#303437] text-sm leading-none m-0 p-0 tracking-none">
              Code SANDISKFIVE
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex items-center gap-5 ">
          <div>
            <FaRegCompass className="text-3xl text-gray-300"></FaRegCompass>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#303437] text-sm leading-none m-0 p-0 tracking-none">
              Expires in 43 min
            </span>
            <span className="text-[#303437] text-sm leading-none m-0 p-0 tracking-none">
              Published 18 hr ago
            </span>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex items-center gap-5 ">
          <div>
            <FaFireAlt className="text-3xl text-gray-300"></FaFireAlt>
          </div>

          <div>
            <p className="text-[#303437] text-sm leading-none m-0 p-0 tracking-none">
              Popularity: 5/5
            </p>
          </div>
        </div>
      </div>

      {/* right bar  */}
      <div className="w-3/5 mx-auto  border-l-[1px] border-gray-200 pl-3 ">
        <Breadcrumb className="!text-sm ">
          <Breadcrumb.Item>
            <span className="!font-semibold !text-blue-500 text-md hover:underline">
              Home
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {/* <a href="" className="!text-blue-500 hover:!text-blue-700 !font-semibold text-md">Application Center</a> */}
            <span className="!font-semibold !text-blue-500 text-md hover:underline">
              Application Center
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="!font-semibold !text-blue-500 text-md hover:underline">
              Application List
            </span>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="!font-semibold !text-blue-500 text-md hover:underline">
              An Application
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
         

         {/* this is reuseable card carosel component it  */}
        {/* <CartCarousel projects={projects} /> */}

        <CartCarousel />






      </div>
    </div>
  );
};

export default CardDeals;
