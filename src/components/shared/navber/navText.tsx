"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { MdArrowForwardIos, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
interface ChildCategory {
  name: string;
}

interface SubCategory {
  name: string;
  childCategories: ChildCategory[];
}

interface Category {
  name: string;
  path: string,
  subCategories: SubCategory[];
}





const categories: Category[] = [
  {
    name: "Categories",
    path: '/',
    subCategories: [
      { name: "Clothing", childCategories: [{ name: "Activewear" }, { name: "Jackets" }, { name: "Jeans" }] },
      { name: "Laptops", childCategories: [{ name: "Dell" }, { name: "HP" }, { name: "MacBook" }] },
      { name: "Electronics", childCategories: [{name: '49" or smaller'}, {name: '9" or smaller'}, {name: '65" or smaller'}] },
      { name: "Airfare", childCategories: [] },
      { name: "Automotive", childCategories: [] },
      { name: "Clothing & Accessories", childCategories: [] },
      { name: "Credit Cards", childCategories: [] },
    ],
  },
  {
    name: "Storis",
    path: '/',
    subCategories: [
      { name: "Amazon", childCategories: [{ name: "Laptops" }, { name: "Shoes" }, { name: "i5 Laptops" }, {name : 'i7 Windows Laptops'} ] },
      { name: "Dell", childCategories: [{ name: "Dresses" }, { name: "Jewelry" }, { name: "Bags" }] },
      { name: "Disney Plus", childCategories: [{ name: "Dresses" }, { name: "Jewelry" }, { name: "Bags" }] },
      { name: "eBay", childCategories: [{ name: "Dresses" }, { name: "Jewelry" }, { name: "Bags" }] },
      { name: "Kohl's", childCategories: [] },
    ],
  },

  {
    name: "From The Blog",
    path: '/blog',
    subCategories: [
      { name: "Buying Guides", childCategories: [ ] },
      { name: "Roundups", childCategories: [] },
      { name: "All Blog Articles", childCategories: [] },
      { name: "eBay", childCategories: [] },
      { name: "Kohl's", childCategories: [] },
    ],
  },

  {
    name: "Daily Deals",
    path: '/',
    subCategories: [
      { name: "Apple Gift Cards", childCategories: [ ] },
      { name: "Disney Plus Gift Cards", childCategories: [] },
      { name: "All Gift Cards", childCategories: [] },
      { name: "eBay", childCategories: [] },
      { name: "Kohl's", childCategories: [] },
    ],
  },

  {
    name: "Streaming Deals",
    path: '/',
    subCategories: [
      { name: "Disney Plus", childCategories: [ ] },
      { name: "Peacock TV", childCategories: [] },
      { name: "Paramount Plus", childCategories: [] },
      { name: "YouTube TV", childCategories: [] },
      { name: "Kohl's", childCategories: [] },
    ],
  },
];









