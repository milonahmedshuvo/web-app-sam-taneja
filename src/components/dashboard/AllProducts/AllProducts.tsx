"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Edit, Plus, Search, Trash2 } from "lucide-react";

import headPhone from "../../../image/head.png";
import done from "../../../image/done.png";

const products = [
  {
    id: "1",
    name: "Amazon Basics for the Home at Woot",
    category: "Electronics",
    store: "Amazon",
    price: 60.76,
    listingDate: "3/24/2025",
    image: headPhone,
  },
  {
    id: "2",
    name: "Specta Mini 4K GPS Drone",
    category: "Electronics",
    store: "Walmart",
    price: 66.41,
    listingDate: "3/24/2025",
    image: done,
  },
  {
    id: "3",
    name: "Refurb Apple iPhones Series 13 and 14 at Woot",
    category: "Electronics",
    store: "Amazon",
    price: 95.66,
    listingDate: "3/24/2025",
    image: null,
  },
  {
    id: "4",
    name: "Samsung Bar Plus 256GB USB 3.1 Flash Drive",
    category: "Electronics",
    store: "eBay",
    price: 84.8,
    listingDate: "3/24/2025",
    image: done,
  },
  {
    id: "5",
    name: "Replacement Remote Control 2-Pack for Roku",
    category: "Electronics",
    store: "Daraz",
    price: 46.52,
    listingDate: "3/24/2025",
    image: null,
  },
  {
    id: "6",
    name: "Headphones and Earbuds at Woot",
    category: "Electronics",
    store: "Amazon",
    price: 81.54,
    listingDate: "3/24/2025",
    image: done,
  },
  {
    id: "7",
    name: "Hanes Men's EcoSmart Fleece Hoodie Sweatshirt",
    category: "Clothes",
    store: "Amazon",
    price: 17.46,
    listingDate: "3/24/2025",
    image: null,
  },
  {
    id: "8",
    name: "Mendham Bikes Spring Sale",
    category: "Car's",
    store: "Walmart",
    price: 43.08,
    listingDate: "3/24/2025",
    image: done,
  },
  {
    id: "9",
    name: "Farberware 6.2-Cu. Ft. Refrigerator w/ Water Dispenser",
    category: "Electronics",
    store: "Walmart",
    price: 86.65,
    listingDate: "3/24/2025",
    image: null,
  },
  {
    id: "10",
    name: "Wrangler San Antonio 3-Piece Expandable Luggage Set",
    category: "Travel",
    store: "eBay",
    price: 49.08,
    listingDate: "3/24/2025",
    image: done,
  },
];

export default function AllProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState("10");
  const [deleteProductId, setDeleteProductId] = useState<string | null>("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedProducts = filteredProducts.slice(0, Number.parseInt(perPage));

  const handleDelete = (id: string) => {
    // Here you would typically handle actual deletion
    console.log("Deleting product:", id);
    setDeleteProductId("");
  };

  return (
    <div className="space-y-4 px-4 md:px-6 ">

      <div className="flex items-center justify-between mt-6">
        <h1 className="text-[24px] text-[#1C2A53] font-semibold"> All Products</h1>
      </div>

      <div className="overflow-x-auto rounded-md  bg-white px-10 py-5">
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
            <Link href="/products/new" className="flex items-center">
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
              <th className="text-left px-4 py-2">Actions</th>
              <th className="text-right px-4 py-2">Actions</th>
            </tr>
          </thead>



          <tbody className="">
            {displayedProducts.map((product) => (
              <tr key={product.id} className="border-t border-gray-100 text-[#555F7E] ">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 relative overflow-hidden rounded-md">
                      <Image
                        src={product.image || headPhone}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">{product.store}</td>
                <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                <td className="px-4 py-3">{product.listingDate}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end items-center gap-2">
                    <Link href={`/products/${product.id}/edit`}>
                      <button>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </button>
                    </Link>
                    <button
                      onClick={() => setDeleteProductId(product.id)}
                      className="p-2 rounded hover:bg-gray-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteProductId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
