"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { BlogCards } from "@/components/navComponent/BlogCard/BlogCard";
import { useGetAllBlogsQuery } from "@/redux/api/samtanejaApi";
import Image from "next/image";
import Link from "next/link";
import applogo from "../../../image/app.webp"

const yearList = [
  { year: 2024 },
  { year: 2023 },
  { year: 2022 },
  { year: 2021 },
  { year: 2020 },
  { year: 2019 },
  { year: 2018 },
  { year: 2017 },
  { year: 2016 },
  { year: 2015 },
  { year: 2014 },
  { year: 2013 },
  { year: 2012 },
  { year: 2011 },
  { year: 2010 },
  { year: 2009 },
  { year: 2008 },
];

const Page = () => {
  const {data:allBlogs, isLoading} = useGetAllBlogsQuery("")
  
  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-medium">Loading...</div>
    );
  }




  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Tech News</h1>
 
      <div className="flex flex-col xl:flex-row gap-6 items-start">

      <div  className="xl:w-[70%] ">
      <div  className="space-y-6">
        {allBlogs?.data?.map((post: any) => (
          <BlogCards
            key={post.id}
            title={post.title}
            summary={post.summary}
            imageUrl={post.img}
            date={post.date}
            author={post.author}
            commentCount={post.commentCount}
            isFeatured={post.isFeatured}
            href={`/blog/${post.id}`}
            updatedAt={post.updatedAt}
          />
        ))}
      </div>
      </div>
        
         <div className="rounded-md w-full xl:w-[30%] ">

           <div className="border border-[#c1c4cc] px-1 py-1.5 rounded-sm mb-2">
            <Image src={applogo} width={500} height={500} alt="app" />
        </div>

        <div className="border border-[#c1c4cc] px-1 py-1.5 rounded-sm mb-2 !mt-6">
            <Image src={applogo} width={500} height={500} alt="app" />
        </div>
           </div>
        
        
        </div> 



      







      <p className="!text-[700] text-[24px] ">Archives</p>
      <ul className="space-y-4 flex flex-col items-center">
        {yearList.map((item, index) => (
          <li
            key={index}
            className="text-[#2c65af] text-[14px] font-semibold mulish"
          >
           <Link href={`/blog/date/${item.year}`} > {item.year}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
