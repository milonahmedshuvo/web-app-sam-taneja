/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import {
  LayoutGrid,
  Users,
  Car,
  Home,
  FileText,
  LogOut,
  MenuIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import dealNews from "../../../image/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  key: string;
  path?: string;
  children?: { label: string; path: string, showItem: string }[];
}; 

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const [activePath, setActivePath] = useState<string>("");
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname);

    const foundItem = menuItems.find((item) =>
      item.children?.some((sub) => sub.path === pathname)
    );

    if (foundItem) {
      setOpenSubMenu(foundItem.label);
    }
  }, [pathname]);

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu((prev) => (prev === label ? null : label));
  };




  const menuItems: MenuItem[] = [
    // {
    //   icon: <LayoutGrid size={20} />,
    //   label: "Overview",
    //   key: "1",
    //   path: "/dashboard",
    // },
    {
      icon: <Users size={20} />,
      label: "Products",
      key: "2",
      children: [
        { label: "allProducts", path: "/dashboard/allProducts", showItem: "All Products" },
        { label: "addProducts", path: "/dashboard/addProducts", showItem: "Add Products" },
      ],
    },
    {
      icon: <Car size={20} />,
      label: "Categories",
      key: "3",
      children: [
        // { label: "allCategoris", path: "/dashboard/allCategoris", showItem: "All Categoris" },
        { label: "addCategoris", path: "/dashboard/addCategoris", showItem: "Add Categoris" },
      ],
    },
    {
      icon: <Home size={20} />,
      label: "Stores",
      key: "4",
      children: [
        { label: "allStores", path: "/dashboard/allStores" , showItem: "All Stores"},
        { label: "addStores", path: "/dashboard/addStores", showItem: "Add stores" },
      ],
    },
    {
      icon: <FileText size={20} />,
      label: "Blogs",
      key: "5",
      children: [
        { label: "allBlogs", path: "/dashboard/allBlogs" , showItem: "All Blogs"},
        { label: "addBlog", path: "/dashboard/addBlog", showItem: "Add Blog"},
      ],
    },
  ];



  return (
    <div>
      {/* Mobile menu toggle button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-md"
        onClick={() => setCollapsed(!collapsed)}
      >
        <MenuIcon size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-40 h-screen bg-[#1F2F45] shadow-lg transition-all duration-300 ${
          collapsed ? "-translate-x-full" : "translate-x-0"
        } md:translate-x-0 w-80 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 h-20 flex items-center border-b border-gray-500">
          <Image src={dealNews} width={100} height={100} alt="logo" />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
         
          <ul className="space-y-2 px-2">


            <Link href='/dashboard' >
            <li className="px-4 py-2.5 rounded-md text-[18px] font-[500] cursor-pointer text-[#D8E9FF] bg-[#354357] flex gap-2.5 my-3"> 
            <LayoutGrid size={20} />
              Overview
              </li>
              </Link>


            {menuItems.map((item) => (
              <li key={item.key}>
                <div
                  className={`flex items-center justify-between px-4 py-2.5 rounded-md text-[18px] font-[500] cursor-pointer ${
                    activePath === item.path || openSubMenu === item.label
                      ? "bg-[#354357] text-white"
                      : "text-[#D8E9FF] "
                  }`}
                  onClick={() => {
                    if (item.children) {
                      toggleSubMenu(item.label);
                    } else if (item.path) {
                      setActivePath(item.path);
                    }
                  }}
                >
                  <div className={`flex items-center gap-3${item.label =="Overview"? "bg-red-600": ""}`}>
                    {item.icon}
                    <Link href={`${item.path?  item.path:"#"}`}>  
                    <span>{item.label}</span>
                    </Link>
                  </div>



                  {item.children &&
                    (openSubMenu === item.label ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    ))}
                </div>

                {/* Submenu */}
                {item.children && openSubMenu === item.label && (
                  <ul className="ml-10">
                    {item.children.map((subItem, idx) => (
                      <li key={idx} className="mt-2">
                        <Link
                          href={subItem.path}
                          className={`block px-2 py-2 text-[16px] rounded-md ${
                            activePath === subItem.path
                              ? "bg-[#354357] text-white"
                              : "text-[#D8E9FF] hover:text-blue-500"
                          }`}
                          onClick={() => setActivePath(subItem.path)}
                        >
                          {subItem.showItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4">
          <button className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-sm font-medium text-gray-700 bg-gray-100 rounded-md transition-colors">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
