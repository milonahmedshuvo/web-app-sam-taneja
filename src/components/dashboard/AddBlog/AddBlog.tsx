/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function AddNewBlogPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setyear] = useState("");
  const [summary, setSummary] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  // Jodit
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const config = {
    height: 400,
    tabIndex: 2,
  };
  console.log("content", content);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    if (thumbnail) {
      formData.append("file", thumbnail);
    }
    formData.append("title", title);
    formData.append("author", author);
    formData.append("year", year);
    formData.append("summary", summary);
    formData.append("content", content);

    try {
      const res = await fetch("http://localhost:5777/api/v1/blogs", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log(result);
      if (result.success) {
        toast.success("Blog post saved successfully!");
        setThumbnail(null);
        setThumbnailPreview(null);
        setTitle("");
        setAuthor("");
        setyear("");
        setSummary("");
        setContent("");
      }
    } catch (err) {
      console.error("Upload failed", err);
      toast.error("Failed to save blog post.");
    }
  };

  return (
    <div className="px-4 md:px-7">
      <Breadcrumbs
        title="Add New Blog"
        category="Blog"
        subCategory="Add New Blog"
      ></Breadcrumbs>

      <form onSubmit={handleSave}>
        <div className=" rounded-lg  mb-6 pb-10">
          <div className="py-6">
            <div className="mb-6">
              <label className="text-[#2E4454] text-[18px] font-medium mb-2 block">
                Thumbnail <span className="text-red-500">*</span>
              </label>
              <div
                className={`border-2 border-dashed rounded-md p-6 text-center ${
                  isDragging ? "border-primary bg-primary/5" : "border-gray-300"
                }`}
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
                        setThumbnail(null);
                        setThumbnailPreview(null);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <label htmlFor="thumbnail-upload">
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

                      <p className="text-sm text-gray-600 mb-1">
                        Drag your file(s) or{" "}
                        <span className="text-primary cursor-pointer">
                          browse
                        </span>
                      </p>

                      <p className="text-xs text-gray-500">
                        Max 10 MB files are allowed
                      </p>
                    </label>
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
              {/* <label  htmlFor="thumbnail-upload" className="mt-2 inline-block text-primary text-sm cursor-pointer">
                Select a filedd
              </label> */}
            </div>

            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-[#2E4454] text-[18px] font-medium mb-2 "
              >
                Title <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="title"
                  type="text"
                  className="w-full border border-gray-200 py-3 rounded-md p-2 pr-8 focus:outline-none "
                  placeholder="Blog title here..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="Author"
                className="block text-[#2E4454] text-[18px] font-medium mb-2 "
              >
                Author <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="Author"
                  type="text"
                  className="w-full border border-gray-200 py-3 rounded-md p-2 pr-8 focus:outline-none "
                  placeholder="Blog Author here..."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="year"
                className="block text-[#2E4454] text-[18px] font-medium mb-2 "
              >
                Year <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="year"
                  type="text"
                  className="w-full border border-gray-200 py-3 rounded-md p-2 pr-8 focus:outline-none "
                  placeholder="Blog year here..."
                  value={year}
                  onChange={(e) => setyear(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="summary"
                className="block text-[#2E4454] text-[18px] font-medium mb-2 "
              >
                Summary <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  rows={6}
                  id="summary"
                  className="w-full border border-gray-200 py-3 rounded-md p-2 pr-8 focus:outline-none "
                  placeholder="Blog summary here..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* jodit components */}
            <div>
              <label
                htmlFor="sub-headline"
                className="text-[#2E4454] text-[18px] font-medium mb-2 block"
              >
                Content
              </label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)}
              />
            </div>
          </div>

          <div className="w-full mt-10">
            <button
              type="submit"
              className="bg-[#2C65AF] !text-white font-medium py-3 px-4 rounded-md transition-colors w-full"
            >
              Save Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
