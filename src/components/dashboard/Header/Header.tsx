import Image from "next/image"
import man from "../../../image/man1.png"

const Header = () => {

    
    return (
      <header className=" bg-white text-[#5A5A5A] h-20 flex items-center gap-3  justify-end px-6 sticky top-0 z-30  py-10 " >

      <div>
        <Image src={man} width={500} height={500} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
      </div>



      <div className="flex flex-col space-y-1">
        <div>
          <span className="text-lg font-medium">Welcome Back Admin</span>
        </div>
        <div className="text-sm opacity-80">Please validate </div>
      </div>

      
    </header>
    )
  }
  
  export default Header