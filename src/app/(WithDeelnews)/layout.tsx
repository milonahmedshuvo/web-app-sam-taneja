import DeelnewsFooter from "@/components/deelnews/footer/footer";
import DeelnewsNavbar from "@/components/deelnews/navber/navber";



const layout = ({ children }: { children: React.ReactNode }) => {
    
    return (
        <div>
            <DeelnewsNavbar/>
            {children}
            <DeelnewsFooter/>
        </div>
    );
};

export default layout;
