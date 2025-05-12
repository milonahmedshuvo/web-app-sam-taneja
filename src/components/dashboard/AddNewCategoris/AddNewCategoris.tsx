/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs"



export default function AddNewCategory() {
  const [categoryName, setCategoryName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!categoryName.trim()) {
      alert('success')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // toast({
      //   title: "Success",
      //   description: `Category "${categoryName}" has been created`,
      // })
      console.log(categoryName)

      setCategoryName("")
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to create category",
      //   variant: "destructive",
      // })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=" px-4 md:px-7 mb-2 ">


      <Breadcrumbs title="Add New Categories" category="Category" subCategory="Add New Categories" ></Breadcrumbs>

      <div className="bg-white rounded-lg p-6 mt-2 ">
      <form onSubmit={handleSubmit} className="w-full h-[400px] lg:h-[600px] xl:h-[700px] flex flex-col justify-between">
          <div className="mb-6">
            <label htmlFor="categoryName" className="block text-[18px] font-medium mb-2">
              Category Name<span className="text-red-500">*</span>
            </label>
            <input
              id="categoryName"
              placeholder="Enter Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full focus:outline-none py-3 border border-gray-200 px-4 rounded"
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="mt-4 bg-[#2C65AF] py-2.5 rounded text-white ">
            {isSubmitting ? "Creating..." : <span className="text-white">Save Categories</span>}
          </button>
        </form>     
    </div>
    </div>
  
)}
