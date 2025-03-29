'use client'
import { SaveDealsProductCard } from "@/components/card/SaveDealProduct"
import img1 from "../../image/img1.webp"

const page = () => {
  return (
    <div className="max-w-7xl mx-auto" >
    <p className="text-[#303437] text-2xl font-semibold " >Showing 1 - 1 out of 1 saved items</p>


       <div className="flex flex-wrap gap-5"> 

        <SaveDealsProductCard
          id="k20-prybar"
          title="K20 Tools Stainless Steel Keychain Mini Pry Bar"
          price={9.99}
          originalPrice={19}
          image={img1.src}
          source="Amazon"
          daysAgo={2}
          freeShipping={true}
          isPrime={true}
          isFavorite={false}
          onToggleFavorite={(id) => console.log(`Toggle favorite for ${id}`)}
        />
        <SaveDealsProductCard
          id="k20-prybar"
          title="K20 Tools Stainless Steel Keychain Mini Pry Bar"
          price={9.99}
          originalPrice={19}
          image={img1.src}
          source="Amazon"
          daysAgo={2}
          freeShipping={true}
          isPrime={true}
          isFavorite={false}
          onToggleFavorite={(id) => console.log(`Toggle favorite for ${id}`)}
        />
        </div>
    </div>
  )
}

export default page