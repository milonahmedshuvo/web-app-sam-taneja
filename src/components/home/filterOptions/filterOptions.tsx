"use client";

import { useState } from "react";
import { AiOutlineDown, AiOutlineUp, AiOutlineFilter } from "react-icons/ai";

const filters = [
  { name: "Staff Pick", subcategories: ["Top Picks", "Exclusive Deals"] },
  {
    name: "Category",
    subcategories: [
      "Electronics",
      "Clothing",
      "Home Appliances",
      "Beauty",
      "Books",
    ],
  },
  {
    name: "Store",
    subcategories: ["Amazon", "eBay", "Walmart", "Target", "Best Buy"],
  },
  {
    name: "Brand",
    subcategories: ["Apple", "Samsung", "Nike", "Adidas", "Sony"],
  },
  {
    name: "Offer Type",
    subcategories: ["Discount", "BOGO", "Flash Sale", "Limited Time"],
  },
  {
    name: "Store",
    subcategories: ["Amazon", "eBay", "Walmart", "Target", "Best Buy"],
  },
  {
    name: "Brand",
    subcategories: ["Apple", "Samsung", "Nike", "Adidas", "Sony"],
  },
  {
    name: "Offer Type",
    subcategories: ["Discount", "BOGO", "Flash Sale", "Limited Time"],
  },

  {
    name: "Store",
    subcategories: ["Amazon", "eBay", "Walmart", "Target", "Best Buy"],
  },
  {
    name: "Brand",
    subcategories: ["Apple", "Samsung", "Nike", "Adidas", "Sony"],
  },
  {
    name: "Offer Type",
    subcategories: ["Discount", "BOGO", "Flash Sale", "Limited Time"],
  },
  

];




const ToggleComponent = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  const selectSubcategory = (categoryName: string, subcategory: string) => {
    setSelectedCategory(categoryName); // Set the selected category
    setSelectedSubcategory(subcategory); // Set the selected subcategory
    setOpenCategory(null); // Close the category after selection
  };

  console.log(showAll);







  return (
    <div className="relative min-h-[140px] bg-white rounded-lg py-2 px-2">

      <div className="flex items-center gap-2 ">
        {/* Main Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 border rounded border-slate-400 flex items-center gap-2 hover:bg-gray-200 transition-all duration-300"
        >
          <AiOutlineFilter />
          Filter
        </button>



        {/* Main Filter Button */}
        <button
          className="px-4 py-2 flex items-center gap-2  transition-all duration-300 !text-[#2c65af]"
        >
          Interests
          <AiOutlineFilter />
        </button>
      </div>

      {/* Filter Options with Smooth Animation */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden absolute z-50 flex pb-4 shadow-md  w-full ${
          showFilters
            ? "opacity-100 scale-y-100 "
            : "opacity-0 scale-y-0 max-h-0"
        } transform origin-top`}
      >
        <div className="mt-3 flex flex-wrap gap-3 ">
          {filters
            .slice(0, showAll ? filters.length : 4)
            .map((filter, index) => (
              <div key={index}>
                <div key={index} className="relative">
                  {/* Category Button */}
                  <button
                    onClick={() => toggleCategory(filter.name)}
                    className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2 !text-sm hover:!text-[#2c65af]  hover:!bg-[#edf5fc]  transition-all duration-300"
                  >
                    {selectedCategory === filter.name && selectedSubcategory
                      ? selectedSubcategory // Display the selected subcategory instead of category name
                      : filter.name}{" "}
                    {/* Display category name if no subcategory is selected */}
                    {openCategory === filter.name ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </button>

                  

                  {/* Subcategory Dropdown */}
                  {/* {openCategory === filter.name && (
                <div className="mt-1  ">
                  <div className="bg-white border border-red-500 rounded-lg shadow-md">
                    {filter.subcategories.map((sub, idx) => (
                      <div
                        key={idx}
                        onClick={() => selectSubcategory(filter.name, sub)}
                        className={`px-4 py-2 text-sm cursor-pointer transition-all duration-200 ${
                          selectedSubcategory === sub ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                        } rounded-md`}
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              )} */}


      
                </div>

                

                {openCategory === filter.name && (
                  <div className="mt-1  ">
                    <div className="bg-white rounded-lg shadow-md ">
                      {filter.subcategories.map((sub, idx) => (
                        <div
                          key={idx}
                          onClick={() => selectSubcategory(filter.name, sub)}
                          className={`px-4 py-2 text-sm cursor-pointer transition-all duration-200 ${
                            selectedSubcategory === sub
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-100"
                          } rounded-md`}
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  </div>                  
                )}
               
              </div>
            ))}

          {/* More Filter Button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="py-2 flex items-center gap-2 transition-all duration-300 !text-[#2c65af] font-semibold text-lg sticky"
          >
            <AiOutlineFilter className="!text-[#2c65af] font-semibold text-lg"  />
            {showAll ? "Less Filters" : "More Filters"}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ToggleComponent;
