"use client";

import {  useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Edit, Plus, Search, Trash2, X } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs/Breadcrumbs";
import {
  useDeletedStorisMutation,
  useGetAllStorisQuery,
  useUpdateStorisMutation,
} from "@/redux/api/samtanejaApi";
import { toast } from "sonner";

interface TStore {
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
}

export default function AllStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState("10");
  const [deleteStoreId, setDeleteStoreId] = useState<string | null>("");
  const { data } = useGetAllStorisQuery(undefined);
  const [deleteStoris, { isSuccess, isError }] = useDeletedStorisMutation();
  const [updateStore, setUpdateStore] = useState<TStore | null>(null);

  const [categoryName, setCategoryName] = useState('');
  const [storisnameUpdate, ] = useUpdateStorisMutation()

  

   useEffect(() => {
      if (updateStore) {
        setCategoryName(
          updateStore?.name || ''
        );
      }
    }, [updateStore]);
  

  if (isSuccess) {
    toast.success("Store delete is Sucsss!!");
  }
  if (isError) {
    toast.error("Store delete is delete!!");
  }

  const filteredCategories = data?.data?.filter(
    (category: { name: string; id: string }) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayedCategories = filteredCategories?.slice(
    0,
    Number.parseInt(perPage)
  );

  const handleDeleteClick = (id: string) => {
    deleteStoris(id);
    setDeleteStoreId(null);
  };

  const handleUpdatePass = (category:TStore) => {
    setUpdateStore(category);
  };


  


  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const id = updateStore?.id
        const data = {
         name: categoryName,
        }
      


       const response = await storisnameUpdate({data, id}).unwrap()
       console.log( "responso from reduxt update", response)
       if(response.success){
        toast.success("Store is update success")
        setUpdateStore(null)
        setCategoryName("");
       }
        
        
        
      } catch (error) {
        toast.error("Category name add Filed!!");
        console.log(error)
      } finally {
        
      }
    };



  return (
    <div className="space-y-4 px-4 md:px-7  !mb-2">
      <Breadcrumbs
        title="All stores"
        category="Store"
        subCategory="All Stores"
      ></Breadcrumbs>

      <div
        className={`overflow-x-auto rounded-md  bg-white px-10 py-6  ${
          deleteStoreId || updateStore ? "opacity-20 bg-gray-300" : "opacity-100"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white pb-6">
          <div className="flex gap-8 flex-col md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Showing</span>
              <select
                className="w-[70px] rounded-md border border-gray-200 px-2 py-1 text-sm focus:outline-none"
                value={perPage}
                onChange={(e) => setPerPage(e.target.value)}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>

            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
              <input
                type="search"
                placeholder="Search here..."
                className="w-full rounded-md border border-gray-200 pl-8 pr-2 py-2 text-sm sm:w-[300px] focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* add button  */}
          <div className="border-[#2C65AF] border text-[#2C65AF] text-[ 15px] py-1.5 px-2 rounded cursor-pointer">
            <Link href="/dashboard/addStores" className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              <button className="cursor-pointer">Add New Store</button>
            </Link>
          </div>
        </div>

        <table className="min-w-full table-auto text-sm ">
          <thead className="bg-gray-100 text-[#8E95A9] text-[16px] ">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">
                Store Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">
                <div className="flex items-center justify-center gap-1">
                  T. Product Listed
                  <ChevronDown className="h-4 w-4" />
                </div>
              </th>
              <th className="px-4 py-2 text-right font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {displayedCategories?.map(
              (store: TStore) => (
                <tr
                  key={store.id}
                  className="border-t border-gray-200 text-[#2E4454]"
                >
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      {store.name}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center">00</td>

                  <td className="px-4 py-2 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="rounded-md p-2 hover:bg-gray-100"
                        title="Edit"
                        onClick={() => handleUpdatePass(store)}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="rounded-md p-2 hover:bg-gray-100"
                        title="Delete"
                        onClick={() => setDeleteStoreId(store.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Custom Modal for Delete Confirmation */}
      {deleteStoreId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 ">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">Delete Store</h2>
            <p className="text-lg text-gray-600">
              Are you sure you want to delete this Store?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteStoreId(null)}
                className="px-4 py-2 rounded border text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteClick(deleteStoreId)}
                className="px-4 py-2 rounded bg-red-500 !text-white text-sm hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {updateStore && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100 ">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Update Store</h2> 
              <button
                onClick={() => setUpdateStore(null)}
                className="px-4 py-2 rounded text-sm cursor-pointer hover:text-red-600"
              >
                <X/>
              </button>
            </div>



            <p className="text-lg text-gray-600">
              Are you sure you want to update this Store?
            </p>

             <form onSubmit={handleSubmit}>
             <div className="mb-6">
            <label
              htmlFor="categoryName"
              className="block text-[18px] font-medium mb-2"
            >
              Category Name<span className="text-red-500">*</span>
            </label>
            <input
              id="categoryName"
              placeholder="Enter Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full focus:outline-none py-3 border border-gray-200 px-4 rounded"
              required
            />
          </div>


           <button type="submit" className="bg-blue-500 px-6 py-1.5 text-white rounded-2xl cursor-pointer" >Submit</button>          
             </form>

          </div>
        </div>
      )}
    </div>
  );
}
