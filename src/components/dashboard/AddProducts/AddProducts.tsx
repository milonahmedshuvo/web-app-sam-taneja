"use client";

import type React from "react";
import {  useState } from "react";
import {  Cloud, } from "lucide-react";
import { useGetAllCategoriesQuery, useGetAllStorisQuery } from "@/redux/api/samtanejaApi";
import { toast } from "sonner";
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs";



interface TCategory {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  createdAt: string; // or Date if you plan to parse it
  updatedAt: string; // or Date
}

interface TStore {
  id: string;
  name: string;
  createdAt: string; // or Date if you plan to parse it
  updatedAt: string; // or Date
}



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
];



export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    storeId: "",
    summary: "",
    price: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // data get from redux 
 const {data} = useGetAllCategoriesQuery(undefined)
 const {data:storeCategoris} = useGetAllStorisQuery(undefined)

 


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
  
    const formDatas = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDatas.append(key, value);
    });
    if (imageFile) formDatas.append("file", imageFile);
  

    try {
      const res = await fetch("https://samtaneja-api.code-commando.com/api/v1/products",{
        method: "POST",
        body: formDatas,
      });
  
      const result = await res.json();
      console.log(result);
      if(result.success){
        toast.success('Products post saved successfully!'); 
        setFormData({
          name: "",
          categoryId: "",
          storeId: "",
          summary: "",
          price: "",
          description: "",
        })
        setImageFile(null)
      }
    } catch (err) {
      console.error("Upload failed", err);
      toast.error("Failed to save products post.")
    }
  };






  return (
    <div className="space-y-4 px-4 md:px-6">


      {/* BreadCumbs components */}

     <Breadcrumbs title="Add New Product" category="Products" subCategory="Add New Product" ></Breadcrumbs>



      <div className="rounded-lg  bg-white p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-[#2E4454] text-[18px] font-medium mb-2 block"
              >
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
              <label
                htmlFor="image"
                className="text-[#2E4454] text-[18px] font-medium mb-2 block"
              >
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
                    <div className="text-xs text-gray-500">
                      {(imageFile.size / 1024).toFixed(2)} KB
                    </div>
                  </div>
                ) : (
                  <>
                    <Cloud className="mb-2 h-10 w-10 text-gray-400" />
                    <div className="text-center">
                      <p className="text-sm font-medium">
                        Drag your file(s) or{" "}
                        <span className="text-blue-500">browse</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        Max 10 MB files are allowed
                      </p>
                    </div>
                  </>
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="categoryId"
                className="text-[#2E4454] text-[18px] font-medium mb-2 block"
              >
                Select Categories<span className="text-red-500">*</span>
              </label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={(e) => handleSelectChange("categoryId", e.target.value)}
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none "
              >
                <option value="">Select</option>
                {data?.data?.map((category:TCategory) => (
                  <option key={category.name} value={category.id.toString()}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="storeId"
                  className="text-[#2E4454] text-[18px] font-medium mb-2 block"
                >
                  Select Stores<span className="text-red-500">*</span>
                </label>
                <select 
                  name="storeId"
                  value={formData.storeId}
                  onChange={(e) => handleSelectChange("storeId", e.target.value)}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm "
                >
                  <option value="">Select</option>
                  {storeCategoris?.data.map((store:TStore) => (
                    <option key={store.id} value={store.id.toString()}>
                      {store.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="text-[#2E4454] text-[18px] font-medium mb-2 block"
                >
                  Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    $
                  </span>
                  <input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="pl-7 mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none "
                    type="text"
                    
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-[#2E4454] text-[18px] font-medium mb-2 block"
              >
                Summmary <span className="text-red-500">*</span>
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Enter product description"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm min-h-[100px] focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-[#2E4454] text-[18px] font-medium mb-2 block"
              >
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
            className="w-full rounded-md bg-[#2C65AF] px-6 py-3 text-[18px] text-[#ffffff] cursor-pointer"
          >
            <span className="text-[#fff]">Save Product</span>
          </button>
        </form>
      </div>
    </div>
  );
}
