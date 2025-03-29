import BreadCrumb from "@/components/antComponent/breadcrumb/BreadCrumb";
import Cartparent from "@/components/card/cardParent";
// import Carousel from "@/components/home/carousel/carousel";
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
              <Cartparent />
              <Cartparent />
              <Cartparent />
         </div>
         
  </div>;
};

export default Products;
