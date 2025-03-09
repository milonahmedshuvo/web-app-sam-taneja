import Cartparent from "@/components/card/cardParent";
import Banner from "@/components/home/banner/banner";
import BlogCard from "@/components/home/blogCard/blogCard";
import Carousel from "@/components/home/carousel/carousel";
// import FilterOptions from "@/components/home/filterOptions/filterOptions";
import ProductFilterComponent from "@/components/products/productFilter/ProductFilter";



const page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="xl:w-[70%] ">
          <ProductFilterComponent/>
          <Carousel />
          <Cartparent />
          <Cartparent />
          <Cartparent />
        </div>

        <div className="border border-[#c1c4cc] rounded-md w-full xl:w-[30%]">
          <div className="flex justify-between px-2 mt-2">
            <p className="text-[#7f8387] font-[700] text-sm">From the Blog</p>
            <p className="text-base font-medium text-[#2c65af] hover:underline ">
              View All
            </p>
          </div>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          />

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/u0ina8b1daxa9gleeec3.png"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>

          <BlogCard
            image="https://c.dlnws.com/image/upload/c_lpad,dpr_auto,f_auto,h_300,q_auto:low,w_300/content/qpvzbybtgjb2jym2edwf.jpg"
            title="Peacock Free Trial: How To Get a Free 7-Day Subscription Trial in 2025"
            subTitle="The streaming service can be selective about who gets a 7-day or 3-month free trial, but there are ways to stream for free in February 2025."
            blogDateTitle="Blog Buying Guides 7 mos ago"
          ></BlogCard>
        </div>
      </div>
    </div>
  );
};

export default page;
