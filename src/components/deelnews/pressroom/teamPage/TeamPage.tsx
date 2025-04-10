import Image from "next/image"
import Link from "next/link"
import { Mail, Download } from "lucide-react"
import media1 from "../../../../image/man1.png"
import media2 from "../../../../image/man4.jpeg"



export default function TeamPage() {


  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl my-10 lg:my-20">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Media Requests</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-gray-600" />
              <span>Contact us at </span>
              <Link href="mailto:press@dealnews.com" className="ml-1 text-[#0056b3] hover:underline">
                press@dealnews.com
              </Link>
            </div>
            <div className="flex items-center">
              <Download className="h-5 w-5 mr-2 text-gray-600" />
              <Link href="#" className="text-primary hover:underline text-[#0056b3]">
                Download The DealNews logo
              </Link>
            </div>
          </div>
        </div>



        {/* Team Members */}
        <div className="grid gap-8 md:gap-12">
          {/* Team Member 1 */}
          <div className="border-0 overflow-hidden">
            <div className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 lg:w-1/5">
                  <div className="relative h-64 md:h-full w-full">
                    <Image
                      src={media1}
                      alt="Dan de Grandpré"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-3/4 lg:w-4/5">
                  <h2 className="text-2xl font-bold mb-1">Dan de Grandpré</h2>
                  <p className="text-gray-600 mb-4">Co-Founder and CEO</p>
                  <div className="prose max-w-none mb-4 text-[#616161] leading-6">
                    <p>
                      Dan de Grandpré is the co-founder and CEO of DealNews. Dan is a forward-thinking and decisive
                      e-commerce leader. In 1997, Dan pioneered the aggregation of deals and started up DealNews. More
                      recently, he foresaw the shift to mobile, and DealNews now has more app and email visits than
                      website visits. Dan has analyzed e-commerce fads since e-commerce began, from online auctions to
                      flash sales to daily deals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Areas of Expertise:
                    </h3>
                    <div className="flex flex-wrap ">
                      {[
                        "E-commerce & omni-channel strategy",
                        "Entrepreneurship & startups",
                        "Mobile commerce",
                        "Online coupons",
                        "CPG coupons",
                        "Daily deal industry",
                        "Social commerce",
                        "Comparison shopping",
                        "Flash sales industry",
                        "General business strategy",
                      ].map((area) => (
                        <span key={area} className=" text-[#616161] text-sm px-1 py-1 rounded-full ">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* Team Member 2 */}
          <div className="border-0  overflow-hidden">
            <div className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 lg:w-1/5">
                  <div className="relative h-64 md:h-full w-full">
                    <Image
                      src={media2}
                      alt="Julie Ramhold"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="p-6 md:w-3/4 lg:w-4/5">
                  <h2 className="text-2xl font-bold mb-1">Julie Ramhold</h2>
                  <p className="text-gray-600 mb-4">Senior Content Editor</p>
                  <div className="prose max-w-none mb-4 text-[#616161] leading-6">
                    <p>
                      Julie Ramhold, the Senior Editor for DealNews is a content writer and consumer analyst. She joined
                      the company in September 2015 and is based in Huntsville, AL. Shes responsible for creating copy
                      and assisting with editing, as well as collaborating with external sources to feature services
                      relevant to consumers. Her expert analysis has appeared in outlets such as Business Insider,
                      Forbes, Readers Digest, NBC News, The New York Times, and more.
                    </p>
                    <p>
                      In her free time, she enjoys watching anime with her husband, baking for coworkers, and cuddling
                      with her cats while reading mysteries.
                    </p>
                  </div>
                  <div> 
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Areas of Expertise:
                    </h3>
                    <div className="flex flex-wrap">
                      {[
                        "Retail",
                        "Shopping",
                        "Electronics",
                        "Smart home",
                        "E-commerce",
                        "Black Friday",
                        "Cyber Monday",
                        "Travel",
                      ].map((area) => (
                        <span key={area} className="text-[#616161]  text-sm px-1 py-1  ">
                          {area},
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
