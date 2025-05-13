/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Card from "@/components/card/card";
import BlogCard from "@/components/home/blogCard/blogCard";
import StoreCarousel from "@/components/home/carousel/storeCarousel";
import ProductFilterComponent from "@/components/products/productFilter/ProductFilter";
import { useGetAllBlogsQuery } from "@/redux/api/samtanejaApi";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TBlog } from "../../page";
import Link from "next/link";




const Products = () => {
   const { data: allBlogs, isLoading } = useGetAllBlogsQuery("");
  const params = useParams();
  const categoryIdParam = params.id as string;
  const [id, setId] = useState<string>(categoryIdParam);

  const [categoriesProducts, setCategoriesProducts] = useState([]);
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
    if (categoryIdParam) {
      setId(categoryIdParam);
    }
  }, [categoryIdParam]);




  const fetchBlogs = async (page: number, id: string) => {
    try {
      const res = await fetch(
        `http://localhost:5777/api/v1/products?page=${page}&limit=20&categoryId=${id}`
      );
      const data = await res.json();

      setCategoriesProducts(data?.data || []);
      setTotalPages(data?.meta?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage, id);
  }, [currentPage, id]);





  if(isLoading){
    return <p> Loading...</p>
  }

 





 


  
  return (
    <div className="mb-10 max-w-7xl mx-auto">

      

      <div className="flex flex-col xl:flex-row gap-6 items-start"> 

      {/* product filter components  */}
      <div className="xl:w-[70%]">

        <ProductFilterComponent />
        <StoreCarousel projects={categoriesProducts} />

        <div>
          {/* show category data */}
          {categoriesProducts?.length === 0 ? (
            <p>No product found.</p>
          ) : (
            <div className="space-y-3">
              {categoriesProducts.map((product: any) => (
                <Card
                key={product.id}
                id={product.id}
                image={product.img}
                smallText={'store'}
                title={product.name}
                price={product.price}
                description={product.description}
              />
              ))}
            </div>
          )}
        </div>
      </div>


          <div className="border-t border-l border-r border-[#c1c4cc] rounded-md w-full xl:w-[30%] ">
                <div className="flex justify-between px-2 mt-2">
                  <p className="text-[#7f8387] font-[700] text-sm">From the Blog</p>
                  <Link href='/blog' className="cursor-pointer"> 
                  <p className="text-base font-medium text-[#2c65af] hover:underline">
                    View All
                  </p>
                  </Link>
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

export default Products;
