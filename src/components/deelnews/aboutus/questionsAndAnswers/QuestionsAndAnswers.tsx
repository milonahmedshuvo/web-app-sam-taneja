import Image from "next/image"
import Link from "next/link"
import QuestionsAndAnswersImage from '../../../../image/questionsAndAnswersImage.jpg'


export default function QuestionsAndAnswers() {


  return (
    <section className="w-full mt-10 lg:mt-20">
      <div className="flex flex-col md:flex-row">

        {/* Left content section */}
        <div className="bg-[#3e5aa7] text-white p-6 md:p-12 lg:p-16 md:w-1/2 h-[400px] lg:h-[500px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative">
            Questions And Answers
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-white"></span>
          </h2>

          <div className="mt-12 space-y-6">
            <p className="text-base md:text-lg">
              Before you send off an email,{" "}
              <Link href="/faq" className="text-green-300 hover:underline">
                check our F.A.Q.
              </Link>{" "}
              which has answers to the most <span className="text-green-300">Frequently Asked Questions</span>.
            </p>

            <p className="text-base md:text-lg mt-6">
              You can reach our company voicemail at (256) 971-6840, but please remember, DealNews does not sell the
              products we list and we won&apos;t return calls asking us to sell you the products we list.
            </p>
          </div>
        </div>

        {/* Right image section */}
        <div className="md:w-1/2 relative  md:h-auto h-[400px] lg:h-[500px]">
          <Image
            src={QuestionsAndAnswersImage}
            alt="People looking at computer screen"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
