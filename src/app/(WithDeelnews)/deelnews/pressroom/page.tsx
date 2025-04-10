import { NewsCardGrid } from "@/components/deelnews/pressroom/news/NewsGrid"
import PressRoomBanner from "@/components/deelnews/pressroom/pressroomBanner/PressroomBanner"
import TeamPage from "@/components/deelnews/pressroom/teamPage/TeamPage"
import TestimonialSection from "@/components/deelnews/pressroom/testimonialSection/TestimonialSection"


const page = () => {
  return (
    <div>
        <PressRoomBanner/>
        <TeamPage/>
        <NewsCardGrid/>
        <TestimonialSection/>
    </div>
  )
}

export default page