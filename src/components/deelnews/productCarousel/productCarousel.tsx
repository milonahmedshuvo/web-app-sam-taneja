/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"
import Image from "next/image"
import HeadingContentCarosel from "../headingContent/headingContent"
import { div } from "framer-motion/client"

type Product = {
  id: number
  title: string
  category: string
  date: string
  source: string
  imageUrl: string
}

// Utility function to conditionally join classNames (replacing cn)
const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

// Custom button component
const CustomButton = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "icon"
  disabled?: boolean
  onClick?: () => void
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizeStyles = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={classNames(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom badge component
const CustomBadge = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full px-4.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "bg-[#3e5aa7] text-white ",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// Custom card components
const CustomCard = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <div className={classNames("rounded-lg  bg-card text-card-foreground shadow-lg", className)} {...props}>
      {children}
    </div>
  )
}

const CustomCardHeader = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <div className={classNames("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  )
}

const CustomCardContent = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <div className={classNames("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

const CustomCardFooter = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <div className={classNames("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

const sampleProducts: Product[] = [
  {
    id: 1,
    title: "DealNews PR Roundup for April 17",
    category: "Uncategorized",
    date: "04/17/2024",
    source: "DealNews",
    imageUrl: "https://corp.dealnews.com/wp-content/uploads/2024/05/PR5124-390x290.jpeg",
  },
  {
    id: 2,
    title: "DealNews PR Roundup for April 10",
    category: "Uncategorized",
    date: "04/10/2024",
    source: "DealNews",
    imageUrl: "https://corp.dealnews.com/wp-content/uploads/2024/04/PR42424-390x290.jpeg",
  },
  {
    id: 3,
    title: "DealNews PR Roundup for April 3",
    category: "Uncategorized",
    date: "04/03/2024",
    source: "DealNews",
    imageUrl: "https://corp.dealnews.com/wp-content/uploads/2024/04/PR41724-390x290.jpeg",
  },
  {
    id: 4,
    title: "DealNews PR Roundup for March 27",
    category: "Uncategorized",
    date: "03/27/2024",
    source: "DealNews",
    imageUrl: "https://corp.dealnews.com/wp-content/uploads/2024/03/PR3624-390x290.jpeg",
  },
  {
    id: 5,
    title: "DealNews PR Roundup for March 20",
    category: "Uncategorized",
    date: "03/20/2024",
    source: "DealNews",
    imageUrl: "https://corp.dealnews.com/wp-content/uploads/2024/04/PR4324-390x290.png",
  },
  {
    id: 6,
    title: "DealNews PR Roundup for March 13",
    category: "Uncategorized",
    date: "03/13/2024",
    source: "DealNews",
    imageUrl: "https://corp.dealnews.com/wp-content/uploads/2024/03/PR_32724-390x290.jpeg",
  },
]

export default function ProductCarouselDeelnews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)

  const increaseCards = () => {
    if (cardsToShow < sampleProducts.length) {
      setCardsToShow(cardsToShow + 1)
    }
  }

  const decreaseCards = () => {
    if (cardsToShow > 1) {
      setCardsToShow(cardsToShow - 1)
    }
  }

  const nextSlide = () => {
    if (currentIndex + cardsToShow < sampleProducts.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0) // Loop back to the beginning
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(sampleProducts.length - cardsToShow) // Loop to the end
    }
  }

  // Calculate visible products based on current index and cards to show
  const visibleProducts = sampleProducts.slice(currentIndex, currentIndex + cardsToShow)











  return (
     <div>

        <HeadingContentCarosel/>
     

    <div className="w-full max-w-7xl mx-auto px-4 relative group">


    

      {/* Decrease button on left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10  hidden group-hover:block ">
        <button onClick={prevSlide} className="h-14 w-14 rounded-full bg-[#121B51] shadow-md flex justify-center items-center" >  <ChevronLeft className="h-6 w-6 text-white" />  </button>
      </div>




      {/* Increase button on right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10  hidden group-hover:block ">
        <button onClick={nextSlide} className="h-14 w-14 rounded-full bg-[#121B51] shadow-md flex justify-center items-center" >  <ChevronRight className="h-6 w-6 text-white" />  </button>
      </div>



      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 transition-all duration-300 px-10"
        style={{
          gridTemplateColumns: `repeat(${cardsToShow}, minmax(0, 1fr))`,
        }}
      >
        {visibleProducts.map((product) => (
          <CustomCard key={product.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={product.imageUrl || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              <CustomBadge className="absolute bottom-6 right-2">{product.category}</CustomBadge>
            </div>
            <CustomCardHeader className="p-4 pb-2">
              <div className="flex items-center gap-2 text-[16px] text-muted-foreground text-[#616161]">
                <span>{product.source}</span>
                <span>|</span>
                <span>{product.date}</span>
              </div>
            </CustomCardHeader>
            <CustomCardContent className="p-4 pt-0">
              <h3 className="font-semibold text-[24px] line-clamp-2">{product.title}</h3>
            </CustomCardContent>
            
          </CustomCard>
        ))}
      </div>

    </div>
    </div>
  )
}

