'use client'
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { cn } from "@/utils/tailClass"
import noimg from '../../../image/noimage.webp'


interface BlogCardProps {
  title: string
  summary: string
  imageUrl: string
  date: string
  author: string
  commentCount?: number
  isFeatured?: boolean
  className?: string
  href: string,
  updatedAt:string
}





export function BlogCards({
  title,
  summary,
  imageUrl,
  commentCount = 0,
  isFeatured = false,
  className,
  href,
  updatedAt
}: BlogCardProps) {




  const createdAt = new Date(`${updatedAt}`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });



  return (
    <div className={cn("flex flex-col md:flex-row gap-4 pb-4 mb-4", className)}>
      <div className="flex-shrink-0">
        <Link href={href}>
          <div className="relative w-full md:w-32 h-32 overflow-hidden rounded-md">
            <Image src={imageUrl || noimg} alt={title} fill className="object-cover" />
          </div>
        </Link>
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex items-start gap-2">
          <Link href={href} className="flex-1">
            <h2 className="text-[#303437] text-[24px] font-bold transition-colors">{title}</h2>
          </Link>
          {isFeatured && <Heart className="h-5 w-5 text-gray-400 flex-shrink-0" />}


        </div>
        <p className="text-sm text-gray-600 !mt-[-10px]">{summary}</p>


        <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-4 gap-y-1">
          <p>Published {createdAt}</p>
          {/* {author && <p>by {author}</p>} */}
          {commentCount > 0 && (
            <Link href={`${href}#comments`} className="text-blue-600 hover:underline">
              {commentCount} {commentCount === 1 ? "comment" : "comments"}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

