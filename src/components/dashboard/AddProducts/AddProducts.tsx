"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Cloud, Home } from "lucide-react"


const categories = [
  {
    id: 1,
    name: "Clothing (06)",
    productCount: 148,
    subcategories: true,
  },
  {
    id: 2,
    name: "Electronics (08)",
    productCount: 77,
    subcategories: true,
  },
  {
    id: 3,
    name: "Computers (05)",
    productCount: 58,
    subcategories: true,
  },
  {
    id: 4,
    name: "Hotel & Garden (04)",
    productCount: 65,
    subcategories: true,
  },
  {
    id: 5,
    name: "Travel & Entertainment (07)",
    productCount: 111,
    subcategories: true,
  },
  {
    id: 6,
    name: "Airfare (0)",
    productCount: 98,
    subcategories: false,
  },
  {
    id: 7,
    name: "Automotive (0)",
    productCount: 14,
    subcategories: false,
  },
  {
    id: 8,
    name: "Clothing & Accessories (0)",
    productCount: 32,
    subcategories: false,
  },
  {
    id: 9,
    name: "Computers (0)",
    productCount: 65,
    subcategories: false,
  },
  {
    id: 10,
    name: "Gaming's & Toys (0)",
    productCount: 41,
    subcategories: false,
  },
]
export const stores = [
  {
    id: 1,
    name: "Amazon",
  },
  {
    id: 2,
    name: "Walmart",
  },
  {
    id: 3,
    name: "eBay",
  },
  {
    id: 4,
    name: "Daraz",
  },
  {
    id: 5,
    name: "Best Buy",
  },
  {
    id: 6,
    name: "Target",
  },
  {
    id: 7,
    name: "Newegg",
  },
]





export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    store: "",
    affiliateCode: "",
    regularPrice: "",
    previousPrice: "",
    extras: "",
    description: "",
  })




  const [imageFile, setImageFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setImageFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, image: imageFile })
  }









  return (
    <div className="space-y-4 px-4 md:px-6">

      <div className="flex justify-between pt-6 pb-4">
        <h1 className="text-[#1C2A53] text-[24px] font-semibold">Add New Product</h1>

        <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/dashboard" className="flex items-center gap-1 hover:text-gray-900">
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/products" className="hover:text-gray-900">
          Products
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Add New Product</span>
      </div>
      </div>



      <div className="rounded-lg  bg-white p-6">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">

            <div>

              <label htmlFor="name" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                Product Name<span className="text-red-500">*</span>
              </label>

              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Product Name"
                required
                className=" w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm "
              />
            </div>

            <div>
              <label htmlFor="image" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                Product Image<span className="text-red-500">*</span>
              </label>
              <div
                className={`mt-1 flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-4 transition-colors ${
                  isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                {imageFile ? (
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-medium">{imageFile.name}</div>
                    <div className="text-xs text-gray-500">{(imageFile.size / 1024).toFixed(2)} KB</div>
                  </div>
                ) : (
                  <>
                    <Cloud className="mb-2 h-10 w-10 text-gray-400" />
                    <div className="text-center">
                      <p className="text-sm font-medium">
                        Drag your file(s) or <span className="text-blue-500">browse</span>
                      </p>
                      <p className="text-xs text-gray-500">Max 10 MB files are allowed</p>
                    </div>
                  </>
                )}
                <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                Select Categories<span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={(e) => handleSelectChange("category", e.target.value)}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none "
              >
                <option value="">Select</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id.toString()}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="store" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                  Select Stores<span className="text-red-500">*</span>
                </label>
                <select
                  name="store"
                  value={formData.store}
                  onChange={(e) => handleSelectChange("store", e.target.value)}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm "
                >
                  <option value="">Select</option>
                  {stores.map((store) => (
                    <option key={store.id} value={store.id.toString()}>
                      {store.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="affiliateCode" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                  Enter Product Affiliate Code
                </label>
                <input
                  id="affiliateCode"
                  name="affiliateCode"
                  value={formData.affiliateCode}
                  onChange={handleChange}
                  placeholder="Enter code"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label htmlFor="regularPrice" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                  Regular Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                  <input
                    id="regularPrice"
                    name="regularPrice"
                    value={formData.regularPrice}
                    onChange={handleChange}
                    className="pl-7 mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none "
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="previousPrice" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                  Previous Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                  <input
                    id="previousPrice"
                    name="previousPrice"
                    value={formData.previousPrice}
                    onChange={handleChange}
                    className="pl-7 mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none"
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="extras" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                  Extras
                </label>
                <input
                  id="extras"
                  name="extras"
                  value={formData.extras}
                  onChange={handleChange}
                  placeholder="Extra information"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm  focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm min-h-[200px] focus:outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#2C65AF] px-6 py-3 text-[18px] text-[#ffffff] hover:bg-blue-700 cursor-pointer"
          >
            <span className="text-[#fff]">Save Product</span>
          </button>
        </form>
      </div>
    </div>
  )
}
