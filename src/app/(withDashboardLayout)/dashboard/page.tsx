import Header from "@/components/dashboard/Header/Header";
import Overview from "@/components/dashboard/Overview/Overview";



const DashboardHomePage = () => {

  return (
    <div>
        <Header/>
        <div className="px-4 md:px-6" >
         <Overview/>
         {/* <CategoryManager/> */}
    </div>
    </div>
  )
}


export default DashboardHomePage;