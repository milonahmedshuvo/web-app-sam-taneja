/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Edit, Plus, Search, Trash2, ChevronRight } from "lucide-react";

// import headPhone from "../../../image/head.png";
import done from "../../../image/done.png";



type TProduct = {
  categoryId: string;
  createdAt: string; // ISO date string
  description: string;
  id: string;
  img: string; // URL string
  name: string;
  price: string;
  storeId: string;
  summary: string;
  updatedAt: string; // ISO date string
};


// const products = [
//   {
//     id: "1",
//     name: "3mazon Basics for the Home at Woot",
//     category: "Electronics",
//     store: "Amazon",
//     price: 60.76,
//     listingDate: "3/24/2025",
//     img : headPhone,
//   },
  
// ];

export default function AllProductsPage() {
  const [productss, setProducts] = useState<TProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState("10");
  const [deleteProductId, setDeleteProductId] = useState<string | null>("");

  const filteredProducts = productss.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayedProducts = filteredProducts.slice(0, Number.parseInt(perPage));








  // pagination setup 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // optional


    


  const fetchBlogs = async (page: number) => {
              
    try {
      const res = await fetch(
        `http://localhost:5777/api/v1//products?page=${page}&limit=30`
      );
      const data = await res.json();


      setProducts(data?.data || [] );
      setTotalPages(data?.meta?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };


  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const handleNext = () => {
    if(currentPage < totalPages ) setCurrentPage((prev) => prev + 1)
  }

  const handlePrevious = () => {
    if(currentPage > 1) setCurrentPage((prev) => prev - 1)
  }







//  Date format 
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // getMonth() is zero-based
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}



  // console.log("dashbord products", productss)

  const handleDelete = (id: string) => {
    // Here you would typically handle actual deletion
    console.log("Deleting product:", id);
    setDeleteProductId("");
  };

  
  return (
    <div className="space-y-4 px-4 md:px-6 ">

      

      <div className={` ${deleteProductId? 'opacity-20 bg-gray-300':"opacity-100" } `}> 

      <div  className="flex items-center justify-between my-6">
        <h1 className="text-[24px] text-[#1C2A53] font-semibold"> All Products</h1>

        <div className="text-[#617A8B] flex justify-between items-center gap-1 ">
           <span>Dashboard</span>
           <span><ChevronRight/></span>
           <span>Product’s</span>
           <span><ChevronRight/></span>
           <span>All Product’s</span>
        </div>
      </div>



      <div className={`overflow-x-auto rounded-md  bg-white px-10 py-5 `}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between  pb-8">
          <div className="flex gap-8 flex-col md:flex-row">

            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Showing</span>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={perPage}
                onChange={(e) => setPerPage(e.target.value)}
              >
                {[10, 20, 50, 100].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

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
            {displayedProducts.map((product) => (
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
                <td className="px-4 py-3">Emtry</td>
                <td className="px-4 py-3">Emtry</td>
                <td className="px-4 py-3">${ product.price}</td>
                <td className="px-4 py-3">
                  {/* {product.listingDate} */} { formatDate(product.updatedAt) }
                  </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end items-center gap-2">

                    {/* <Link href={`/products/${product.id}/edit`}> */}
                      <button>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </button>
                    {/* </Link> */}

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



    </div>
  );
}
