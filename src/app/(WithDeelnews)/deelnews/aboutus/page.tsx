import AbountusBanner from "@/components/deelnews/aboutus/banner/AbountusBanner"
import OurTeam from "@/components/deelnews/aboutus/ourTeam/OurTeam"
import QuestionsAndAnswers from "@/components/deelnews/aboutus/questionsAndAnswers/QuestionsAndAnswers"
import ValueCardPage from "@/components/deelnews/aboutus/valuesCard/valueCardPage"


const page = () => {

  return (
    <div> 
      <AbountusBanner/>
      <ValueCardPage/>
      <OurTeam/>

      <QuestionsAndAnswers/>
    </div>
  )
}

export default page