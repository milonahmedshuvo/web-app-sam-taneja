"use client";

import React, { useState, useEffect } from "react";
import { Cloud } from "lucide-react";
import {
  useGetAllCategoriesQuery,
  useGetAllStorisQuery,
} from "@/redux/api/samtanejaApi";
import { toast } from "sonner";
import { X } from "lucide-react";

interface TCategory {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}

interface TStore {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface TProduct {
  id: string;
  name: string;
  categoryId: string;
  storeId: string;
  summary: string;
  price: string;
  description: string;
}

interface TProductProps {
  isupdate: TProduct;
  close: () => void;
}

export default function UpdatedProduct({ isupdate, close }: TProductProps) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    categoryId: "",
    storeId: "",
    summary: "",
    price: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const { data } = useGetAllCategoriesQuery(undefined);
  const { data: storeCategoris } = useGetAllStorisQuery(undefined);

  // Pre-fill form with update data
  useEffect(() => {
    if (isupdate) {
      setFormData({
        id: isupdate.id || "",
        name: isupdate.name || "",
        categoryId: isupdate.categoryId || "",
        storeId: isupdate.storeId || "",
        summary: isupdate.summary || "",
        price: isupdate.price || "",
        description: isupdate.description || "",
      });
    }
  }, [isupdate]);

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
    if (e.dataTransfer.files?.length > 0) {
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
    if (imageFile) {
      formDatas.append("file", imageFile);
    }

    try {
      const res = await fetch(
        `http://localhost:5777/api/v1/products/${isupdate.id}`,
        {
          method: "PATCH", // Use PUT for update
          body: formDatas,
        }
      );

      const result = await res.json();
      console.log(result);
      if (result.success) {
        toast.success("Product updated successfully!");
        close();
      }
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update product.");
    }

    console.log("update submit");
  };

  return (
    <div className="space-y-4 px-4 md:px-6 !mt-40">
      <div className="rounded-lg bg-white p-6">
        <div className="flex justify-end">
          <button onClick={()=> close()} className="cursor-pointer hover:text-red-700" >
            <X className="cursor-pointer hover:text-red-700" />
          </button>
        </div>
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
                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm"
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
                onChange={(e) =>
                  handleSelectChange("categoryId", e.target.value)
                }
                required
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm"
              >
                <option value="">Select</option>
                {data?.data?.map((category: TCategory) => (
                  <option key={category.id} value={category.id}>
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
                  onChange={(e) =>
                    handleSelectChange("storeId", e.target.value)
                  }
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm"
                >
                  <option value="">Select</option>
                  {storeCategoris?.data?.map((store: TStore) => (
                    <option key={store.id} value={store.id}>
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
                    className="pl-7 mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="summary"
                className="text-[#2E4454] text-[18px] font-medium mb-2 block"
              >
                Summary<span className="text-red-500">*</span>
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Enter product summary"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm min-h-[100px]"
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
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm min-h-[200px]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#2C65AF] px-6 py-3 text-[18px] !text-white "
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}
