"use client";
import ModalComponent from "@/components/antComponent/modal/Modal";
import { useState } from "react";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineFilter,
  AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";


const filters = [
  { name: "Staff Pick", subcategories: [] },
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
    name: "Event",
    subcategories: ["Sports", "Music", "Art", "Tech"],
  },
  {
    name: "Popularity",
    subcategories: ["High", "Medium", "Low"],
  },
  {
    name: "Interest",
    subcategories: ["Gaming", "Reading", "Fitness", "Travel"],
  },
  {
    name: "Rank",
    subcategories: ["Top", "Trending", "New"],
  },
  {
    name: "Offer",
    subcategories: ["Discount", "BOGO", "Flash Sale"],
  },
  {
    name: "Condition",
    subcategories: ["New", "Used", "Refurbished"],
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
    name: "Offer Status",
    subcategories: ["Discount", "BOGO", "Flash Sale", "Limited Time"],
  },
];

const ProductFilterComponent = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<{
    [key: string]: string[];
  }>({});
  const [selectedStaffPick, setSelectedStaffPick] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  const selectSubcategory = (categoryName: string, subcategory: string) => {
    setSelectedSubcategories((prev) => {
      const currentSelections = prev[categoryName] || [];
      const isAlreadySelected = currentSelections.includes(subcategory);
      const updatedSelections = isAlreadySelected
        ? currentSelections.filter((item) => item !== subcategory)
        : [...currentSelections, subcategory];

      return { ...prev, [categoryName]: updatedSelections };
    });
  };

  const getSelectedLabel = (categoryName: string) => {
    const selectedItems = selectedSubcategories[categoryName] || [];
    if (selectedItems.length === 0) return categoryName;
    const lastSelected = selectedItems[selectedItems.length - 1];
    return selectedItems.length > 1
      ? `${lastSelected} +${selectedItems.length - 1}`
      : lastSelected;
  };

  return (
    <div className="relative bg-white rounded-lg py-2 px-2 overflow-visible absolute z-10">
      {/* Main Filter Button */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border rounded border-slate-400 flex cursor-pointer items-center gap-2 hover:bg-gray-200 transition-all duration-300"
          >
            <AiOutlineFilter />
            Filter
          </button>

          <ModalComponent></ModalComponent>
        </div>

        <div>
          <p className="text-[#303437] font-thin text-sm">
            154 Offers | Sorted by Featured{" "}
          </p>
        </div>
      </div>

      {/* Filter Options */}

      <div className="flex">
        <div
          className={`transition-all mt-3 h-24 duration-500 ease-in-out shadow-xl overflow-visible flex flex-col justify-between gap-3 pb-4 w-full  ${
            showFilters
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 max-h-0"
          } transform origin-top`}
        >




          <div className="flex flex-wrap gap-3 pl-3">




            {/* Staff Pick */}
            <div>
              <button
                onClick={() => setSelectedStaffPick(!selectedStaffPick)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 !text-sm transition-all duration-300 ${
                  selectedStaffPick
                    ? "bg-[#2c65af] text-white hover:bg-[#1f4d89]"
                    : "bg-gray-100 hover:bg-[#edf5fc] hover:text-[#2c65af]"
                }`}
              >
                Staff Pick
                {selectedStaffPick && <AiOutlineClose />}
              </button>
            </div>




            {/* Category Dropdown */}
            {filters
              .slice(1, showAll ? filters.length : 4)
              .map((filter, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleCategory(filter.name)}
                    className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2 !text-sm hover:!text-[#2c65af] hover:!bg-[#edf5fc] transition-all duration-300"
                  >
                    {getSelectedLabel(filter.name)}
                    {openCategory === filter.name ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </button>

                  {/* Submenu */}
                  {openCategory === filter.name && (
                    <div className="absolute z-50 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-2 w-[200px]">
                      {filter.subcategories.map((sub, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-md"
                        >
                          <input
                            type="checkbox"
                            checked={
                              selectedSubcategories[filter.name]?.includes(
                                sub
                              ) || false
                            }
                            onChange={() => selectSubcategory(filter.name, sub)}
                            className="form-checkbox text-blue-500"
                          />
                          {sub}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}


            <button
              onClick={() => setShowAll(!showAll)}
              className="py-2 flex items-center gap-2 transition-all duration-300 !text-[#2c65af] font-semibold text-lg sticky"
            >
              <HiOutlineAdjustmentsHorizontal className="!text-[#2c65af] font-semibold text-lg" />
              {showAll ? "Less Filters" : "More Filters"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterComponent;
