import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


interface NewsCardProps {
  imageUrl: string | StaticImageData
  title: string
  description: string
  readMoreUrl: string
  date?: string
}

export function NewsCard({ imageUrl, title, description, readMoreUrl,  }: NewsCardProps) {
  return (
    <div className="h-full flex flex-col overflow-hidden border-0 shadow-none">
      <div className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="border-l border-r border-b border-gray-300 rounded">

      <div className="flex-grow p-4 pt-5">
        <h3 className="text-lg font-[400] text-gray-800 mb-2 text-[17px]">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
      <div className="p-4 pt-0">
        <Link
          href={readMoreUrl}
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-white hover:bg-[#42BCE2] hover:border-[#42BCE2] border-[1px] border-gray-300  px-3 py-1 rounded"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      </div>
    </div>
  )
}
