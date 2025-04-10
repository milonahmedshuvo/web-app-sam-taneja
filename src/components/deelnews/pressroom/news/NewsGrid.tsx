import { NewsCard } from "./NewsCard"
import news1 from "../../../../image/news1.png"
import news2 from "../../../../image/news2.jpeg"
import news3 from "../../../../image/news3.jpeg"
import news4 from "../../../../image/news4.jpeg"
import news5 from "../../../../image/news5.jpeg"
import news6 from "../../../../image/news6.jpeg"



const newsItems = [
    {
      id: "1",
      imageUrl: news1,
      title: "DEALNEWS PR ROUNDUP FOR MAY 15",
      description:
        "This week our analyst joined Good Morning America to discuss the best deals and shopping tips for consumers.",
      readMoreUrl: "/news/may-15",
    },
    {
      id: "2",
      imageUrl: news2,
      title: "DEALNEWS PR ROUNDUP FOR MAY 8",
      description:
        "This week our expert told Today Shopping everything consumers should know about upcoming sales and discounts.",
      readMoreUrl: "/news/may-8",
    },
    {
      id: "3",
      imageUrl: news3,
      title: "DEALNEWS PR ROUNDUP FOR MAY 1",
      description:
        "This week our experts spoke to First for Women about what to expect for Mother's Day sales this year.",
      readMoreUrl: "/news/may-1",
    },
    {
      id: "4",
      imageUrl: news4,
      title: "DEALNEWS PR ROUNDUP FOR APRIL 24",
      description:
        "This week we spoke to Best Life and GoBankingRates about how to find the best deals during spring sales events.",
      readMoreUrl: "/news/april-24",
    },
    {
      id: "5",
      imageUrl: news5,
      title: "DEALNEWS PR ROUNDUP FOR APRIL 10",
      description:
        "This week we told Don't Waste Your Money about food prices and strategies for saving at the grocery store.",
      readMoreUrl: "/news/april-10",
    },
    {
      id: "6",
      imageUrl: news6,
      title: "DEALNEWS PR ROUNDUP FOR APRIL 17",
      description:
        "This week our analyst told Consumer Affairs how to save money on everyday essentials during inflation.",
      readMoreUrl: "/news/april-17",
    },
  ]





export function NewsCardGrid() {


  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">DealNews in the News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <NewsCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            readMoreUrl={item.readMoreUrl}
          />
        ))}
      </div>
    </div>
  )
}
