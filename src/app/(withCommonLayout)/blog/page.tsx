'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { BlogCard } from "@/components/navComponent/BlogCard/BlogCard";
import { useEffect, useState } from "react";





const Page = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch('http://10.0.10.245:9829/api/v1/blogs')
      .then(res => res.json())
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
    return <div className="text-center py-10 text-lg font-medium">Loading...</div>;
  }


  
  console.log(data?.data)




  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Tech News</h1>

      <div className="space-y-6">
        {data.map((post: any, index) => (
          <BlogCard
            key={index}
            title={post.title}
            summary={post.summary}
            imageUrl={post.imageUrl}
            date={post.date}
            author={post.author}
            commentCount={post.commentCount}
            isFeatured={post.isFeatured}
            href={`/blog/${post._id}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;
