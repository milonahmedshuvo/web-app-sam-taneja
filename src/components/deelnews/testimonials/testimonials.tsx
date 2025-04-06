import Image from "next/image"


const Testimonials = () => {
  return (
    <div className="custom-container">
        <div className="text-center">
            <p className="text-[#3e5aa7] uppercase font-[500] mulish">Testimonials</p>
            <p className="text-[#232323] font-semibold mulish text-[18px]" >See what the companies below are saying about DealNews!</p>
        </div>

        <div className="flex justify-between !mt-16">
            <div>
                <Image src='https://corp.dealnews.com/wp-content/uploads/2021/10/usatoday.png' width={110} height={500} alt="" />
            </div>

            <div>
                <Image src='https://corp.dealnews.com/wp-content/uploads/2021/10/abc.png' width={110} height={500} alt="" />
            </div>

            <div>
                <Image src='https://corp.dealnews.com/wp-content/uploads/2021/10/gma.png' width={110} height={500} alt="" />
            </div>

            <div>
                <Image src='https://corp.dealnews.com/wp-content/uploads/2021/10/kiplinger.png' width={110} height={500} alt="" />
            </div>
            <div>
                <Image src='https://corp.dealnews.com/wp-content/uploads/2021/10/huffington.png' width={110} height={500} alt="" />
            </div>
            <div>
                <Image src='https://corp.dealnews.com/wp-content/uploads/2021/10/orlandosen.png' width={110} height={500} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials