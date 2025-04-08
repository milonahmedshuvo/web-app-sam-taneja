"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { BlogCard } from "@/components/navComponent/BlogCard/BlogCard";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://10.0.10.245:9829/api/v1/blogs")
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

  // console.log(data?.data)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Tech News</h1>

      <div className="space-y-6">
        {data.map((post: any) => (
          <BlogCard
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
