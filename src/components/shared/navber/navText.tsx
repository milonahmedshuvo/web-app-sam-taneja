"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdArrowForwardIos, MdOutlineKeyboardArrowDown } from "react-icons/md";

interface ChildCategory {
  name: string;
}

interface SubCategory {
  name: string;
  childCategories: ChildCategory[];
}

interface Category {
  name: string;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  {
    name: "Electronics",
    subCategories: [
      {
        name: "Mobiles",
        childCategories: [
          { name: "Samsung" },
          { name: "Apple" },
          { name: "OnePlus" },
        ],
      },

      {
        name: "Laptops",
        childCategories: [
          { name: "Dell" },
          { name: "HP" },
          { name: "MacBook" },
        ],
      },
      {
        name: "computers",
        childCategories: [],
      },
      {
        name: "clothing",
        childCategories: [],
      },

      {
        name: "computers",
        childCategories: [],
      },
      {
        name: "clothing",
        childCategories: [],
      },

      {
        name: "computers",
        childCategories: [],
      },
      {
        name: "clothing",
        childCategories: [],
      },
    ],
  },


  {
    name: "Fashion",
    subCategories: [
      {
        name: "Men",
        childCategories: [
          { name: "Shirts" },
          { name: "Shoes" },
          { name: "Watches" },
        ],
      },
      {
        name: "Women",
        childCategories: [
          { name: "Dresses" },
          { name: "Jewelry" },
          { name: "Bags" },
        ],
      },
    ],
  },

  {
    name: "Fashione",
    subCategories: [
      {
        name: "Mene",
        childCategories: [
          { name: "Shirtse" },
          { name: "Shoese" },
          { name: "Watchese" },
        ],
      },
      {
        name: "Womene",
        childCategories: [
          { name: "Dressese" },
          { name: "Jewelrye" },
          { name: "Bagse" },
        ],
      },
    ],
  },

  {
    name: "From The Blog",
    subCategories: [
      {
        name: "Buying Guides",
        childCategories: [
          { name: "Shirtse" },
          { name: "Shoese" },
          { name: "Watchese" },
        ],
      },
      {
        name: "Roundups",
        childCategories: [
          { name: "Dressese" },
          { name: "Jewelrye" },
          { name: "Bagse" },
        ],
      },

      {
        name : 'All Blog Articles',
        childCategories : []
      }
    ],
  },



  {
    name: "Streaming Deals",
    subCategories: [
      {
        name: "Buying Guides",
        childCategories: [
          { name: "Shirtse" },
          { name: "Shoese" },
          { name: "Watchese" },
        ],
      },
      {
        name: "Roundups",
        childCategories: [
          { name: "Dressese" },
          { name: "Jewelrye" },
          { name: "Bagse" },
        ],
      },

      {
        name : 'All Blog Articles',
        childCategories : []
      }
    ],
  },


];

export default function NavText() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  return (
    <div className="mb-5">


        <nav className="bg-[#2c65af] text-white p-4 flex justify-between items-center ">
      {/* Left - Logo */}
      <div className="flex items-center gap-10">
        <div className="text-2xl font-bold">Logo</div>

        {/* Center - Categories */}
        <div className="relative flex gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <button className="hover:text-gray-300   ">
                {category.name}  
              </button>


              {activeCategory === category.name && (
                <div className="absolute left-0 bg-white w-52 text-[#2c65af]  border border-red-500 ">
                  {category.subCategories.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className=""
                      onMouseEnter={() => setActiveSubCategory(sub.name)}
                      onMouseLeave={() => setActiveSubCategory(null)}
                    >
                      
                         <Link href='/products' className="flex justify-between items-center px-2 "> 
                         <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                           {sub.name}
                         </button>  
                         
                             <div>
                             {
                              sub.childCategories.length > 0 && activeSubCategory === sub.name ? <MdOutlineKeyboardArrowDown className="text-2xl ml-6" /> : sub.childCategories.length > 0 && <MdArrowForwardIos/>
                             }
                             </div>
                         </Link>
                      


                      {activeSubCategory === sub.name && (
                        <div className="absolute left-full top-0 mt-0 bg-white  w-40">
                          {sub.childCategories.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right - Icons */}
      <div className="flex gap-4 text-xl">
        <FaSearch className="cursor-pointer hover:text-gray-300" />
        <FaShoppingCart className="cursor-pointer hover:text-gray-300" />
        <FaUser className="cursor-pointer hover:text-gray-300" />
      </div>
    </nav>


       <div className="flex justify-center items-center pt-3 pb-1 bg-[#214B82] text-white">
           <p className="text-sm"> <span>DealNews is reader-supported.</span>We may earn commissions on qualifying purchases. </p>
       </div>
    </div>
  );
}
