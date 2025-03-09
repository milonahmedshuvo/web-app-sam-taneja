import Image from "next/image";

interface BlogCard {
  image: string;
  title: string;
  subTitle: string;
  blogDateTitle: string;
}

const BlogCard = ({ image, title, subTitle, blogDateTitle }: BlogCard) => {


  return (
    <div className="flex items-center border-b border-[#c1c4cc] h-32 p-3 ">


      {/* Image div */}
      <div className="h-full w-32 flex-shrink-0">
        <Image
          className="h-full w-full object-cover"
          src={image}
          width={128} 
          height={128}
          alt="image"
        />
      </div>

      {/* Content div */}
      <div className="h-full flex flex-col justify-center px-4">
        <p className="text-xs text-gray-500  ">{blogDateTitle}</p>
        <p className="text-sm font-semibold text-black ">{title.substring(0, 45)}...</p>
        <p className="text-sm text-gray-600 leading-0 ">{subTitle.substring(0, 20)}...</p>
      </div>
    </div>

  );
};

export default BlogCard;
