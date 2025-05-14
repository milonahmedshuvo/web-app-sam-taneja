"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Edit, Plus, Search, Trash2 } from "lucide-react"



const categories = [
    {
      id: "1",
      name: "Clothing (06)",
      productCount: 148,
      subcategories: true,
    },
    {
      id: '2',
      name: "Electronics (08)",
      productCount: 77,
      subcategories: true,
    },
    {
      id: '3',
      name: "Computers (05)",
      productCount: 58,
      subcategories: true,
    },
    {
      id: '4',
      name: "Hotel & Garden (04)",
      productCount: 65,
      subcategories: true,
    },
    {
      id: '5',
      name: "Travel & Entertainment (07)",
      productCount: 111,
      subcategories: true,
    },
    {
      id: '6',
      name: "Airfare (0)",
      productCount: 98,
      subcategories: false,
    },
    {
      id: '7',
      name: "Automotive (0)",
      productCount: 14,
      subcategories: false,
    },
    {
      id: '8',
      name: "Clothing & Accessories (0)",
      productCount: 32,
      subcategories: false,
    },
    {
      id: '9',
      name: "Computers (0)",
      productCount: 65,
      subcategories: false,
    },
    {
      id: '10',
      name: "Gaming's & Toys (0)",
      productCount: 41,
      subcategories: false,
    },
  ]





export default function AllCategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [perPage, setPerPage] = useState("10")
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const displayedCategories = filteredCategories.slice(0, Number.parseInt(perPage))

  const handleDeleteClick = (id: string) => {
    setSelectedCategoryId(id)
    setDeleteModal(true)
  }

  const confirmDelete = () => {
    // TODO: Implement actual delete logic
    console.log("Deleting category:", selectedCategoryId)
    setDeleteModal(false)
  }






  return (
    <div className="space-y-4 px-4 md:px-6 ">
      <div className="flex items-center justify-between mt-6">
        <h1 className="text-xl font-semibold">All Categories</h1>
        
      </div>

      





   <div className="overflow-x-auto rounded-md  bg-white px-10 py-6">

 <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white pb-6">

<div className="flex gap-8 flex-col md:flex-row"> 
  <div className="flex items-center gap-2">
    <span className="text-sm text-gray-500">Showing</span>
    <select
      className="w-[70px] rounded-md border border-gray-200 px-2 py-1 text-sm focus:outline-none"
      value={perPage}
      onChange={(e) => setPerPage(e.target.value)}
    >
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>

  <div className="relative">
    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
    <input
      type="search"
      placeholder="Search here..."
      className="w-full rounded-md border border-gray-200 pl-8 pr-2 py-2 text-sm sm:w-[300px] focus:outline-none"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
  </div>


  {/* add button  */}
  <div className="border-[#2C65AF] border text-[#2C65AF] text-[ 15px] py-1.5 px-2 rounded cursor-pointer" >
      <Link href="/dashboard/addCategoris" className="flex items-center">
      <Plus className="mr-2 h-4 w-4" />  
        <button className="cursor-pointer">
          Add New Categoris
        </button>
      </Link>
    </div>


</div>




        <table className="min-w-full table-auto text-sm ">

          <thead className="bg-gray-100 text-[#8E95A9] text-[16px] ">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Categories Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">
                <div className="flex items-center gap-1">
                  T. Product Listed
                  <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {displayedCategories.map((category) => (
              <tr key={category.id} className="border-t border-gray-200 text-[#2E4454]">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    {category.name}
                    {category.subcategories && <ChevronRight className="h-4 w-4 text-gray-400" />}
                  </div>
                </td>
                <td className="px-4 py-2">{category.productCount}</td>
                <td className="px-4 py-2 text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/categories/${category.id}/edit`}>
                      <button className="rounded-md p-2 hover:bg-gray-100" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                    </Link>
                    <button
                      className="rounded-md p-2 hover:bg-gray-100"
                      title="Delete"
                      onClick={() => handleDeleteClick(category.id)}
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

      {/* Custom Modal for Delete Confirmation */}
      {deleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Delete Category</h2>
            <p className="mt-2 text-lg text-gray-600">
              Are you sure you want to delete this category?
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => setDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-red-600 px-4 py-2 text-sm !text-white hover:bg-red-700 cursor-pointer"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