export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 


 


  return (
    <div className=" mb-2 md:mb-4 relative absolute z-30 ">
      {/* Navbar */}
      <nav className="bg-[#2c65af] text-white p-4 flex justify-between items-center ">
        {/* Left - Logo & Menu Button (Mobile) */}
        <div className="flex items-center gap-6">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
            <FaBars />
          </button>
          <div className="text-2xl font-bold">
            <Link href='/'> Logo</Link>
          </div>

          {/* Center - Categories (Hidden in Mobile) */}
          <div className="hidden md:flex relative gap-6 ">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* <button className="hover:text-gray-300">{category.name}</button> */}
                <Link className="hover:text-gray-300" href={category.path} >{category.name} </Link>   



                {activeCategory === category.name && (
                  <div className="absolute left-0 bg-white w-52 text-[#2c65af] border border-gray-300 shadow-lg">
                    {category.subCategories.map((sub, subIndex) => (
                      <div
                        key={subIndex}
                        className=""
                        onMouseEnter={() => setActiveSubCategory(sub.name)}
                        onMouseLeave={() => setActiveSubCategory(null)}
                      >
                        <Link href={`/products/${sub.name}`} className="flex justify-between items-center px-2">
                          <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">{sub.name}</button>
                          {sub.childCategories.length > 0 && (
                            activeSubCategory === sub.name ? <MdOutlineKeyboardArrowDown className="text-2xl ml-6" /> : <MdArrowForwardIos />
                          )}
                        </Link>

                        {/* Submenu */}
                        {activeSubCategory === sub.name && (
                          <div className="absolute left-full top-0 mt-0 bg-white w-40 shadow-md">
                            {sub.childCategories.map((child, childIndex) => (
                              <Link key={childIndex} href={`/products/${child.name}`} className="block px-4 py-2 hover:bg-gray-200">
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
        <div className="flex gap-4 text-xl relative">
          <FaSearch className="cursor-pointer hover:text-gray-300" />
          <FaShoppingCart className="cursor-pointer hover:text-gray-300" />
          <FaUser className="cursor-pointer hover:text-gray-300" onClick={() => setIsModalOpen(!isModalOpen)} />


            {
               isModalOpen && <div className="absolute right-0 top-[30px] bg-white p-5 w-[200px] shadow space-y-3.5">
                    
                     
                    <div className="flex gap-3"  onClick={()=> setIsModalOpen(false)} >
                    <FaUser className="cursor-pointer  text-[#2c65af]" />
                    <Link href='/viewProfile' ><span className="text-[#2c65af] font-normal text-[15px] ">View Profile</span></Link>
                    </div>
               
                    <div className="flex gap-3" onClick={()=> setIsModalOpen(false)} >
                    <FaRegHeart className="cursor-pointer  text-[#2c65af]" />
                    <Link href='/saveDeals' > 
                    <span className="text-[#2c65af] font-normal text-[15px] ">Save Deals</span>
                    </Link>
                    </div>

                    <div className="flex gap-3">
                    <IoSettingsOutline className="cursor-pointer  text-[#2c65af]" />
                    <span className="text-[#2c65af] font-normal text-[15px] ">Interests</span>
                    </div>
                        
                    <div className="flex gap-3" onClick={()=> setIsModalOpen(false)}>
                    <FaAngleLeft className="cursor-pointer  text-[#2c65af]" />
                    <span className="text-[#2c65af] font-normal text-[15px] ">Sign Out</span>
                    </div>
               </div>
            }
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-white text-[#2c65af] p-4 shadow-md">
          {categories.map((category, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left font-semibold flex justify-between py-2 px-4 hover:bg-gray-100"
                onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
              >
                {category.name}
                {activeCategory === category.name ? <MdOutlineKeyboardArrowDown /> : <MdArrowForwardIos />}
              </button>

              {/* Subcategories */}
              {activeCategory === category.name && (
                <div className="pl-6">
                  {category.subCategories.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-2">
                      <button
                        className="w-full text-left flex justify-between py-2 px-4 hover:bg-gray-100"
                        onClick={() => setActiveSubCategory(activeSubCategory === sub.name ? null : sub.name)}
                      >
                        {sub.name}
                        {sub.childCategories.length > 0 && (activeSubCategory === sub.name ? <MdOutlineKeyboardArrowDown /> : <MdArrowForwardIos />)}
                      </button>

                      {/* Child Categories */}
                      {activeSubCategory === sub.name && (
                        <div className="pl-6">
                          {sub.childCategories.map((child, childIndex) => (
                            <Link key={childIndex} href="#" className="block py-2 px-4 hover:bg-gray-100">
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
      )}

      {/* Footer Message */}
      <div className="flex justify-center items-center pt-3 pb-1 bg-[#214B82] text-white">
        <p className="text-sm">
          <span>DealNews is reader-supported.</span> We may earn commissions on qualifying purchases.
        </p>
      </div>
    </div>
  );
}
