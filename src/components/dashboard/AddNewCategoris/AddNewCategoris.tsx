/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useState } from "react";
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs";
import { toast } from "sonner";
import {  useCreateCategorisNameMutation, useGetParentCategorisQuery } from "@/redux/api/samtanejaApi";

export default function AddNewCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [parentId, setParentId] = useState("");
  const { data } = useGetParentCategorisQuery(undefined);
  const [categorisName, {isError, isSuccess}] = useCreateCategorisNameMutation()

  if(isSuccess){
    toast.success('Category name create is succces!!')
  }
  if(isError){
    toast.error('Category name add is Filed!!')
  }


 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      alert("success");
      return;
    }
    setIsSubmitting(true);
    try {


      const data = {
       name: categoryName,
         parentId
      }

      await categorisName(data).unwrap()   
      // console.log(categoryName, parentId);
      setCategoryName("");
      setParentId("")
    } catch (error) {
      toast.error("Category name add Filed!!");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="px-4 md:px-7 mb-2">
      <Breadcrumbs
        title="Add New Categories"
        category="Category"
        subCategory="Add New Categories"
      ></Breadcrumbs>

      <div className="bg-white rounded-lg p-6 mt-2 ">
        <form
          onSubmit={handleSubmit}
          className="w-full h-[400px] lg:h-[600px] xl:h-[700px] "
        >
          <div className="mb-6">
            <label
              htmlFor="categoryName"
              className="block text-[18px] font-medium mb-2"
            >
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

          <div className="">
            <label
              htmlFor="categoryName"
              className="block text-[18px] font-medium mb-2"
            >
              ParentId<span className="text-red-500">*</span>
            </label>
            <select
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
              className="w-full focus:outline-none py-3 border border-gray-200 px-4 rounded"
            >
              <option value="">Select</option>
              {data?.data?.map((item: { id: string; name: string }) => (
                <option key={item.id} value={item.id}>
                  {item.id}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className=" !mt-8 bg-[#2C65AF] py-2.5 rounded text-white !px-6 "
          >
            {isSubmitting ? (
              "Creating..."
            ) : (
              <span className="text-white cursor-pointer ">Save Categories</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
