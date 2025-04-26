/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"



export default function AddNewStores() {
  const [storeName, setstoreName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!storeName.trim()) {
      alert('success')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // toast({
      //   title: "Success",
      //   description: `store "${storeName}" has been created`,
      // })
      console.log(storeName)

      setstoreName("")
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to create store",
      //   variant: "destructive",
      // })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=" px-4 py-6 ">


      <div className="mb-8 flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Add New Store</h1>

        <nav className="flex text-sm text-gray-500">
          <Link href="/dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/dashboard/categories" className="hover:text-gray-700">
            Store
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/dashboard/categories/all" className="hover:text-gray-700">
            All Stores
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-700">Add New Store</span>
        </nav>
      </div>

      <div className="bg-white rounded-lg p-6 ">

      <form onSubmit={handleSubmit} className="w-full h-[400px] lg:h-[600px] xl:h-[700px] flex flex-col justify-between">
          <div className="mb-6">
            <label htmlFor="storeName" className="block text-[18px] font-medium mb-2">
              Store Name<span className="text-red-500">*</span>
            </label>
            <input
              id="storeName"
              placeholder="Enter store Name"
              value={storeName}
              onChange={(e) => setstoreName(e.target.value)}
              className="w-full focus:outline-none py-3 border border-gray-200 px-4 rounded"
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="mt-4 bg-[#2C65AF] py-2.5 rounded text-white ">
            {isSubmitting ? "Creating..." : <span className="text-white">Save Store</span>}
          </button>
        </form>     
    </div>
    </div>
  
)}
