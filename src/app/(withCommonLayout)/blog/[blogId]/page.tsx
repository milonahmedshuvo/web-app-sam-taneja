/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BlogCard from "@/components/home/blogCard/blogCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogData {
  title: string;
  content: string;
  summary:string;
  updatedAt:string
}




const Detailspage = () => {
  const [data, setData] = useState<BlogData | null>(null);
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

  if (loading) {
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
    <div className="container mx-auto px-4 py-8">


     <div className="flex flex-col xl:flex-row gap-6 items-start">

     <div className="xl:w-[70%] ">
     <h1 className="text-[34px] font-[800]">{data.title}</h1>
     <p className="max-w-3xl text-[17px] font-[300] text-[#303437]">{data.summary}</p>
     <p className="text-[#303437] text-[15px] font-[300]">Updated {createdAt}</p>
     <div dangerouslySetInnerHTML={{ __html: data.content }} />
     </div>


     <div className="border border-[#c1c4cc] rounded-md w-full xl:w-[30%]">


        <div className="flex justify-between px-2 mt-2">
            <p className="text-[#7f8387] font-[700] text-sm">From the Blog</p>
            <p className="text-base font-medium text-[#2c65af] hover:underline ">
              View All
            </p>
          </div>


          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          />

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/u0ina8b1daxa9gleeec3.png"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>
          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>
          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>
          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>
     </div> 

     </div>



      
    </div>
  );
};


export default Detailspage;
