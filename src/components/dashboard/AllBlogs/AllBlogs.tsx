/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { PencilIcon, Plus, Search, TrashIcon } from "lucide-react";
import Image from "next/image";
import {
  useAllBlogsWithPaginationQuery,
  useBlogsDeletedMutation,
} from "@/redux/api/samtanejaApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs";
import UpdateBlogPage from "../AddBlog/UpdateBlog";

interface TBlog {
  id: string;
  year: string;
  title: string;
  content: string;
  author: string;
  summary: string;
  img: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState("10");
  const [deleteProductId, setDeleteProductId] = useState<string | null>("");
  const [blogDelete, { data, isSuccess }] = useBlogsDeletedMutation();
  console.log("delete data", data);
  // pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { data: allBlogs } = useAllBlogsWithPaginationQuery(currentPage);


  // updated blog 
  const [updatedBlogData, setUpdatedBlogData] = useState<TBlog | null>(null)


  useEffect(() => {
    if (allBlogs?.meta?.totalPage) {
      setTotalPages(allBlogs.meta.totalPage);
    }
  }, [allBlogs]);



  useEffect(() => {
    // fetchBlogs(currentPage);
    setCurrentPage(currentPage);
  }, [currentPage]);




if(isSuccess){
  toast.success("Success Deleted")
}


  

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };




  const filteredProducts = allBlogs?.data?.filter((product: TBlog) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayedProducts = filteredProducts?.slice(
    0,
    Number.parseInt(perPage)
  );

  //  Date format
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const handleDelete = (id: string) => {
    console.log("Deleting blog:", id);
    blogDelete(id);
    setDeleteProductId("");
  };


  // blog updated 
  const handleBlogUpdate = (post:TBlog) => {
        setUpdatedBlogData(post)
  }

  const close = () => {
    setUpdatedBlogData(null)
  }

  return (
    <div className="px-4 md:px-7 ">

      <Breadcrumbs title="All Blogs" category="Blogs" subCategory="All Blogs"></Breadcrumbs>
      

      <div className={` ${deleteProductId? 'opacity-20 bg-gray-300':"opacity-100" } `}>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-10 pt-4">
          <div className="flex gap-8 flex-col md:flex-row">
            

            <div className="relative ">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search here..."
                className="w-full pl-8 sm:w-[300px] py-2 focus:outline-none border border-gray-200 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* add button  */}
          <div className="border-[#2C65AF] border text-[#2C65AF] text-[ 15px] py-1.5 px-2 rounded cursor-pointer">
            <Link href="/dashboard/addBlog" className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              <button className="cursor-pointer">Add New Blog</button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 bg-gray-50 font-medium text-gray-500 px-10 py-4">
          <div className="col-span-6 sm:col-span-7">Product</div>
          <div className="col-span-4 sm:col-span-4 text-right sm:text-left">
            Publishing Date
          </div>
          <div className="col-span-2 sm:col-span-1 text-right">Actions</div>
        </div>

        {displayedProducts?.map((post:TBlog) => (
          <div
            key={post.id}
            className="grid grid-cols-12 border-t border-gray-200  items-center px-8 py-4"
          >
            <div className="col-span-6 sm:col-span-7 flex items-center">
              <div className="w-16 h-16 relative mr-3 flex-shrink-0">
                <Image
                  src={post.img || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="font-medium text-sm sm:text-base line-clamp-2 text-[#555F7E]">
                {post.title}
              </h3>
            </div>
            <div className="col-span-4 sm:col-span-4 text-right sm:text-left text-gray-500 text-sm">
              {formatDate(post.updatedAt)}
            </div>

            <div className="col-span-2 sm:col-span-1 flex justify-end space-x-2 text-[#555F7E] gap-3.5">
              <button  onClick={()=> handleBlogUpdate(post)}  className="text-gray-400 hover:text-gray-600 cursor-pointer" >
                <PencilIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-red-500 cursor-pointer" onClick={() => setDeleteProductId(post.id)}>
                <TrashIcon className="w-5 h-5"  />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>


      {deleteProductId && (    
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 ">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">Delete Product</h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteProductId(null)}
                className="px-4 py-2 rounded border text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteProductId)}
                className="px-4 py-2 rounded bg-red-500 text-white text-sm hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}


      
             {updatedBlogData && (    
               <div className="fixed inset-0 z-50 bg-opacity-100  overflow-y-auto">
                 <div className="bg-white p-6 rounded shadow-md w-full max-w-6xl mx-auto space-y-1">
                     {/* <UpdatedProduct isupdate={isupdate} close={close} ></UpdatedProduct> */}
                     <UpdateBlogPage close={close} updatedBlogData={updatedBlogData}  ></UpdateBlogPage>
                   <div className="flex justify-end gap-2">
                   </div>
                 </div>
               </div>
             )} 
      

    </div>
  );
}


