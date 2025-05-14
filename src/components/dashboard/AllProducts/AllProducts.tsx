/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Edit, Plus, Search, Trash2, ChevronRight, Home } from "lucide-react";
// import headPhone from "../../../image/head.png";
import done from "../../../image/done.png";
import { useProductDeleteMutation, useProductGetLimitedQuery } from "@/redux/api/product/productApi";
import { useAllBlogsWithPaginationQuery } from "@/redux/api/samtanejaApi";
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs";
import UpdatedProduct from "../AddProducts/UpdateProduct";


export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  img: string;
  summary: string;
  categoryId: string;
  storeId: string;
  createdAt: string; 
  updatedAt: string; 
  category: {
    id: string;
    name: string;
    slug: string;
    parentId: string;
    createdAt: string; 
    updatedAt: string; 
  };
  store: {
    id: string;
    name: string;
    createdAt: string; 
    updatedAt: string; 
  };
};



export default function AllProductsPage() {
  // const [productss, setProducts] = useState<TProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState("10");
  const [deleteProductId, setDeleteProductId] = useState<string | null>("");
  const [productDelete, {data}] = useProductDeleteMutation()
  // pagination setup 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [totalBlogPages, setBlogTotalPages] = useState(1); 
  const {data:allProduct } = useProductGetLimitedQuery(currentPage)
  // updated 
  const [isupdate, setIsUpdate] = useState<TProduct | null >(null)


 
  // console.log("all product from redux", allProduct?.meta?.totalPage)
  // const fetchBlogs = async (page: number) => {
  //   try {
  //     const res = await fetch(
  //       `https://samtaneja-api.code-commando.com/api/v1/products?page=${page}&limit=10`
  //     );
  //     const data = await res.json();


  //     setProducts(data?.data || [] );
  //     setTotalPages(data?.meta?.totalPages || 1);
  //   } catch (error) {
  //     console.error("Error fetching blogs:", error);
  //   }
  // };



  useEffect(()=>{
    if(allProduct?.meta?.totalPage){
      setTotalPages(allProduct?.meta?.totalPage)  
    }
  }, [allProduct])

  useEffect(() => {
    // fetchBlogs(currentPage);
    setCurrentPage(currentPage)
  }, [currentPage]);

  const handleNext = () => {
    if(currentPage < totalPages ) setCurrentPage((prev) => prev + 1)
  }
  const handlePrevious = () => {
    if(currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  const filteredProducts = allProduct?.data?.filter((product:TProduct) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayedProducts = filteredProducts?.slice(0, Number.parseInt(perPage));  


//  Date format 
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

  const handleDelete = (id: string) => {
    productDelete(id)
    setDeleteProductId("");
  };




  const handleUpdateProduct = (product:TProduct) => {
    //  console.log('update product', product)
     setIsUpdate(product)
  }
  
  const close = () => {
     setIsUpdate(null)
  }

  
 



  return (
    <div className="space-y-4 px-4 md:px-6 ">



      <div className={` ${deleteProductId || isupdate ? 'opacity-20 bg-gray-300':"opacity-100" }   `}> 

      <Breadcrumbs title="All Products" category="Products" subCategory="All Products" ></Breadcrumbs>

      <div className={`overflow-x-auto rounded-md  bg-white px-10 py-5 `}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between  pb-8">
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
          <div className="border-[#2C65AF] border text-[#2C65AF] text-[ 15px] py-1.5 px-2 rounded cursor-pointer" >
            <Link href="/dashboard/addProducts" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />  
              <button className="cursor-pointer">
                Add New Product
              </button>
            </Link>
          </div>
        </div>


        <table className="w-full text-sm ">
          <thead className="bg-gray-100 text-[#8E95A9] font-[400] ">
            <tr>
              <th className="text-left px-4 py-2 w-[300px]">Product</th>
              <th className="text-left px-4 py-2">Categories</th>
              <th className="text-left px-4 py-2">Stores</th>
              <th className="text-left px-4 py-2 flex items-center gap-1">
                Price <ChevronDown className="h-4 w-4" />
              </th>
              <th className="text-left px-4 py-2">Listing Date </th>
              <th className="text-right px-4 py-2">Actions</th>
            </tr>
          </thead>



          <tbody>
            {displayedProducts?.map((product:TProduct) => (
              <tr key={product.id} className="border-t border-gray-100 text-[#555F7E]">
                <td className="px-4 py-5">
                  <div className="flex justify-between items-center gap-3">
                    <div className="  w-1/4  rounded-md ">
                      <Image
                        src={product.img || done}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-ful"
                      />
                    </div>
                    <span className="font-medium w-3/4">{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{product.category?.name}</td>
                <td className="px-4 py-3">{product.store.name}</td>
                <td className="px-4 py-3">${ product.price}</td>
                <td className="px-4 py-3">
                 { formatDate(product.updatedAt) }
                  </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end items-center gap-2">
                      <button onClick={()=>handleUpdateProduct(product)} >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </button>
                    <button
                      onClick={() => setDeleteProductId(product.id)}
                      className="p-2 rounded hover:bg-gray-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                className="px-4 py-2 rounded border text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteProductId)}
                className="px-4 py-2 rounded bg-red-500 !text-white text-sm hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}


       {/* update modal  */}
       {isupdate && (    
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100  overflow-y-auto">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-6xl space-y-4">
              <UpdatedProduct isupdate={isupdate} close={close} ></UpdatedProduct>
            <div className="flex justify-end gap-2">
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
