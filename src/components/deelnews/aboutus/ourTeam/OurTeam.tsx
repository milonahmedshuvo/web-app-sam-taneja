import TeamProfileCard from "./TeamProfileCard";
import man1 from "../../../../image/man1.png";
import man2 from "../../../../image/man2.png";
import man3 from "../../../../image/man3.png";



const OurTeam = () => {
  return (
    <div className="custom-container !pt-20 !pb-20 px-6">
      <h2 className="text-[40px] mulish !font-[700] ">Our Executive Team</h2>
      <p className="w-[100px] h-[5px] bg-[#AEC6EF] !mt-[-14px] rounded-2xl"></p>
      <p className="text-[16px] font-[400] text-[#616161] max-w-5xl mulish leading-6 ">
        DealNews started in 1997 when two friends wanted to share the amazing
        deals they were finding with the rest of the world. Since then, the
        company has grown to more than 100 employees worldwide, with an
        executive team thats just as enthusiastic (some might use the term
        obsessed ) about our mission of sharing the best deals with the world as
        our original founders were.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 !mt-12">  

      <TeamProfileCard
        name="Daniel de Grandpre"
        title="CEO AND CO-FOUNDER"
        bio={[
          "Dan de Grandpre has built DealNews into a discovery platform that dominates the product recommendation space, with over 250 million visits annually. A forward-thinking and decisive e-commerce leader, Dan is known for his ability to foresee and monetize shifts in consumer behavior.",
        ]}
        education={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        
        imageSrc={man1}
      />

      <TeamProfileCard
        name="Daniel de Grandpre"
        title="CEO AND CO-FOUNDER"
        bio={[
          "Dan de Grandpre has built DealNews into a discovery platform that dominates the product recommendation space, with over 250 million visits annually. A forward-thinking and decisive e-commerce leader, Dan is known for his ability to foresee and monetize shifts in consumer behavior.",
        ]}
        education={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        educationTwo={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        imageSrc={man2}
      />

      <TeamProfileCard
        name="Daniel de Grandpre"
        title="CEO AND CO-FOUNDER"
        bio={[
          "Dan de Grandpre has built DealNews into a discovery platform that dominates the product recommendation space, with over 250 million visits annually. A forward-thinking and decisive e-commerce leader, Dan is known for his ability to foresee and monetize shifts in consumer behavior.",
        ]}
        education={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        educationTwo={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        imageSrc={man3}
      />

<TeamProfileCard
        name="Daniel de Grandpre"
        title="CEO AND CO-FOUNDER"
        bio={[
          "Dan de Grandpre has built DealNews into a discovery platform that dominates the product recommendation space, with over 250 million visits annually. A forward-thinking and decisive e-commerce leader, Dan is known for his ability to foresee and monetize shifts in consumer behavior.",
        ]}
        education={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        educationTwo={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        imageSrc={man1}
      />

      <TeamProfileCard
        name="Daniel de Grandpre"
        title="CEO AND CO-FOUNDER"
        bio={[
          "Dan de Grandpre has built DealNews into a discovery platform that dominates the product recommendation space, with over 250 million visits annually. A forward-thinking and decisive e-commerce leader, Dan is known for his ability to foresee and monetize shifts in consumer behavior.",
        ]}
        education={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        educationTwo={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        imageSrc={man2}
      />

      <TeamProfileCard
        name="Daniel de Grandpre"
        title="CEO AND CO-FOUNDER"
        bio={[
          "Dan de Grandpre has built DealNews into a discovery platform that dominates the product recommendation space, with over 250 million visits annually. A forward-thinking and decisive e-commerce leader, Dan is known for his ability to foresee and monetize shifts in consumer behavior.",
        ]}
        education={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        educationTwo={[
          "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
        ]}
        imageSrc={man3}
      />

    </div>


    </div>
  );
};

export default OurTeam;
