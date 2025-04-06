import HeroSectionDeelNews from "@/components/deelnews/banner/banner"
import SocialMediaSection from "@/components/deelnews/interact/interact";
import DeelnewsMeetting from "@/components/deelnews/meetting/meetting";
import ProductCarouselDeelnews from "@/components/deelnews/productCarousel/productCarousel";
import Testimonials from "@/components/deelnews/testimonials/testimonials";




const page = () => {
    return (
      <div className="pb-20 mt-9">
        <HeroSectionDeelNews/>
        <DeelnewsMeetting/>
        <Testimonials/> 
        <SocialMediaSection/>
        <ProductCarouselDeelnews/>
      </div>
    )
  }
  
  export default page;