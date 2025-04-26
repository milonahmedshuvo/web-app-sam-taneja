"use client"

import { SetStateAction, useState } from "react"
import { ChevronDown, ChevronRight, Plus, Search, Pencil, Trash2 } from "lucide-react"



// Define types for our category structure
interface ChildCategory {
  id: string
  name: string
  count: number
}

interface SubCategory {
  id: string
  name: string
  count: number
  children: ChildCategory[]
  isExpanded?: boolean
  isAddingChild?: boolean
  newChildName?: string
}

interface Category {
  id: string
  name: string
  count: number
  subcategories: SubCategory[]
  isExpanded?: boolean
  isAddingSubcategory?: boolean
  newSubcategoryName?: string
}

export default function CategoryManager() {
  // Initial categories data
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "cat1",
      name: "Clothing",
      count: 55,
      isExpanded: false,
      subcategories: [],
    },
    {
      id: "cat2",
      name: "Electronics",
      count: 25,
      isExpanded: true,
      subcategories: [
        {
          id: "sub1",
          name: "TVs",
          count: 8,
          isExpanded: false,
          children: [],
        },
        {
          id: "sub2",
          name: "Phones, Tablet's & Accessories",
          count: 11,
          isExpanded: false,
          children: [],
        },
        {
          id: "sub3",
          name: "Wearable Technology",
          count: 5,
          isExpanded: false,
          children: [],
        },
        {
          id: "sub4",
          name: "Peripherals",
          count: 2,
          isExpanded: false,
          children: [],
        },
        {
          id: "sub5",
          name: "Store Coupons",
          count: 8,
          isExpanded: false,
          children: [],
        },
        {
          id: "sub6",
          name: "Cameras & Accessories",
          count: 3,
          isExpanded: true,
          children: [
            { id: "child1", name: "Digital Camera's", count: 1 },
            { id: "child2", name: "GoPro's", count: 1 },
            { id: "child3", name: "Headphone", count: 1 },
          ],
        },
        {
          id: "sub7",
          name: "Entertainment",
          count: 7,
          isExpanded: false,
          children: [],
        },
        {
          id: "sub8",
          name: "Batteries",
          count: 3,
          isExpanded: false,
          children: [],
        },
        {
          id: "sub9",
          name: "Other's",
          count: 0,
          isExpanded: false,
          children: [],
        },
      ],
    },
    {
      id: "cat3",
      name: "Computers",
      count: 12,
      isExpanded: false,
      subcategories: [],
    },
    {
      id: "cat4",
      name: "Hotel & Garden",
      count: 17,
      isExpanded: false,
      subcategories: [],
    },
    {
      id: "cat5",
      name: "Travel & Entertainment",
      count: 23,
      isExpanded: false,
      subcategories: [],
    },
    {
      id: "cat6",
      name: "Airfare",
      count: 58,
      isExpanded: false,
      subcategories: [],
    },
    {
      id: "cat7",
      name: "Automotive",
      count: 66,
      isExpanded: false,
      subcategories: [],
    },
    {
      id: "cat8",
      name: "Clothing & Accessories",
      count: 45,
      isExpanded: false,
      subcategories: [],
    },
    {
      id: "cat9",
      name: "Computers",
      count: 78,
      isExpanded: false,
      subcategories: [],
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [showCount, setShowCount] = useState("10")
  const [newCategoryName, setNewCategoryName] = useState("")
  const [isAddingCategory, setIsAddingCategory] = useState(false)

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId ? { ...category, isExpanded: !category.isExpanded } : category,
      ),
    )
  }

  // Toggle subcategory expansion
  const toggleSubcategory = (categoryId: string, subcategoryId: string) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              subcategories: category.subcategories.map((subcategory) =>
                subcategory.id === subcategoryId
                  ? { ...subcategory, isExpanded: !subcategory.isExpanded }
                  : subcategory,
              ),
            }
          : category,
      ),
    )
  }

  // Toggle adding new subcategory input
  const toggleAddSubcategory = (categoryId: string) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? { ...category, isAddingSubcategory: !category.isAddingSubcategory, newSubcategoryName: "" }
          : category,
      ),
    )
  }

  // Toggle adding new child category input
  const toggleAddChildCategory = (categoryId: string, subcategoryId: string) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              subcategories: category.subcategories.map((subcategory) =>
                subcategory.id === subcategoryId
                  ? { ...subcategory, isAddingChild: !subcategory.isAddingChild, newChildName: "" }
                  : subcategory,
              ),
            }
          : category,
      ),
    )
  }

  // Handle subcategory name input change
  const handleSubcategoryNameChange = (categoryId: string, value: string) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId ? { ...category, newSubcategoryName: value } : category,
      ),
    )
  }

  // Handle child category name input change
  const handleChildNameChange = (categoryId: string, subcategoryId: string, value: string) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              subcategories: category.subcategories.map((subcategory) =>
                subcategory.id === subcategoryId ? { ...subcategory, newChildName: value } : subcategory,
              ),
            }
          : category,
      ),
    )
  }

  // Save new subcategory
  const saveSubcategory = (categoryId: string) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId && category.newSubcategoryName) {
          const newSubcategory: SubCategory = {
            id: `sub${Date.now()}`,
            name: category.newSubcategoryName,
            count: 0,
            children: [],
            isExpanded: false,
          }
          return {
            ...category,
            subcategories: [...category.subcategories, newSubcategory],
            isAddingSubcategory: false,
            newSubcategoryName: "",
          }
        }
        return category
      }),
    )
  }

  // Save new child category
  const saveChildCategory = (categoryId: string, subcategoryId: string) => {
    setCategories(
      categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            subcategories: category.subcategories.map((subcategory) => {
              if (subcategory.id === subcategoryId && subcategory.newChildName) {
                const newChild: ChildCategory = {
                  id: `child${Date.now()}`,
                  name: subcategory.newChildName,
                  count: 0,
                }
                return {
                  ...subcategory,
                  children: [...subcategory.children, newChild],
                  isAddingChild: false,
                  newChildName: "",
                }
              }
              return subcategory
            }),
          }
        }
        return category
      }),
    )
  }

  // Add new top-level category
  const addNewCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory: Category = {
        id: `cat${Date.now()}`,
        name: newCategoryName,
        count: 0,
        isExpanded: false,
        subcategories: [],
      }
      setCategories([...categories, newCategory])
      setNewCategoryName("")
      setIsAddingCategory(false)
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Showing</span>
          <select value={showCount} onVolumeChange={setShowCount} className="w-20">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <button onClick={() => setIsAddingCategory(true)} className="whitespace-nowrap">
            <Plus className="h-4 w-4 mr-2" /> Add New Categories
          </button>
        </div>
      </div>

      {isAddingCategory && (
        <div className="mb-4 flex gap-2">
          <input
            value={newCategoryName}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setNewCategoryName(e.target.value)}
            placeholder="Enter category name"
          />
          <button onClick={addNewCategory}>Save</button>
          <button  onClick={() => setIsAddingCategory(false)}>
            Cancel
          </button>
        </div>
      )}

      <div className="border rounded-md overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-gray-50 p-4 border-b">
          <div className="col-span-6 font-medium">Categories Name (T. Sub)</div>
          <div className="col-span-4 font-medium">Total Listing (Product)</div>
          <div className="col-span-2 font-medium text-right">Actions</div>
        </div>

        {/* Table Body */}
        <div className="divide-y">
        {categories.map((category) => (
  <div key={category.id} className="grid grid-cols-12 p-4">
    <div className="col-span-6 flex items-center gap-2">
      <button onClick={() => toggleCategory(category.id)}>
        {category.isExpanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      <span>{category.name} ({category.subcategories.length})</span>
    </div>

    <div className="col-span-4">{category.count}</div>

    <div className="col-span-2 flex justify-end gap-2">
      <button onClick={() => toggleAddSubcategory(category.id)}>
        <Plus className="h-4 w-4" />
      </button>
      <button>
        <Pencil className="h-4 w-4" />
      </button>
      <button>
        <Trash2 className="h-4 w-4" />
      </button>
    </div>

    {/* Subcategories */}
    {category.isExpanded && (
      <div className="col-span-12 bg-gray-50 p-4 rounded">
        {category.subcategories.map((subcategory) => (
          <div key={subcategory.id} className="grid grid-cols-12 p-2 ml-6">
            <div className="col-span-6 flex items-center gap-2">
              <button onClick={() => toggleSubcategory(category.id, subcategory.id)}>
                {subcategory.isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              <span>{subcategory.name} ({subcategory.children.length})</span>
            </div>

            <div className="col-span-4">{subcategory.count}</div>

            <div className="col-span-2 flex justify-end gap-2">
              <button onClick={() => toggleAddChildCategory(category.id, subcategory.id)}>
                <Plus className="h-4 w-4" />
              </button>
              <button>
                <Pencil className="h-4 w-4" />
              </button>
              <button>
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {/* Child categories */}
            {subcategory.isExpanded && (
              <div className="col-span-12 bg-white p-2 ml-12 rounded">
                {subcategory.children.map((child) => (
                  <div key={child.id} className="grid grid-cols-12 p-2">
                    <div className="col-span-6 flex items-center">
                      <span>{child.name}</span>
                    </div>

                    <div className="col-span-4">{child.count}</div>

                    <div className="col-span-2 flex justify-end gap-2">
                      <button>
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add new child input */}
                {subcategory.isAddingChild && (
                  <div className="flex gap-2 p-2 ml-2">
                    <input
                      type="text"
                      value={subcategory.newChildName || ""}
                      onChange={(e) => handleChildNameChange(category.id, subcategory.id, e.target.value)}
                      placeholder="New Child Name"
                      className="border rounded px-2 py-1"
                    />
                    <button onClick={() => saveChildCategory(category.id, subcategory.id)} className="text-green-600">
                      Save
                    </button>
                    <button onClick={() => toggleAddChildCategory(category.id, subcategory.id)} className="text-red-500">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Add new subcategory input */}
        {category.isAddingSubcategory && (
          <div className="flex gap-2 ml-6 p-2">
            <input
              type="text"
              value={category.newSubcategoryName || ""}
              onChange={(e) => handleSubcategoryNameChange(category.id, e.target.value)}
              placeholder="New Subcategory Name"
              className="border rounded px-2 py-1"
            />
            <button onClick={() => saveSubcategory(category.id)} className="text-green-600">
              Save
            </button>
            <button onClick={() => toggleAddSubcategory(category.id)} className="text-red-500">
              Cancel
            </button>
          </div>
        )}
      </div>
    )}
  </div>
))}

        </div>
      </div>
    </div>
  )
}
