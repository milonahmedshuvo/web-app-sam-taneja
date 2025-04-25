import Link from "next/link"


import { PencilIcon, Plus, TrashIcon } from "lucide-react"
import Image from "next/image"



export default function BlogsPage() {
  return (
    <div className="p-4 sm:p-6">
      
      <h1>All blogs</h1>



      <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 px-10 pt-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="text-sm text-muted-foreground mr-2">Showing</span>
          <select className="border border-gray-200 rounded-md px-3 py-1.5 w-20 focus:outline-none">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>

        {/* add button  */}
          <div className="border-[#2C65AF] border text-[#2C65AF] text-[ 15px] py-1.5 px-2 rounded cursor-pointer" >
            <Link href="/dashboard/addBlog" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />  
              <button className="cursor-pointer">
                Add New Blog
              </button>
            </Link>
          </div>
      </div>












        <div className="grid grid-cols-12 bg-gray-50 font-medium text-gray-500 px-10 py-4">
          <div className="col-span-6 sm:col-span-7">Product</div>
          <div className="col-span-4 sm:col-span-4 text-right sm:text-left">Publishing Date</div>
          <div className="col-span-2 sm:col-span-1 text-right">Actions</div>
        </div>

        {blogPosts.map((post) => (
          <div key={post.id} className="grid grid-cols-12 border-t border-gray-200  items-center px-8 py-4">
            <div className="col-span-6 sm:col-span-7 flex items-center">
              <div className="w-16 h-16 relative mr-3 flex-shrink-0">
                <Image
                  src={post.thumbnail || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="font-medium text-sm sm:text-base line-clamp-2 text-[#555F7E]">{post.title}</h3>
            </div>
            <div className="col-span-4 sm:col-span-4 text-right sm:text-left text-gray-500 text-sm">
              {post.publishDate}
            </div>

            <div className="col-span-2 sm:col-span-1 flex justify-end space-x-2 text-[#555F7E] gap-3.5">
              <button className="text-gray-400 hover:text-gray-600">
                <PencilIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "Hulu's 2025 Bundles: Pricing & Deals Up To 40% Off in March",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 2,
    title: "Hulu Cyber Monday & Black Friday Deals: Up To 70% Off",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 3,
    title: "How Much Is an HBO Max Subscription in 2025?",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 4,
    title: "Disney Plus Black Friday Deals: Saving the Most In 2024",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 5,
    title: "Disney Plus Black Friday Deals: Saving the Most In 2024",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 6,
    title: "Disney Plus Black Friday Deals: Saving the Most In 2024",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 7,
    title: "Disney Plus Black Friday Deals: Saving the Most In 202",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 8,
    title: "Disney Plus Black Friday Deals: Saving the Most In 2024",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 9,
    title: "Disney Plus Black Friday Deals: Saving the Most In 2024",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
  {
    id: 10,
    title: "Wrangler San Antonio 3-Piece Expandable ...",
    thumbnail: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
    publishDate: "3/24/2025",
  },
]
