"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface Category {
  id: number
  name: string
  children: string[]
}

const categories = [
    {
      id: 1,
      name: "AUTOMOTIVE",
      children: ["Automotive GPSs", "Car Audio", "Car Video", "Radar Detectors"],
    },
    {
      id: 2,
      name: "CLOTHING & ACCESSORIES",
      children: [
        "Accessories",
        "Activewear",
        "Coats",
        "Dresses",
        "Intimates",
        "Jeans",
        "Jewelry",
        "Kids' Clothes",
        "Luggage & Travel Gear",
        "Pants",
        "Shirts",
        "Shoes",
        "Shorts",
        "Skirts",
        "Sleep & Lounge",
        "Suits",
        "Sweaters",
        "Sweatshirts & Hoodies",
        "Swim",
        "T-Shirts",
        "Underwear",
      ],
    },
    {
      id: 3,
      name: "COMPUTERS",
      children: [
        "Apple Computers",
        "Barebones PCs",
        "Computer Accessories",
        "Computer Services",
        "Desktops",
        "Laptops",
        "Networking",
        "Peripherals",
        "Servers",
        "Software",
        "Storage",
        "Upgrades / Components",
        "iPad & Tablet",
      ],
    },
    {
      id: 4,
      name: "ELECTRONICS",
      children: [
        "Audio Components",
        "Batteries",
        "Camcorders",
        "Cameras",
        "Digital Picture Frames",
        "Ebook Readers",
        "FRS 2-Way Radios",
        "Gadgets",
        "MP3 Players",
        "Phones & Cell Phones",
        "Portable Speakers",
        "Power Management",
        "Smart Home",
        "Streaming Media Players",
        "TVs",
        "Universal Remote Controls",
        "Video & Audio Cables",
        "Video Components",
        "Wearable Technology",
        "iPods",
      ],
    },
    {
      id: 5,
      name: "EVERYTHING ELSE",
      children: ["Podcasts"],
    },
    {
      id: 6,
      name: "FINANCIAL SERVICES",
      children: ["Credit Cards"],
    },
    {
      id: 7,
      name: "FLAGS",
      children: ["Yahoo Dotd"],
    },
    {
      id: 8,
      name: "GAMING & TOYS",
      children: ["Card And Board Games", "Computer Games", "Toys & Hobbies", "Video Games"],
    },
    {
      id: 9,
      name: "GIFT CARDS",
      children: [],
    },
    {
      id: 10,
      name: "HEALTH & BEAUTY",
      children: ["Beauty", "Health"],
    },
    {
      id: 11,
      name: "HOME & GARDEN",
      children: [
        "Appliances",
        "Babies & Kids Items",
        "Bed & Bath",
        "Cleaning Supplies",
        "Crafts",
        "Decor",
        "Food & Drink",
        "Garden",
        "Home Furniture",
        "Home Improvement",
        "Home Security",
        "Kitchen",
        "Laundry Supplies",
        "Light Bulbs",
        "Party Supplies",
        "Pets",
        "Seasonal/Holidays",
        "Tools & Hardware",
      ],
    },
    {
      id: 12,
      name: "LOCAL",
      children: [],
    },
  ]

export default function CategoryNavigation() {
//   const [categories, setCategories] = useState<Category[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("/api/categories")
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories")
//         }
//         const data = await response.json()
//         setCategories(data)
//       } catch (err) {
//         setError("Error loading categories. Please try again later.")
//         console.error(err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchCategories()
//   }, [])

//   if (loading) {
//     return (
//       <div className="w-full p-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[...Array(6)].map((_, index) => (
//               <div key={index} className="animate-pulse">
//                 <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
//                 <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
//                 <div className="h-4 bg-gray-100 rounded w-2/3 mb-2"></div>
//                 <div className="h-4 bg-gray-100 rounded w-5/6"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="w-full p-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
//         </div>
//       </div>
//     )
//   }

  return (
    <div className="w-full p-4 md:p-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Categories
        </Link>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="mb-6">
              <h2 className="text-[18px] !font-[600] text-[#2c65af] mb-2">
                <Link href={`/category/${category.id}`} className="hover:underline">
                  {category.name}
                </Link>
              </h2>
              <div className="text-sm">
                {category.children.length > 0 ? (
                  <p className="text-[14px] !font-[600] text-[#2c65af] leading-relaxed">
                    {category.children.map((child, index) => (
                      <span key={index}>
                        <Link
                          href={`/category/${category.id}/${encodeURIComponent(child)}`}
                          className="hover:underline"
                        >
                          {child}
                        </Link>
                        {index < category.children.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-gray-400 italic">No subcategories</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
