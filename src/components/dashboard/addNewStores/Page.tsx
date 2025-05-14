/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useAddStoreMutation } from "@/redux/api/samtanejaApi";
import { toast } from "sonner";
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs";

export default function AddNewStores() {
  const [storeName, setstoreName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addStore, { data, error, isSuccess }] = useAddStoreMutation();

  if (isSuccess) {
    toast.success("Success store add");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(storeName)
    await addStore({ name: storeName });
    setstoreName("");
  };

  console.log({ data, error });

  return (
    <div className=" px-4 md:px-7">
      <Breadcrumbs
        title="Add New Store"
        category="Store"
        subCategory="Add New Store"
      ></Breadcrumbs>

      <div className="bg-white rounded-lg p-6 ">
        <form
          onSubmit={handleSubmit}
          className="w-full h-[400px] lg:h-[600px] xl:h-[700px] flex flex-col justify-between"
        >
          <div className="mb-6">
            <label
              htmlFor="storeName"
              className="block text-[18px] font-medium mb-2"
            >
              Store Name<span className="text-red-500">*</span>
            </label>
            <input
              id="storeName"
              name="storeName"
              placeholder="Enter store Name"
              value={storeName}
              onChange={(e) => setstoreName(e.target.value)}
              className="w-full focus:outline-none py-3 border border-gray-200 px-4 rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-[#2C65AF] py-2.5 rounded text-white  "
          >
            {isSubmitting ? (
              "Creating..."
            ) : (
              <span className="text-white cursor-pointer">Save Store</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
