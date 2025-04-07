import { BugIcon as QuestionMark, Heart, Users } from "lucide-react";
import { ValuesCard } from "./valuesCard";
import bg from '../../../../image/aboutusBg.png'

const ValueCardPage = () => {
  const values = [
    {
      title: "Curiosity",
      description:
        "We have questions before we have answers. We seek to understand before anything else.",
      icon: QuestionMark,
    },
    {
      title: "Compassion",
      description:
        "We know we are all in this together. We believe others speak their truth, and we listen with an empathetic ear.",
      icon: Heart,
    },
    {
      title: "Humility",
      description:
        "We are thankful, ever-learning, and we help clean up at the end of the party.",
      icon: Users,
    },
  ];

  return (
    <div className="relative bg-cover bg-no-repeat bg-fixed pt-16 pb-28" style={{backgroundImage: `url('${bg.src}')`}}  >

      
    <div className="absolute inset-0 bg-[#F7F9FE]/95" ></div>

     <div  className="custom-container relative z-10">

      <div className=" !mt-10">
        <p className="text-[#3e5aa7] text-[16px] uppercase text-center">Mission & Vision</p>
        <p className="text-[40px] font-[800] text-center ">The thrill of finding an amazing deal is something everyone should experience.</p>
        <p className="w-[100px] h-1 bg-[#AEC6EF] mx-auto !mt-[-18px] rounded-2xl"></p>
      </div> 


     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mt-24">
        {values.map((value, index) => (
          <ValuesCard
            key={index}
            title={value.title}
            description={value.description}
            icon={value.icon}
          />
        ))}
      </div>
     </div>


    </div>
  );
};

export default ValueCardPage;
