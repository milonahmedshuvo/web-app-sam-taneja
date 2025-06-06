"use client"

import React, { useEffect, useState } from "react"
import { Pagination as AntPagination } from "antd"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/utils/tailClass"


interface Meta {
  page: number
  limit: number
  total: number
  totalPage: number
}

interface PaginationProps {
  meta: Meta
  onPageChange?: (page: number) => void
  className?: string
}

export default function CustomPagination({
  meta,
  onPageChange,
  className,
}: PaginationProps) {
  const [current, setCurrent] = useState(meta.page)

  useEffect(() => {
    setCurrent(meta.page)
  }, [meta.page])

  const handleChange = (page: number) => {
    setCurrent(page)
    onPageChange?.(page)
  }

  const itemRender = (
    page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode,
  ) => {
    if (type === "prev") {
      return (
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 border-none"
          onClick={() => handleChange(current - 1)}
          disabled={current === 1}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )
    }
    if (type === "next") {
      return (
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 border-none"
          onClick={() => handleChange(current + 1)}
          disabled={current === meta.totalPage}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )
    }


    // bg-blue-500 text-white border-none


    if (type === "page") {
      return (
        <button
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium border-none",
            current === page ? "bg-blue-500 text-white border-none" : "text-gray-700 hover:bg-gray-100",
          )}
          onClick={() => handleChange(page)}
        >
          {page < 10 ? `0${page}` : page}
        </button>
      )
    }
    return originalElement
  }



  return (
    <div className={cn("flex justify-center", className)}>
      <AntPagination
        current={current}
        total={meta.total}
        pageSize={meta.limit}
        onChange={handleChange}
        itemRender={itemRender}
        showSizeChanger={false}
        className="flex items-center space-x-1"
        style={{
          // border: "none",
          borderColor: "transparent",
        }}
      />
    </div>
  )
}
