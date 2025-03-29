"use client"
import { cn } from "@/utils/tailClass"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  source?: string
  daysAgo?: number
  freeShipping?: boolean
  isPrime?: boolean
  isFavorite?: boolean
  onToggleFavorite?: (id: string) => void
  className?: string
}

export function SaveDealsProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  source = "Amazon",
  daysAgo = 2,
  freeShipping = false,
  isPrime = false,
  isFavorite = false,
  onToggleFavorite,
  className,
}: ProductCardProps) {
  return (
    <div className={cn("w-full max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow-sm", className)}>
      <div className="flex flex-col space-y-3">
        <div className="relative h-32 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <span>{source}</span>
          <span className="mx-1">·</span>
          <span>{daysAgo} days ago</span>
        </div>

        <h3 className="text-base font-medium text-gray-900">{title}</h3>

        <div className="flex items-baseline">
          <span className="text-lg font-semibold text-green-600">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {(freeShipping || isPrime) && (
          <div className="text-xs text-gray-600">
            {freeShipping && <span>+ free shipping</span>}
            {freeShipping && isPrime && <span> w/ </span>}
            {isPrime && <span className="font-medium">Prime</span>}
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => onToggleFavorite?.(id)}
            className="rounded-full p-1 hover:bg-gray-100"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("h-5 w-5", isFavorite ? "fill-blue-600 text-blue-600" : "text-gray-400")} />
          </button>

          <Link href={`/product/${id}`} className="text-sm font-medium text-blue-600 hover:underline">
            Details &gt;
          </Link>
        </div>
      </div>
    </div>
  )
}

