/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Card from "@/components/card/card";
import Banner from "@/components/home/banner/banner";
import BlogCard from "@/components/home/blogCard/blogCard";
import Carousel from "@/components/home/carousel/carousel";
import ProductFilterComponent from "@/components/products/productFilter/ProductFilter";
import Image from "next/image";
import { useEffect, useState } from "react";
import applogo from "../../image/app.webp"



//title : name 
// image : img
// price: price
// description: summary
//  company: store.name


// const cartDatas = [
//   {
//     id: "1",
//     image:
//       "https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/cms/pv3qpvsxrluysblvumn2.jpg",
//     smallText: "Woot! An Amazon Company · 5 hrs ago",
//     title: "SanDisk Memory Deals",
//     price: "From $3",
//     description:
//       "In this sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout.vis sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout Buy Now at Woot! An Amazon Company.",
//   },
//   {
//     id: "2",
//     image:
//       "https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/cms/w19nmg3hu65y8lwqsijs.jpg",
//     smallText: "Woot! An Amazon Company · 5 hrs ago",
//     title: "SanDisk Memory Deals",
//     price: "From $3",
//     description:
//       "In this sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout.vis sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout Buy Now at Woot! An Amazon Company.",
//   },
//   {
//     id: "3",
//     image:
//       "https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/cms/qf9jexi1szonvh046cdf.jpg",
//     smallText: "Woot! An Amazon Company · 5 hrs ago",
//     title: "SanDisk Memory Deals",
//     price: "From $3",
//     description:
//       "In this sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout.vis sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout Buy Now at Woot! An Amazon Company.",
//   },
//   {
//     id: "4",
//     image:
//       "https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/cms/pv3qpvsxrluysblvumn2.jpg",
//     smallText: "Woot! An Amazon Company · 5 hrs ago",
//     title: "SanDisk Memory Deals",
//     price: "From $3",
//     description:
//       "In this sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout.vis sale you'll find savings on a selection of SanDisk memory items. Prices start from $2.99 when you use coupon code 'SANDISKFIVE' at checkout Buy Now at Woot! An Amazon Company.",
//   },
// ];


// interface HomeCardTypes {
//   img: string;
//   price: string;
//   name: string;
//   summary: string;
//   store: object
// }


const Homepage = () => {
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


        console.log("ami data", data)




  return (
    <div className="max-w-7xl mx-auto">
      <Banner />

      <div className="flex flex-col xl:flex-row gap-6 items-start">



        <div className="xl:w-[70%] ">
          <ProductFilterComponent />
          <Carousel />
          {/* <Cartparent /> */}

          {data?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.img}
              smallText={item.store.name}
              title={item. name}
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

          {/* <div className="border border-[#c1c4cc] px-1 py-1.5 rounded-sm mb-2">
            <Image src={applogo} width={500} height={500} alt="app" />
        </div> */}


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

export default Homepage;
