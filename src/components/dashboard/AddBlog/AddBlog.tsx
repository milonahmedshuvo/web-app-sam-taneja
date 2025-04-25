"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  LinkIcon,
  ImageIcon,
  Code,
  Quote,
  Undo,
  Redo,
  ChevronDown,
  AlignLeft,
} from "lucide-react"

export default function AddNewBlogPage() {
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null)
  const [headline, setHeadline] = useState("")
  const [subHeadline, setSubHeadline] = useState("")
  const [description, setDescription] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setThumbnail(file)
      setThumbnailPreview(URL.createObjectURL(file))
    }
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

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setThumbnail(file)
      setThumbnailPreview(URL.createObjectURL(file))
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the data to your API
    console.log({
      thumbnail,
      headline,
      subHeadline,
      description,
    })



    // For demo purposes, just show an alert
    alert("Blog post saved successfully!")
  }




  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-bold">Add New Blog</h1>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <Link href="/" className="hover:underline">
            Dashboard
          </Link>
          <span className="mx-2">›</span>
          <Link href="/" className="hover:underline">
            Blogs
          </Link>
          <span className="mx-2">›</span>
          <span>Add New Blog</span>
        </div>
      </div>



      <form onSubmit={handleSave}>
        <div className="bg-white rounded-lg  mb-6">
          <div className="p-6">
            <div className="mb-6">
              <label className="block text-[#2E4454] text-[18px] font-medium mb-2 block">
                Thumbnail <span className="text-red-500">*</span>
              </label>
              <div
                className={`border-2 border-dashed rounded-md p-6 text-center ${isDragging ? "border-primary bg-primary/5" : "border-gray-300"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {thumbnailPreview ? (
                  <div className="relative w-full h-40 mx-auto">
                    <img
                      src={thumbnailPreview || "/placeholder.svg"}
                      alt="Thumbnail preview"
                      className="h-full mx-auto object-contain"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                      onClick={() => {
                        setThumbnail(null)
                        setThumbnailPreview(null)
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mx-auto w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <label htmlFor="thumbnail-upload" >
                    <p className="text-sm text-gray-600 mb-1">
                      Drag your file(s) or <span className="text-primary cursor-pointer">browse</span>
                    </p>
                    </label>
                    <p className="text-xs text-gray-500">Max 10 MB files are allowed</p>
                  </>
                )}
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  id="thumbnail-upload"
                  accept="image/*"
                />
              </div>
              <label  htmlFor="thumbnail-upload" className="mt-2 inline-block text-primary text-sm cursor-pointer">
                Select a filedd
              </label>
            </div>







            <div className="mb-6">
              <label htmlFor="headline" className="block text-[#2E4454] text-[18px] font-medium mb-2 ">
                Headline <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="headline"
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Blog headline here..."
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="sub-headline" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                Sub-Headline
              </label>
              <div className="relative">
                <input
                  id="sub-headline"
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Blog sub-heading here"
                  value={subHeadline}
                  onChange={(e) => setSubHeadline(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                Description <span className="text-red-500">*</span>
              </label>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-gray-50">
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Undo className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Redo className="h-4 w-4" />
                  </button>
                  <div className="h-4 border-r border-gray-300 mx-1"></div>

                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="flex items-center p-1 rounded hover:bg-gray-200"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="text-xs mr-1">Normal text</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Normal text
                          </button>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Heading 1
                          </button>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Heading 2
                          </button>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            role="menuitem"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Heading 3
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="h-4 border-r border-gray-300 mx-1"></div>

                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Bold className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Italic className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Underline className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Strikethrough className="h-4 w-4" />
                  </button>

                  <div className="h-4 border-r border-gray-300 mx-1"></div>

                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <AlignLeft className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <List className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <ListOrdered className="h-4 w-4" />
                  </button>

                  <div className="h-4 border-r border-gray-300 mx-1"></div>

                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <LinkIcon className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <ImageIcon className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Code className="h-4 w-4" />
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <Quote className="h-4 w-4" />
                  </button>
                </div>
                <textarea
                  id="description"
                  className="w-full p-3 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Write your blog content here..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors w-full sm:w-auto"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  )
}
