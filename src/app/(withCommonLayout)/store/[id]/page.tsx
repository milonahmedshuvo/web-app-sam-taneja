"use client"
import Card from "@/components/card/card";
import { useGetAllBlogsQuery } from "@/redux/api/samtanejaApi";
import { TBlog } from "../../page";
import BlogCard from "@/components/home/blogCard/blogCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type TStore = {
  id: string;
  name: string;
  description: string;
  price: string;
  img: string;
  summary: string;
  categoryId: string;
  storeId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};


const Storepage = () => {
  const { data: allBlogs, isLoading } = useGetAllBlogsQuery("");
  const params = useParams();
  const storeIdParam = params.id as string;
  const [id, setId] = useState<string>(storeIdParam);

  console.log("category id", id);

  const [StoreProducts, setStoreProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // optional



  // set page
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };


  // set id
  useEffect(() => {
    if (storeIdParam) {
      setId(storeIdParam);
    }
  }, [storeIdParam]);

  const fetchBlogs = async (page: number, id: string) => {
    try {
      const res = await fetch(
        `https://samtaneja-api.code-commando.com/api/v1/products?page=${page}&limit=20&storeId=${id}`
      );
      const data = await res.json();

      setStoreProducts(data?.data || []);
      setTotalPages(data?.meta?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage, id);
  }, [currentPage, id]);



  console.log("store products", StoreProducts);



  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-medium">Loading...</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        <div className="xl:w-[70%] ">
          {/* <ProductFilterComponent />
          <Carousel /> */}
          {/* <Cartparent /> */}

          {StoreProducts?.map((item:TStore) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.img}
              smallText={'store'}
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

          {allBlogs?.data?.map((blog: TBlog) => (
            <BlogCard
              key={blog.id}
              image={blog.img as string}
              title={blog.title}
              subTitle={blog.summary}
              blogDateTitle="Blog Buying Guides 7 mos ago"
              href={`/blog/${blog.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storepage;
