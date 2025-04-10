/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image"
import Link from "next/link"
import work from '../../../image/work.jpg'

type SocialIconProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

// App Store Button Component
type AppStoreButtonProps = {
  href: string;
  type?: string;
  label: string;
  imgSrc: string;
};


// bg-[#3a5495]
export default function SocialMediaSection() {
  return (
    <section className="w-full relative text-white py-10 px-4 mb-20 mt-28 !bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: `url('${work.src}')`}} >
      
      

      <div className="absolute inset-0 bg-[#3a5495]/95 bg-opacity-50"></div>

      
      <div className="relative z-10">
        <h2 className="text-2xl md:text-[40px] !font-bold text-center mb-8">More Ways To Interact With DealNews</h2>

        <div className="w-full mb-4">
          <hr className="border-white/30 w-20 mx-auto mb-8" />
        </div>



        {/* Social Media Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 custom-container mb-10">

          <Image src='https://corp.dealnews.com/wp-content/uploads/2022/01/ico-facebook.png' width={50} height={50} alt="facebook" />  
          <Image src='https://corp.dealnews.com/wp-content/uploads/2024/10/logo-black.png' width={50} height={50} alt="facebook" /> 

          <Image src='https://corp.dealnews.com/wp-content/uploads/2024/10/Instagram_Glyph_Gradient.png' width={50} height={50} alt="facebook" /> 
          <Image src='https://corp.dealnews.com/wp-content/uploads/2024/10/TikTok_Icon_Black_Circle.png' width={50} height={50} alt="facebook" /> 
          <Image src='https://corp.dealnews.com/wp-content/uploads/2022/01/ico-linkedin-1.png' width={50} height={50} alt="facebook" /> 
          <Image src='https://corp.dealnews.com/wp-content/uploads/2022/01/ico-rss1.png' width={50} height={50} alt="facebook" /> 
        </div>

        {/* App Store Buttons */}
        <div className="custom-container flex justify-around pb-24 !mt-16">
        <Image src='https://corp.dealnews.com/wp-content/uploads/2022/01/apple-store.png' width={150} height={500} alt="facebook" />
        <Image src='https://corp.dealnews.com/wp-content/uploads/2022/01/google-play.png' width={150} height={500} alt="facebook" />
        </div>
        
      </div>
    </section>
  )
}




// Social Icon Component
function SocialIcon({ href, label, icon }: SocialIconProps) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center group">
      <div className="w-12 h-12 rounded-full bg-[#2c4380] flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="text-sm text-center">{label}</span>
    </Link>
  )
}




// App Store Button Component
function AppStoreButton({ href, type, label, imgSrc }: AppStoreButtonProps) {
  return (
    <Link href={href} className="flex flex-col items-center transition-transform hover:scale-105">
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={`Download on ${label}`}
        width={135}
        height={40}
        className="rounded"
      />
      <span className="text-sm mt-2">{label}</span>
    </Link>
  )
}

