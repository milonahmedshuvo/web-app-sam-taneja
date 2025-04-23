"use client"
import BreadCrumb from "@/components/antComponent/breadcrumb/BreadCrumb";
import ProductCarousel from "@/components/products/productCarousel/productCarousel";
import ProductFilterComponent from "@/components/products/productFilter/ProductFilter";



const Products = () => {
 




  return <div className="mb-10">
      <div>
         <BreadCrumb/>
      </div>

        

           {/* product filter components  */}
         <div className="max-w-7xl mx-auto">
              <ProductFilterComponent/> 
              <ProductCarousel/>
         </div>
         
  </div>;
};

export default Products;
