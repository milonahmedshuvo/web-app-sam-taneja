import Image from "next/image"
import { CheckCircle } from "lucide-react"
import meetting from '../../../image/meetting.png'

export default function DeelnewsMeetting () {

  return (
    <main className=" bg-white">
      <section className="custom-container mx-auto px-4 py-12 md:py-16">
        <div className="relative">

          

          <div  className="grid gap-8 md:grid-cols-2 lg:gap-12">


            {/* Image container */}
            <div className="relative ml-4 md:ml-8">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={meetting}
                  width={800}
                  height={600}
                  alt="Business professionals reviewing deals"
                  className="h-auto w-full object-cover"
                  priority
                />
              </div> 
              <div className="mt-4 text-end">
            <h2 className="text-4xl !font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Since <span className="text-[#3e5aa7] ">1997</span>
            </h2>
          </div>
            </div>




            {/* Content container */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[#3e5aa7] md:text-base">
                  DealNews Promise
                </h3>
                <h2 className="mt-2 text-3xl !font-bold tracking-tight text-gray-900 md:text-4xl lg:text-[40px] mulish">
                  Every Deal We List Is The Lowest Price We Could Find, Sold By A Reputable Store.
                </h2>
                <div className="mt-4 h-1 w-16 bg-blue-200"></div>
              </div>

              <p className="text-[#616161] mulish leading-7">
                Our obsessive dedication to listing only the best deals is why DealNews is one of the top 1,000 most
                visited web sites in the United States and read by tens of millions of deal-hungry consumers each month.
                Not bad for a site created way back in 1997, just so a couple of friends could share the great deals on
                cool gadgets that they were finding, right?
              </p>

              <ul className="space-y-4 !mt-7">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-800 mulish">
                    We list the best deals period, regardless of our relationship with the seller.
                  </span>
                </li>
                <li className="flex items-start gap-3 ">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-800 mulish">
                    We ban any store that we find has a history of poor customer service.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <span className="text-gray-800 mulish">
                    We never list a higher price from another store just because it is an advertiser.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </section>
    </main>
  )
}

