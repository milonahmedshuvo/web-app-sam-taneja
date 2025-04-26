import {
    Eye,
    MousePointerClick,
    Package,
    ShoppingBag,
    Store,
    FileText,
  } from "lucide-react";
  import Link from "next/link";
  import React from "react";
  
  // Props types
  interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
  }
  
  interface QuickLinkCardProps {
    title: string;
    link: string;
    icon: React.ReactNode;
  }
  
  export default function Overview() {


    return (
      <div className="p-4 md:p-6 ">
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Visitor's"
              value="12,580"
              icon={<Eye className="w-5 h-5 text-white" />}
            />
            <StatCard
              title="Today's Visitor"
              value="52"
              icon={<Eye className="w-5 h-5 text-white" />}
            />
            <StatCard
              title="Total Click"
              value="4,526"
              icon={<MousePointerClick className="w-5 h-5 text-white" />}
            />
            <StatCard
              title="Today's Click"
              value="8"
              icon={<MousePointerClick className="w-5 h-5 text-white" />}
            />
          </div>
        </section>
  
        <section>
          <h2 className="text-xl font-medium mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickLinkCard
              title="All Product's"
              link="/products"
              icon={<Package className="w-5 h-5" />}
            />
            <QuickLinkCard
              title="All Categories"
              link="/categories"
              icon={<ShoppingBag className="w-5 h-5" />}
            />
            <QuickLinkCard
              title="All Store's"
              link="/stores"
              icon={<Store className="w-5 h-5" />}
            />
            <QuickLinkCard
              title="Blog's"
              link="/blogs"
              icon={<FileText className="w-5 h-5" />}
            />
          </div>
        </section>
      </div>
    );
  }
  
  // StatCard component with TypeScript
  function StatCard({ title, value, icon }: StatCardProps) {
    return (
      <div className="bg-white p-4 rounded-md shadow-sm flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-gray-700 p-2 rounded-md">{icon}</div>
      </div>
    );
  }
  
  // QuickLinkCard component with TypeScript
  function QuickLinkCard({ title, link, icon }: QuickLinkCardProps) {
    return (
      <Link
        href={link}
        className="bg-white p-4 rounded-md shadow-sm block hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {icon}
            <span className="ml-2 font-medium">{title}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>{`Go to ${title}`}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </Link>
    );
  }
  