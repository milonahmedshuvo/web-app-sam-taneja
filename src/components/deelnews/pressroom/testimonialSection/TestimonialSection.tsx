import Image from "next/image"
import brand1 from '../../../../image/brand1.png'
import brand2 from '../../../../image/brand2.png'
import brand3 from '../../../../image/brand3.png'
import brand4 from '../../../../image/brand4.png'
import brand5 from '../../../../image/brand5.png'
import brand6 from '../../../../image/brand6.png'
import brand7 from '../../../../image/brand7.png'
import brand8 from '../../../../image/brand8.png'


export default function TestimonialSection() {

  const testimonials = [
    {
      logo: brand1,
      quote:
        'The tagline on the reliable and well-researched deals site DealNews.com says it all: "Where every day is Black Friday."',
      alt: "The New York Times logo",
    },
    {
      logo: brand2,
      quote: 'DealNews has details of bargains galore in every category you can think of"',
      alt: "CBS News logo",
    },
    {
      logo: brand3,
      quote:
        "One of &quot;The Top 100 Most Useful Sites on the Internet&quot;\nOne of the &quot;Best sites for bargain hunting&quot;",
      alt: "MSN Money logo",
    },
    {
      logo: brand4,
      quote: "&quot;Six Web sites that will save you money&quot;",
      alt: "MarketWatch logo",
    },
    {
      logo: brand5,
      quote:
        "&quot;Best analysis of Black Friday deals: DealNews.com&quot;\n&quot;DealNews... will help you find the best prices.&quot;",
      alt: "Good Morning America logo",
    },
    {
      logo: brand6,
      quote: "&quot;Mac daddy of Apple deals&quot;",
      alt: "Wired logo",
    },
    {
      logo: brand7,
      quote: "&quot;Ranked the #1 Black Friday Site&quot;",
      alt: "PC Magazine logo",
    },
    {
      logo: brand8,
      quote: "&quot;Always compiles the best deals on all manner of stuff, electronic or otherwise.&quot;",
      alt: "Yahoo Tech logo",
    },
  ]



  return (
    <section className="pt-10 pb-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 ">
          What they&aposre saying about DealNews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
              <div className="w-32 h-16 relative flex-shrink-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div>
                <p className="text-[#616161] font-[400]  whitespace-pre-line mulish">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
