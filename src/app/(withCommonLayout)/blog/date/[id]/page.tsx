/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const YearPage = () => {
  const params = useParams();
  const yearParam = params.id as string;
  const [year, setYear] = useState<number>(Number(yearParam));
  
 



  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // optional

  





  // set page
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };


  // set year
  useEffect(() => {
    if (yearParam) {
      setYear(Number(yearParam));
    }
  }, [yearParam]);






  

  const fetchBlogs = async (page: number, year: number) => {
              
    try {
      const res = await fetch(
        `http://localhost:5777/api/v1/blogs?page=${page}&year=${year}`
      );
      const data = await res.json();

      setBlogs(data?.data || []);
      setTotalPages(data?.meta?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage, year);
  }, [currentPage, year]);







 



  return (
    <div className="p-4">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold mb-2">Blogs from {year}</h2>

        {blogs?.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <div className="space-y-3">
            {blogs.map((blog: any) => (
              <div key={blog._id} className=" p-3 rounded shadow">
                <h3 className="font-semibold">{blog.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            ))}
          </div>
        )}
      </div>





      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {currentPage} {totalPages ? `of ${totalPages}` : ""}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      
    </div>
  );
};

export default YearPage;
