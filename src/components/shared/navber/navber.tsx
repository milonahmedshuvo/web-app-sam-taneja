/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { MdArrowForwardIos, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { useGetAllCategoriesQuery, useGetAllStorisQuery } from "@/redux/api/samtanejaApi";

interface ChildCategory {
  name: string;
  path: string;
}

interface SubCategory {
  name: string;
  path: string;
  childCategories: ChildCategory[];
}

interface Category {
  name: string;
  path: string,
  subCategories: SubCategory[];
}
type Categorys = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
  children: Category[]; // Recursive type for nested categories
};





const categories: Category[] = [
  // {
  //   name: "Categories",
  //   path: '/',
  //   subCategories: [
  //     { name: "Clothing",path: '/', childCategories: [{ name: "Activewear", path: '/', }, { name: "Jackets", path: '/', }, { name: "Jeans", path: '/', }] },
  //     { name: "Laptops",path: '/', childCategories: [{ name: "Dell", path: '/', }, { name: "HP", path: '/', }, { name: "MacBook", path: '/', }] },
  //     { name: "Electronics",path: '/', childCategories: [{name: '49" or smaller', path: '/',}, {name: '9" or smaller', path: '/',}, {name: '65" or smaller', path: '/',}] },
  //     { name: "Airfare",path: '/', childCategories: [] },
  //     { name: "Automotive",path: '/', childCategories: [] },
  //     { name: "Clothing & Accessories",path: '/', childCategories: [] },
  //     { name: "Credit Cards",path: '/', childCategories: [] },
  //   ],
  // },


  // {
  //   name: "Storis",
  //   path: '/',
  //   subCategories: [
  //     { name: "Amazon",path: '/', childCategories: [{ name: "Laptops", path: '/', }, { name: "Shoes", path: '/', }, { name: "i5 Laptops", path: '/', }, {name : 'i7 Windows Laptops', path: '/',} ] },
  //     { name: "Dell",path: '/', childCategories: [{ name: "Dresses", path: '/', }, { name: "Jewelry", path: '/', }, { name: "Bags", path: '/', }] },
  //     { name: "Disney Plus",path: '/', childCategories: [{ name: "Dresses", path: '/', }, { name: "Jewelry", path: '/', }, { name: "Bags", path: '/', }] },
  //     { name: "eBay",path: '/', childCategories: [{ name: "Dresses", path: '/', }, { name: "Jewelry", path: '/', }, { name: "Bags", path: '/', }] },
  //     { name: "Kohl's",path: '/', childCategories: [] },
  //   ],
  // },




  {
    name: "From The Blog",
    path: '/blog',
    subCategories: [
      { name: "Buying Guides", path: '/blog', childCategories: [ ] },
      { name: "Roundups",path: '/blog', childCategories: [] },
      { name: "All Blog Articles",path: '/blog', childCategories: [] },
      { name: "eBay",path: '/blog', childCategories: [] },
      { name: "Kohl's",path: '/blog', childCategories: [] },
    ],
  },

  {
    name: "Daily Deals",
    path: '/',
    subCategories: [
      { name: "Apple Gift Cards",path: '/', childCategories: [ ] },
      { name: "Disney Plus Gift Cards",path: '/', childCategories: [] },
      { name: "All Gift Cards",path: '/', childCategories: [] },
      { name: "eBay",path: '/', childCategories: [] },
      { name: "Kohl's",path: '/', childCategories: [] },
    ],
  },

  {
    name: "Streaming Deals",
    path: '/',
    subCategories: [
      { name: "Disney Plus",path: '/', childCategories: [ ] },
      { name: "Peacock TV",path: '/', childCategories: [] },
      { name: "Paramount Plus",path: '/', childCategories: [] },
      { name: "YouTube TV",path: '/', childCategories: [] },
      { name: "Kohl's",path: '/', childCategories: [] },
    ],
  },
];











export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const {data:allStoris, isLoading:storesLoading,  } = useGetAllStorisQuery("")
  const {data:allCategoris, isLoading:categorisLoading,  } = useGetAllCategoriesQuery("")
  

       if (categorisLoading || storesLoading ) {
            return (
              <div className="text-center py-10 text-lg font-medium">Loading...</div>
            );
          }



     console.log("all categoris", allCategoris)



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
          <div className="hidden md:flex relative gap-7 ">






         
              {/* show one categoris manu  */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveCategory('category')}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link className="hover:text-gray-300" href='/' >Categories</Link>   
                {activeCategory === 'category' && (
                  <div className="absolute left-0 bg-white w-[260px] text-[#2c65af] border border-gray-300 shadow-lg !pt-4">
                    {allCategoris?.data?.map((sub:Categorys, subIndex:number) => (
                      <div
                        key={subIndex}
                        className=""
                        onMouseEnter={() => setActiveSubCategory(sub.name)}
                        onMouseLeave={() => setActiveSubCategory(null)}    
                      >
                        <Link href={`${sub.name}`} className="flex justify-between items-center px-2">
                          <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">{sub.name}</button>
                         
                          {sub.children.length > 0 && (
                            activeSubCategory === sub.name ? <MdOutlineKeyboardArrowDown className="text-2xl ml-2" /> : <MdArrowForwardIos />
                          )}
                        </Link> 

                        
                        {activeSubCategory === sub.name && (
                          <div className="absolute left-full top-0 mt-0 bg-white w-[260px] shadow-md !pt-4">
                            {sub.children.map((child, childIndex) => (
                              <Link key={childIndex} href={`/products/${child.name}`} className="block px-4 py-2 hover:bg-gray-200">
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                     <Link href='/allCategoris' > 
                     <p  className="pl-5 py-2  hover:bg-gray-200 cursor-pointer" >All categoris</p>
                     </Link>

                     
                  </div>
                )}

              </div>
       




               {/* show one stores  */}
               <div 
                className="relative group"
                onMouseEnter={() => setActiveCategory('stores')}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link className="hover:text-gray-300" href='/' >Stores</Link>   
                {activeCategory === 'stores' && (
                  <div className="absolute left-0 bg-white w-[260px] text-[#2c65af] border border-gray-300 shadow-lg">
                    {allStoris?.data?.map((sub:{name:string, id:string}, subIndex:number) => (
                      <div
                        key={subIndex}
                        className=""
                        onMouseEnter={() => setActiveSubCategory(sub.name)}
                        onMouseLeave={() => setActiveSubCategory(null)}    
                      >
                        <Link href={`${sub.name}`} className="flex justify-between items-center px-2">
                          <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">{sub.name}</button> 
                        </Link> 
                      </div>
                    ))}
                  </div>
                  
                )}
              </div>









            
            
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
                        {/* href={`/products/${sub.name}`} */}
                        <Link href={`${sub.path}`} className="flex justify-between items-center px-2">
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
