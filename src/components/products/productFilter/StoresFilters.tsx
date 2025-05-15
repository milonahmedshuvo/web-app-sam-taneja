/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllCategoriesQuery, useGetAllStorisQuery } from "@/redux/api/samtanejaApi";
import Loading from "@/utils/Loading";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineFilter,
} from "react-icons/ai";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";


const filters = [
  { name: "Staff Pick", subcategories: [] },
  // {
  //   name: "Category", 
  //   subcategories: [ "Electronics", "Clothing", "Home Appliances", "Beauty", "Books" ],
  // },
  // {
  //   name: "Event",
  //   subcategories: ["Sports", "Music", "Art", "Tech"],
  // },
  // {
  //   name: "Popularity",
  //   subcategories: ["High", "Medium", "Low"],
  // },
  // {
  //   name: "Interest",
  //   subcategories: ["Gaming", "Reading", "Fitness", "Travel"],
  // },
  // {
  //   name: "Rank",
  //   subcategories: ["Top", "Trending", "New"],
  // },
  // {
  //   name: "Offer",
  //   subcategories: ["Discount", "BOGO", "Flash Sale"],
  // },
  
];





const StoreFilterComponent = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState<{
    [key: string]: string[];
  }>({});


  // const [selectedStaffPick, setSelectedStaffPick] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const {data:allCategoris, isLoading  } = useGetAllCategoriesQuery("")
  const {data:allStoris, isLoading:storesLoading } = useGetAllStorisQuery("")

  // Single store name by filter show store category
  const [selectStoreName, setSelectStoreName] = useState('')
  const params = useParams();
  const storeIdParam = params.id as string;
  const [id, setId] = useState<string>(storeIdParam);

  // set id
  useEffect(() => {
    if (storeIdParam) {
      setId(storeIdParam);
    }
  }, [storeIdParam]);


  const fetchBlogs = async (id: string) => {
      try {
        const res = await fetch(
          `https://samtaneja-api.code-commando.com/api/v1/stores/${id}`
        );
        const data = await res.json();

        console.log("store name", data?.data?.name)

        setSelectStoreName(data?.data?.name)
        // setStoreProducts(data?.data || []);
        // setTotalPages(data?.meta?.totalPages || 1);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
  
    useEffect(() => {
      fetchBlogs(id);
    }, [id]);
    

    useEffect(()=> {
      setSelectedSubcategories((prev) => {
    const currentSelections = prev['store'] || [];

    const isAlreadySelected = currentSelections.includes(selectStoreName);

    const updatedSelections = isAlreadySelected
      ? currentSelections.filter((item) => item !== selectStoreName)
      : [...currentSelections, selectStoreName];

    return { ...prev, ['store']: updatedSelections };
  });
    }, [selectStoreName])






  if(isLoading || storesLoading){
    return <Loading></Loading>
  }


 

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












// setup current selection sub category with dinamic   
// const handleSelect = () => {
//   setSelectedSubcategories((prev) => {
//     const currentSelections = prev['store'] || [];

//     const isAlreadySelected = currentSelections.includes('Orbis');

//     const updatedSelections = isAlreadySelected
//       ? currentSelections.filter((item) => item !== 'Orbis')
//       : [...currentSelections, 'Orbis'];

//     return { ...prev, ['store']: updatedSelections };
//   });
// }







  return (
    <div className="relative bg-white rounded-lg py-2 px-2 overflow-visible absolute z-10">


      {/* <p onClick={()=> handleSelect()} >button</p> */}



      {/* Main Filter Button */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-3 items-center text-[#2c65af]">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`${!showFilters? 'py-3 border border-[#2c65af] delay-100' :''} px-4 py-2  rounded  flex cursor-pointer items-center gap-2  transition-all duration-300`}
          >
            <AiOutlineFilter />
            <span className="text-[#2c65af] uppercase"> Filter </span>
          </button>

          {/* <ModalComponent></ModalComponent> */}
        </div>


        <div>
          <p className="text-[#303437] font-thin text-sm">
            154 Offers | Sorted by Featured{" "}
          </p>
        </div>
      </div>

      <hr />

      {/* Filter Options */}

      <div className="flex">
        <div
          className={`transition-all mt-3 h-24 duration-500 ease-in-out shadow-sm overflow-visible flex flex-col justify-between gap-3 pb-4 w-full  ${
            !showFilters
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 max-h-0"
          } transform origin-top`}
        >




          <div className="flex flex-wrap gap-3 pl-3">




            {/* Staff Pick */}
            {/* <div>
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
            </div> */}






              {/* i show category  */}
          
       
                <div  className="relative">
                  <button
                    onClick={() => toggleCategory('categoris')}
                    className="px-4 py-1.5 border border-[#e2e3e8] hover:border-[#72a1d5]  rounded-full flex items-center gap-2 !text-sm hover:!text-[#2c65af] hover:!bg-[#edf5fc] transition-all duration-300"
                  >
                    {getSelectedLabel('categoris')}

                    {openCategory === 'categoris' ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </button>



                  {/* Submenu */}
                  {openCategory === 'categoris' && (
                    <div className="absolute z-50 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-2 w-[250px]">
                      {allCategoris?.data?.map((sub:any, idx:number) => (
                        <label
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-md"
                        >



                          <input
                            type="checkbox"
                            checked={
                              selectedSubcategories['categoris']?.includes(
                                sub.name
                              ) || false
                            }
                            onChange={() => selectSubcategory('categoris', sub.name)}
                            className="form-checkbox text-blue-500"
                          />
                          <Link href={`/products/${sub.id}`} > 
                          {sub.name} 
                          </Link>
                        </label>
                      ))}
                    </div>
                  )}
                </div>




             {/* I show store category  */}
             <div className="relative">
                  <button
                    onClick={() => toggleCategory('store')}
                    className={`px-4 py-1.5 border border-[#e2e3e8]  hover:text-[#2c65af] hover:bg-[#edf5fc]   rounded-full flex items-center gap-2 !text-sm !hover:text-[#2c65af]  transition-all duration-300  ${selectedSubcategories ? "!text-[#2c65af] !bg-[#edf5fc] border !border-[#72a1d5]  " :""}  `}
                  >
                    {getSelectedLabel('store')}

                    {openCategory === 'store' ? (
                      <AiOutlineUp />
                    ) : (
                      <span> <AiOutlineDown /> </span>
                    )}
                  </button>



                  {/* Submenu */}
                  {openCategory === 'store' && (
                    <div className="absolute z-50 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-2 w-[250px]">
                      {allStoris?.data?.map((sub:any, idx:number) => (
                        <label
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-md"
                        >
                          {/* <input 
                            type="checkbox"
                            checked={
                              selectedSubcategories['store']?.includes(
                                sub.name
                              ) || false
                            }
                            onChange={() => selectSubcategory('store', sub.name)}
                            className="form-checkbox text-blue-500"
                          /> */}



                          <Link href={`/store/${sub.id}`} className="text-[#2c65af]" >{sub.name} </Link>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
           









            {/* Category Dropdown */}
            {filters
              .slice(1, showAll ? filters.length : 4)

              .map((category, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="px-4 py-1.5 border border-[#e2e3e8] hover:text-[#2c65af] hover:bg-[#edf5fc] hover:border-[#72a1d5]  rounded-full flex items-center gap-2 !text-sm transition-all duration-300"
                  >
                    {getSelectedLabel(category.name)}


                    {openCategory === category.name ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </button>



                  {/* Submenu */}
                  {openCategory === category.name && (
                    <div className="absolute z-50 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-2 w-[200px]">
                      {category.subcategories.map((sub, idx) => (
                        <label
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:bg-gray-100 rounded-md"
                        >



                          <input
                            type="checkbox"
                            checked={
                              selectedSubcategories[category.name]?.includes(
                                sub
                              ) || false
                            }
                            onChange={() => selectSubcategory(category.name, sub)}
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

export default StoreFilterComponent;
