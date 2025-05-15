import Link from "next/link"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { BsRssFill } from "react-icons/bs";





export default function Footer() {
  return (
    <footer className="w-full bg-white mt-10   ">
      <div className="px-4 py-8 flex flex-col md:flex-row">

        {/* Promotional Section */}
        <div className="bg-[#2a69b2] text-white p-6 md:p-8 mb-6 md:mb-0 md:w-1/6 relative ">
          <div className="max-w-[200px]">
            <h2 className="text-2xl font-bold mb-2">Never miss a deal!</h2>
            <p className="text-sm mb-4">
              For instant access to all of our deals and discounts, download the DealNews app.
            </p>
          </div>
        </div>


        {/* Links Sections */}
        <div className="md:w-3/4 md:pl-16 grid grid-cols-1 md:grid-cols-3 gap-8 ">

          {/* Deals Section */}
          <div className=" lg:pl-28">
            <h3 className="text-[#303437] !font-semibold !mb-4">DEALS</h3>

            {/* <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#2a69b2] font-[500] text-[14px] hover:underline">
                  POPULAR BRANDS
                </Link>
              </li>
              
            </ul> */}
          </div>


          {/* Helpful Links Section */}
          <div>
            <h3 className="text-[#303437] !font-semibold !mb-4">HELPFUL LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/deelnews/aboutus" className="text-[#2a69b2] font-[500] text-[14px] hover:underline">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/deelnews" className="text-[#2a69b2] font-[500] text-[14px] hover:underline">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link href="/deelnews/pressroom" className="text-[#2a69b2] font-[500] text-[14px] hover:underline">
                  PRESS ROOM
                </Link>
              </li>
  
              <li>
                <Link href="/deelnews/faq" className="text-[#2a69b2] font-[500] text-[14px] hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-[#303437] !font-semibold !mb-4">CONNECT</h3>
            <div className="flex flex-col space-y-4">
                <Link href='https://www.facebook.com/dealnews'> <FaFacebookSquare className="w-9 h-9 text-[#2a69b2]"></FaFacebookSquare> </Link>
                <Link href='https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F125457' > <FaLinkedin className="w-9 h-9 text-[#0077B5]"/> </Link> 
                <Link href='https://x.com/DealNews'> < FaTwitterSquare className="w-9 h-9 text-[#1DA1F2]" /> </Link>  
                <Link href='https://www.dealnews.com/pages/rss.html'> <BsRssFill className="w-9 h-9 text-[#f26522]" /> </Link> 
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2c65af]  pt-5 pb-0.5 pl-3.5" >
         <p className="text-white text-sm leading-0">© Copyright 2025 DealNews. All rights reserved.</p>
      </div>
    </footer>
  )
}

