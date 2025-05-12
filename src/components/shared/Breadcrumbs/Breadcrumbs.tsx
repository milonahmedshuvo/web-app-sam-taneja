"use client";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface TBreadcrumbs {
    title: string,
    category: string,
    subCategory: string
}



const Breadcrumbs = ({title, category, subCategory}:TBreadcrumbs) => {


  return (
    <div>
      <div className="flex justify-between pt-6 pb-4">
        <h1 className="text-[#1C2A53] text-[24px] font-semibold">
          {title}
        </h1>

        <div className="flex items-center gap-1 text-[17px] text-gray-500">
          <Link
            href="/dashboard"
            className="flex items-center gap-1 hover:text-gray-900"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-gray-900">
            {category}
          </Link>
          
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{subCategory}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
