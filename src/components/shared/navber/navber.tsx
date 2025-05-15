/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Link from "next/link";
import {  FaBars, FaHome } from "react-icons/fa";
import {
  MdArrowForwardIos,
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import {
  useGetAllCategoriesQuery,
  useGetAllStorisQuery,
} from "@/redux/api/samtanejaApi";
import logo from "../../../image/logo.png";
import Image from "next/image";
import { GetUserInfo } from "@/redux/utils/GetUserInfo";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/redux/slice/user/userSlice";
import { CircleAlert } from "lucide-react";
import Loading from "@/utils/Loading";

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
  path: string;
  subCategories: SubCategory[];
}

type Categorys = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
  children: ChildrenCategory[]; // Recursive type for nested categories
};

type ChildrenCategory = {
  createdAt: string;
  id: string;
  name: string;
  parentId: string;
  slug: string;
  updatedAt: string;
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
    path: "/blog",
    subCategories: [
      { name: "All Blog", path: "/blog", childCategories: [] },
      // { name: "Roundups",path: '/blog', childCategories: [] },
      // { name: "All Blog Articles",path: '/blog', childCategories: [] },
      // { name: "eBay",path: '/blog', childCategories: [] },
      // { name: "Kohl's",path: '/blog', childCategories: [] },
    ],
  },
];

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [circleModalOpen, setCircleModalOpen] = useState(false);
  const { data: allStoris, isLoading: storesLoading } =
    useGetAllStorisQuery("");
  const { data: allCategoris, isLoading: categorisLoading } =
    useGetAllCategoriesQuery("");
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  console.log("redux store success", user?.email);

  if (categorisLoading || storesLoading) {
    return <Loading />;
  }

  const userInfo = GetUserInfo();
  console.log("user info in get function", userInfo);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    setIsModalOpen(false);
  };

  return (
    <div className=" mb-2 md:mb-4 relative absolute z-30 ">
      {/* Navbar */}
      <nav className="bg-[#2c65af] text-white px-4 py-6  flex justify-between items-center ">
        {/* Left - Logo & Menu Button (Mobile) */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            <FaBars />
          </button>
          <div className="mt-[-16px]">
            <Link href="/">
              <Image src={logo} width={100} height={500} alt="logo" />
            </Link>
          </div>

          {/* Center - Categories (Hidden in Mobile) */}
          <div className="hidden md:flex relative gap-10 ">


            {/* show one categoris manu  */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveCategory("category")}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Link
                className="text-[#FFFFFF] text-[15px] !font-[400] "
                href="/"
              >
                Categories
              </Link>

              {activeCategory === "category" && (
                <div className="absolute left-0 bg-white w-[260px] text-[#2c65af] border border-gray-300 shadow-lg !pt-4 ">
                  {allCategoris?.data?.map(
                    (sub: Categorys, subIndex: number) => (
                      <div
                        key={subIndex}
                        className="hover:bg-gray-200"
                        onMouseEnter={() => setActiveSubCategory(sub.name)}
                        onMouseLeave={() => setActiveSubCategory(null)}
                      >
                        {/* if i want eash category navigate ===== href={`/products/${sub.id}`} */}

                        <Link
                          href="#"
                          className="flex justify-between items-center px-4"
                        >
                          <button className="py-2 w-full text-left flex justify-between">
                            <span>{sub.name}</span>

                            {sub.children.length > 0 && (
                              <span className="ml-2 text-lg">
                                {activeSubCategory === sub.name ? (
                                  <MdKeyboardArrowDown className="ml-2 text-2xl" />
                                ) : (
                                  <MdArrowForwardIos className="ml-2 text-md" />
                                )}
                              </span>
                            )}
                          </button>
                        </Link>

                        {activeSubCategory === sub.name && (
                          <div className="absolute left-full top-0 mt-0 bg-white w-[260px] h-full shadow-md !pt-4">
                            {sub.children.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                href={`/products/${child.id}`}
                                className="block px-4 py-2 hover:bg-gray-200"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}

                  <Link href="/allCategoris">
                    <p className="pl-5 py-2  hover:bg-gray-200 cursor-pointer">
                      All categoris
                    </p>
                  </Link>
                </div>
              )}
            </div>

         

            {/* show one stores  */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveCategory("stores")}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Link
                className="text-[#FFFFFF] text-[15px] !font-[400]"
                href="/"
              >
                Stores
              </Link>

              {activeCategory === "stores" && (
                <div className="absolute left-0 bg-white w-[260px] text-[#2c65af] border border-gray-300 shadow-lg">
                  {allStoris?.data?.map(
                    (sub: { name: string; id: string }, subIndex: number) => (
                      <div
                        key={subIndex}
                        className=""
                        onMouseEnter={() => setActiveSubCategory(sub.name)}
                        onMouseLeave={() => setActiveSubCategory(null)}
                      >
                        <Link
                          href={`/store/${sub.id}`}
                          className="flex justify-between items-center cursor-pointer "
                        >
                          <button className="block px-4 py-2 w-full text-left hover:bg-gray-200 cursor-pointer">
                            {sub.name}
                          </button>
                        </Link>
                      </div>
                    )
                  )}
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
                <Link
                  className="text-[#FFFFFF] text-[15px] !font-[400]"
                  href={category.path}
                >
                  {category.name}
                </Link>
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
                        <Link
                          href={`${sub.path}`}
                          className="flex justify-between items-center"
                        >
                          <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                            {sub.name}
                          </button>
                          {sub.childCategories.length > 0 &&
                            (activeSubCategory === sub.name ? (
                              <MdOutlineKeyboardArrowDown className="text-2xl ml-6" />
                            ) : (
                              <MdArrowForwardIos />
                            ))}
                        </Link>

                        {/* Submenu */}
                        {activeSubCategory === sub.name && (
                          <div className="absolute left-full top-0 mt-0 bg-white w-40 shadow-md">
                            {sub.childCategories.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                href={`/products/${child.name}`}
                                className="block px-4 py-2 hover:bg-gray-200 "
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
        <div className="flex gap-6 text-md relative items-center">
          <CircleAlert
            onClick={() => setCircleModalOpen(!circleModalOpen)}
            className="cursor-pointer hover:text-gray-300"
          />
          {/* <FaSearch className="cursor-pointer hover:text-gray-300" /> */}

          {user?.email ? (
            <button
              className="cursor-pointer hover:text-gray-300 !text-[17px] "
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              {" "}
              {`${user?.email.slice(0, 7)}...`}{" "}
            </button>
          ) : (
            <button>
              {" "}
              <Link href="/login"> Singin </Link>{" "}
            </button>
          )}

          {/* MODAL OPEN NAVIGATE HOME OHTERS page   */}
          {circleModalOpen && (
            <div className="absolute right-0 top-[30px] bg-white  w-[200px] shadow ">
              <div>
                <Link
                  href="/deelnews"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    About Us
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  href="/deelnews"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    Contact Us
                  </span>
                </Link>
              </div>

              {/* /deelnews/faq */}
              <div>
                <Link
                  href="/deelnews/pressroom"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    Press Room
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  href="/deelnews/faq"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    FAQ
                  </span>
                </Link>
              </div>
            </div>
          )}

          {/* modal open NAVIGATE OTHERS PRIFLE   */}
          {isModalOpen && (
            <div className="absolute right-0 top-[30px] bg-white  w-[200px] shadow ">
              <div>
                <Link
                  href="/dashboard"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaHome className="cursor-pointer text-[16px] text-[#2c65af]" />
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    Dashborad
                  </span>
                </Link>
              </div>

              {/* <div>
                <Link
                  href="/viewProfile"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaUser className="cursor-pointer text-[16px] text-[#2c65af]" />
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    View Profile
                  </span>
                </Link>
              </div> */}

              {/* <div>
                <Link
                  href="/saveDeals"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <IoSettingsOutline className="cursor-pointer text-[16px] text-[#2c65af]" />
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    Save Deals
                  </span>
                </Link>
              </div> */}

              {/* <div>
                <Link
                  href="#"
                  className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  <IoSettingsOutline className="cursor-pointer text-[16px] text-[#2c65af]" />
                  <span className="text-[#2c65af] font-normal text-[15px] ">
                    Interests
                  </span>
                </Link>
              </div> */}

              <div>
                {user?.email ? (
                  <div
                    className="flex gap-3 items-center hover:bg-[#eff0f3] px-5 py-2"
                    onClick={handleLogout}
                  >
                    <FaAngleLeft className="cursor-pointer text-[16px] text-[#2c65af]" />
                    <span className="text-[#2c65af] font-normal text-[15px] ">
                      Logout
                    </span>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="flex gap-1 items-center hover:bg-[#eff0f3] px-5 py-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <FaAngleLeft className="cursor-pointer text-[16px] text-[#2c65af]" />
                    <span className="text-[#2c65af] font-normal text-[15px] ">
                      Signin
                    </span>
                  </Link>
                )}
              </div>

              {/* <div>
                   <button onClick={handleLogout} className="w-full text-left px-4 py-2 !text-[#2c65af]" > Logout </button>
                   </div> */}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-white text-[#2c65af] p-4 shadow-md">
          {categories.map((category, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left font-semibold flex justify-between py-2 px-4 hover:bg-gray-100"
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.name ? null : category.name
                  )
                }
              >
                {category.name}
                {activeCategory === category.name ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdArrowForwardIos />
                )}
              </button>

              {/* Subcategories */}
              {activeCategory === category.name && (
                <div className="pl-6">
                  {category.subCategories.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-2">
                      <button
                        className="w-full text-left flex justify-between py-2 px-4 hover:bg-gray-100"
                        onClick={() =>
                          setActiveSubCategory(
                            activeSubCategory === sub.name ? null : sub.name
                          )
                        }
                      >
                        {sub.name}
                        {sub.childCategories.length > 0 &&
                          (activeSubCategory === sub.name ? (
                            <MdOutlineKeyboardArrowDown />
                          ) : (
                            <MdArrowForwardIos />
                          ))}
                      </button>

                      {/* Child Categories */}
                      {activeSubCategory === sub.name && (
                        <div className="pl-6">
                          {sub.childCategories.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href="#"
                              className="block py-2 px-4 hover:bg-gray-100"
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
      )}

      {/* Footer Message */}
      <div className="flex justify-center items-center pt-3 pb-1 bg-[#214B82] text-white">
        <p className="text-sm">
          <span>DealNews is reader-supported.</span> We may earn commissions on
          qualifying purchases.
        </p>
      </div>
    </div>
  );
}
