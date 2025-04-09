"use client"
import { useGetAllCategoriesQuery } from "@/redux/api/samtanejaApi"
import Link from "next/link"

export type Category = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
  children: Category[]; // Recursive type for nested categories
};


export default function CategoryNavigation() {
   const {data:allCategoris, isLoading:categorisLoading,  } = useGetAllCategoriesQuery("")


   if (categorisLoading) {

    return (
      <div className="text-center py-10 text-lg font-medium">Loading...</div>
    );
  }
 




  return (
    <div className="w-full p-4 md:p-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Categories
        </Link>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {allCategoris?.data?.map((category:Category) => (
            <div key={category.id} className="mb-6">
              <h2 className="text-[18px] !font-[600] text-[#2c65af] mb-2">
                <Link href={`/category/${category.id}`} className="hover:underline">
                  {category.name}
                </Link>
              </h2>

              <div className="text-sm">
                {category.children?.length > 0 ?  (
                  <p className="text-[14px] !font-[600] text-[#2c65af] leading-relaxed">
                    {category?.children?.map((child, index) => (
                      <span key={index}>
                        <Link
                          href={`/category/${category.id}/${encodeURIComponent(child.name)}`}
                          className="hover:underline"
                        >
                          {child.name}

                        </Link>
                        {index < category?.children?.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-gray-400 italic">No subcategories</p>
                )}
              </div>
              <div>
              </div>



            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
