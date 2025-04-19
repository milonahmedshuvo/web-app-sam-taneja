/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import BreadCrumb from "@/components/antComponent/breadcrumb/BreadCrumb";
import Card from "@/components/card/card";
import ProductCarousel from "@/components/products/productCarousel/productCarousel";
import ProductFilterComponent from "@/components/products/productFilter/ProductFilter";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




const Products = () => {
  const params = useParams();
  const categoryIdParam = params.id as string;
  const [id, setId] = useState<string>(categoryIdParam);

  const [categoriesProducts, setCategoriesProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // optional

  // set page
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // set id
  useEffect(() => {
    if (categoryIdParam) {
      setId(categoryIdParam);
    }
  }, [categoryIdParam]);

  const fetchBlogs = async (page: number, id: string) => {
    try {
      const res = await fetch(
        `https://samtaneja-api.code-commando.com/api/v1/products?page=${page}&limit=20&categoryId=${id}`
      );
      const data = await res.json();

      setCategoriesProducts(data?.data || []);
      setTotalPages(data?.meta?.totalPages || 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage, id);
  }, [currentPage, id]);

  console.log("category products", categoriesProducts);






  
  return (
    <div className="mb-10">
      <div>
        <BreadCrumb />
      </div>

      {/* product filter components  */}
      <div className="max-w-7xl mx-auto">
        <ProductFilterComponent />
        <ProductCarousel />

        <div>
          {/* show category data */}
          {categoriesProducts?.length === 0 ? (
            <p>No product found.</p>
          ) : (
            <div className="space-y-3">
              {categoriesProducts.map((product: any) => (
                <Card
                key={product.id}
                id={product.id}
                image={product.img}
                smallText={'store'}
                title={product.name}
                price={product.price}
                description={product.description}
              />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
