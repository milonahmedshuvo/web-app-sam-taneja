import Link from "next/link"
import DeelNewsBanner from '../../../image/deelnewsBanner.jpg'


export default function HeroSectionDeelNews() {


  return (
    <section style={{ backgroundImage: `url('${DeelNewsBanner.src}')`}} className="w-full  bg-no-repeat bg-cover bg-center" > 
    
    <div className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden custom-container  ">

      {/* Content Container */}
      <div className="relative z-10  px-4 py-12 md:py-24 flex flex-col justify-center h-full ">
        <div className="max-w-5xl">

          {/* Logo */}
          <div className="mb-6 text-blue-400 font-semibold tracking-wider">DEALNEWS</div>


          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[65px] !font-bold text-white leading-tight mulish">
            Discovering the deals you want, at the moment you need them.
          </h1>
          


          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl">
            For consumers overwhelmed by the thousands of offers (and so-called offers) available online every day,
            DealNews provides a way to discover items that actually represent a great deal. The experts at DealNews
            guarantee we ll only list products that are the lowest price available from reputable companies.
          </p>



          {/* CTA Button */}
          <Link
            href="#"
            className=" mt-4 inline-flex items-center gap-2 bg-[#7287c3] hover:bg-[#3e5aa7] text-white font-[500] text-[17px] mulish px-6 py-5 rounded-md transition-colors duration-200"
          >
            Mission & Vision
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>


      {/* <div className="flex justify-between gap-10 ">
        <StatsCard value="17 mil" label="Visitors Per Month" />
          <StatsCard value="17 mil" label="Visitors Per Month" />
            <StatsCard value="17 mil" label="Visitors Per Month" />
      </div>       */}





    </div>

      

    </section>
  )
}

