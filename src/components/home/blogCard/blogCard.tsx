import Image from "next/image";
import Link from "next/link";
import noImg  from "../../../image/blog.webp"



interface BlogCard {
  image: string;
  title: string;
  subTitle: string;
  blogDateTitle: string;
  href: string
}

const BlogCard = ({ image, title, subTitle, blogDateTitle, href }: BlogCard) => {


  return (
    <div className="flex items-center border-b border-[#c1c4cc] h-32 pl-3 pt-3 pb-3 ">
      {/* Image div */}
      <div className="h-full w-32 flex-shrink-0">
         {
          href ? <Link href={href} > 
          <Image
            className="h-full w-full object-cover"
            src={image || noImg}
            width={128} 
            height={128}
            alt="image"
          />
          </Link> :  
        <Image
          className="h-full w-full object-cover"
          src={image}
          width={128} 
          height={128}
          alt="image"
        />
         }
      </div>

      {/* Content div */}
      <div className="h-full flex flex-col justify-center pl-4 pr-0.5">
        <p className="text-[13px] text-gray-500 w-full ">{blogDateTitle}</p>
        <Link href={href}><p className="text-[15px] font-medium text-black cursor-pointer">{title.substring(0, 45)}...</p> </Link>
        <p className="text-sm text-[#303437] leading-0 ">{subTitle.substring(0, 28)}...</p>
      </div>
    </div>

  );
};

export default BlogCard;
