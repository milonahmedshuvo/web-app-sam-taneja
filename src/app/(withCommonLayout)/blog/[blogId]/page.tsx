/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BlogCard from "@/components/home/blogCard/blogCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import applogo from "../../../../image/app.webp"
import Image from "next/image";
import { useGetAllBlogsQuery } from "@/redux/api/samtanejaApi";
import { TBlog } from "../../page";



interface BlogData {
  title: string;
  content: string;
  summary:string;
  updatedAt:string
}




const Detailspage = () => {
  const [data, setData] = useState<BlogData | null>(null);
  const {data:allBlogs, isLoading} = useGetAllBlogsQuery("")
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.blogId as string;




  useEffect(() => {
    if (!id) return;

    fetch(`https://samtaneja-api.code-commando.com/api/v1/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading || isLoading) {
    return (
      <div className="text-center py-10 text-lg font-medium">Loading...</div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-10 text-lg font-medium">No Data Found</div>
    );
  }


  const createdAt = new Date(`${data?.updatedAt}`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });





  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
     <div className="flex flex-col xl:flex-row gap-6 items-start">

     <div className="xl:w-[70%] ">
     <h1 className="text-[34px] font-[800]">{data.title}</h1>
     <p className="max-w-3xl text-[17px] font-[300] text-[#303437]">{data.summary}</p>
     <p className="text-[#303437] text-[15px] font-[300]">Updated {createdAt}</p>
     <div dangerouslySetInnerHTML={{ __html: data.content }} />
     </div>


     <div className=" rounded-md w-full xl:w-[30%]">


           <div className="border border-[#c1c4cc] px-1 py-1.5 rounded-sm mb-2">
                       <Image src={applogo} width={500} height={500} alt="app" />
                   </div>


        <div className="border border-[#c1c4cc] rounded-md ">
        <div className="flex justify-between px-2 mt-2">
            <p className="text-[#7f8387] font-[700] text-sm">From the Blog</p>
            <p className="text-base font-medium text-[#2c65af] hover:underline ">
              View All
            </p>
          </div>


          {
            allBlogs?.data?.map((blog:TBlog) => <BlogCard key={blog.id}
            image={blog.img as string}
            title={blog.title}
            subTitle={blog.summary}
            blogDateTitle="Blog Buying Guides 7 mos ago"
            href={`/blog/${blog.id}`}
          /> )
          }
        </div >
          
     </div> 

     </div>



      
    </div>
  );
};


export default Detailspage;
