"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { BlogCards } from "@/components/navComponent/BlogCard/BlogCard";
// import { useGetAllBlogsQuery } from "@/redux/api/samtanejaApi";
import Image from "next/image";
// import Link from "next/link";
import applogo from "../../../image/app.webp"
import { useEffect, useState } from "react";
import CustomPagination from "@/components/pagination/CustomPagination";

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
  // const {data:allBlogs, isLoading} = useGetAllBlogsQuery("")
   const [data, setData] = useState<any[] >([]);
   const [loading, setLoading] = useState(true);
   const [selectyear, setSelectYear] = useState(2015)
   const [newPage, setNewPage] = useState(1)

   const [blogMeta, setBlogMeta] = useState<{
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}>({
  page: 1,
  limit: 20,
  total: 100,
  totalPage: 1,
});

        
          // https://samtaneja-api.code-commando.com/api/v1
          useEffect(() => {
            fetch(`https://samtaneja-api.code-commando.com/api/v1/blogs?limit=20&year=${selectyear}&page=${newPage}`)
              .then((res) => res.json())
              .then((data) => {
                setData(data?.data || []);

                setBlogMeta(data?.meta)
                setLoading(false);
              })
              .catch((err) => {
                console.error(err);
                setLoading(false);
              });
          }, [selectyear, newPage]);




  
  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-medium">Loading...</div>
    );
  }




console.log("meta blog", blogMeta)
console.log(selectyear, newPage )


  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold !mb-18 text-[#303437]">Latest Tech News</h1>
 
      <div className="flex flex-col xl:flex-row gap-6 items-start">

      <div  className="w-full xl:w-[70%] ">
      <div  className="space-y-6 ">
        {data?.map((post: any) => (
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



      
    {/* pagination  */}
    <div>
      <CustomPagination
        meta={blogMeta}

        onPageChange={(newPage) => {
          console.log("Go to page:", newPage);
          // fetch new data here
          setNewPage(newPage);
        }}
      />

    </div>


     


      <p className="!text-[700] text-[24px] ">Archives</p>
      <ul className="space-y-4 flex flex-col items-center">
        {yearList.map((item, index) => (
          <li
            onClick={() => setSelectYear(item.year)}
            key={index}
            className="text-[#2c65af] text-[14px] font-semibold mulish cursor-pointer"
          >
           {/* <Link href={`/blog/date/${item.year}`} > {item.year}</Link> */}
             {item.year}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
