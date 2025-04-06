import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import user from "../../image/user.webp"
import img1 from "../../image/img1.webp"

export default function UserProfile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="grid gap-8">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ">
              <Image src={user} alt="Profile" fill className="object-cover" />
            </div>
            <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
              CHANGE AVATAR
            </Link>
          </div>

          <div className="flex-1 w-full">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <span className="font-semibold text-[#303437] text-sm w-32">Username</span>
                  <Link href="#" className="text-[#2c65af] font-semibold text-md hover:underline">
                    CREATE A USERNAME!
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <span className="font-semibold text-[#303437] text-sm w-32">Address</span>
                  <span className="text-gray-600">No address on file</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                  <span className="font-semibold text-[#303437] text-sm w-32">Email Address</span>
                  <span className="text-gray-600">milonshmedshuv01@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
                  EDIT MY PROFILE
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
                  CHANGE MY PASSWORD
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
                  DELETE MY ACCOUNT
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
                <button className="px-4 py-2 bg-[#00a863] hover:bg-[#82ca9c] !text-white rounded-md font-semibold !text-sm cursor-pointer">
                  MANAGE NEWSLETTERS
                </button>
                <button className="px-4 py-2 bg-[#2c65af] hover:bg-[#72a1d5] !text-white rounded-md font-semibold !text-sm cursor-pointer">
                  MANAGE INTERESTS
                </button>
              </div>




        {/* Separator */}
        <div className="h-px bg-gray-200 w-full"></div>

        {/* Saved Items Section */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-md !font-semiblod text-[#7f8387] ">My Saved Items</h2>
            <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
              VIEW ALL SAVED ITEMS (1)
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Item Card */}
            <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm w-[250px]">
              <div className="p-0 relative">
                <div className="absolute top-2 left-2 bg-orange-500 p-1 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2c.2 0 .5.1.7.3l1.3 1.3c.4.4 1 .5 1.5.4a3.5 3.5 0 0 1 3.5 3.5c0 .5.1 1.1.4 1.5l1.3 1.3c.2.2.3.5.3.7s-.1.5-.3.7l-1.3 1.3c-.4.4-.5 1-.4 1.5a3.5 3.5 0 0 1-3.5 3.5c-.5 0-1.1.1-1.5.4l-1.3 1.3c-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-1.3-1.3c-.4-.4-1-.5-1.5-.4a3.5 3.5 0 0 1-3.5-3.5c0-.5-.1-1.1-.4-1.5l-1.3-1.3c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7l1.3-1.3c.4-.4.5-1 .4-1.5a3.5 3.5 0 0 1 3.5-3.5c.5 0 1.1-.1 1.5-.4l1.3-1.3c.2-.2.5-.3.7-.3z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div className="absolute top-2 right-2">
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                </div>
                <Image
                  src={img1}
                  alt="K20 Tools Keychain"
                  width={300}
                  height={150}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-3 bg-gray-800 text-white">
                <p className="text-md font-semibold ">K20 Tools Stainless Steel Keychain Mini Pry Bar: $9.99</p>
              </div>
            </div>

            {/* Saved Items Summary */}
            <div className="bg-[#2c65af] text-white rounded-md overflow-hidden shadow-sm w-[250px]">
              <div className="flex flex-col h-full justify-between  ">
                <div className="rounded-full p-2 mb-4 ">
                  <h3 className="text-xl font-bold mb-4 text-center">MY SAVED ITEMS</h3>  
                  <Heart className="h-8 w-8 text-red-500 mx-auto fill-red-500" />
                </div>

                <div className="bg-[rgba(8,24,47,.8)] text-[#fff] pl-2 py-2">
                <p className="text-md font-semibold">1 Item is Saved</p>
                <Link href="#" className="text-white hover:underline mt-4 flex items-center">
                  &gt; View All
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200 w-full"></div>

        {/* Alerts Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md text-[#7f8387] font-medium">
              My Alerts —{" "}
              <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
                CREATE A NEW ALERT
              </Link>
            </h2>
            <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
              EDIT MY ALERTS
            </Link>
          </div>

          <p className="text-gray-600">
            You do not currently have any email alerts.
            <Link href="#" className="text-[#2c65af] font-semibold text-sm hover:underline">
              Create one now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

