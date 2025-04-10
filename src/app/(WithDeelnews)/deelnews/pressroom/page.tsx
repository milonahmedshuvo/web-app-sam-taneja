import { NewsCardGrid } from "@/components/deelnews/pressroom/news/NewsGrid"
import PressRoomBanner from "@/components/deelnews/pressroom/pressroomBanner/PressroomBanner"
import TeamPage from "@/components/deelnews/pressroom/teamPage/TeamPage"


const page = () => {
  return (
    <div>
        <PressRoomBanner/>
        <TeamPage/>
        <NewsCardGrid/>
    </div>
  )
}

export default page