/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Card from "@/components/card/card";
import Banner from "@/components/home/banner/banner";
import BlogCard from "@/components/home/blogCard/blogCard";
// import Carousel from "@/components/home/carousel/carousel";
import StoreCarousel from "@/components/home/carousel/storeCarousel";
import ProductFilterComponent from "@/components/products/productFilter/ProductFilter";
import { useGetAllBlogsQuery } from "@/redux/api/samtanejaApi";
import { useEffect, useState } from "react";

export type TBlog = {
  id: string;            
  title: string;       
  content: string;       
  author: string;        
  summary: string;      
  img: string | null;   
  createdAt: string;     
  updatedAt: string;    
};


const Homepage = () => {
       const {data:allBlogs, isLoading} = useGetAllBlogsQuery("")
        
      const [data, setData] = useState<any[] >([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          fetch("https://samtaneja-api.code-commando.com/api/v1/products?page=1&limit=20&populate=category,store")
            .then((res) => res.json())
            .then((data) => {
              setData(data?.data || []);
              setLoading(false);
            })
            .catch((err) => {
              console.error(err);
              setLoading(false);
            });
        }, []);
      


        if (loading) {
          return (
            <div className="text-center py-10 text-lg font-medium">Loading...</div>
          );
        }


        if (isLoading) {
          return (
            <div className="text-center py-10 text-lg font-medium">Loading...</div>
          );
        }


        console.log("all card", data)






  return (
    <div className="max-w-7xl mx-auto">
      <Banner />

      <div className="flex flex-col xl:flex-row gap-6 items-start">



        <div className="xl:w-[70%] ">
          <ProductFilterComponent />
          {/* <Carousel /> */}
          <StoreCarousel projects={data} />
          {/* <Cartparent /> */}

          {data?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.img}
              smallText={item.store.name}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>






        <div className="border-t border-l border-r border-[#c1c4cc] rounded-md w-full xl:w-[30%] ">

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
           
        </div>
      </div>
    </div>
  );
};

export default Homepage;
