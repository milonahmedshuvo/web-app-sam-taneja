import Image, { StaticImageData } from "next/image"


interface ProfileCardProps {
  name: string
  title: string
  bio: string[]
  education: string[]
  educationTwo?: string[]
  imageSrc:StaticImageData
}

export default function TeamProfileCard({
  name = "Daniel de Grandpre",
  title = "CEO AND CO-FOUNDER",
  bio = [
    "Dan de Grandpre has built DealNews into a discovery platform that dominates the product recommendation space, with over 250 million visits annually. A forward-thinking and decisive e-commerce leader, Dan is known for his ability to foresee and monetize shifts in consumer behavior.",
  ],
  education = [
    "Dan earned his Bachelor's degree in Psychology from Carnegie Mellon University and Master's from the University of Oregon.",
  ],
  educationTwo,
  imageSrc,

}: ProfileCardProps) {






  return (
    <div className="overflow-hidden ">
      <div className="flex flex-col items-center ">

        <div className="relative !w-full mb-4 bg-cover group cursor-pointer flex justify-center">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            width={500}
            height={10}
          />
          <div className="absolute inset-0 bg-blue-400/55 hidden group-hover:block"></div>
        </div>


        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-sm font-[500] text-muted-foreground uppercase tracking-wider !mt-[-10px] text-[#616161]">{title}</p>
      </div>

      <div className="border-t border-[#3e5aa7] border-2 rounded" />

      <div className="pt-8">
        {bio.map((paragraph, i) => (
          <p key={i} className="text-[16px] font-[400] text-[#616161] mb-4 leading-6">
            {paragraph}
          </p>
        ))}

        {education.map((paragraph, i) => (
          <p key={i} className="text-[16px] font-[400] text-[#616161]  leading-6">
            {paragraph}
          </p>
        ))}

    {educationTwo?.map((paragraph, i) => (
          <p key={i} className="text-[16px] font-[400] text-[#616161]  leading-6">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

