import { FaChevronRight } from 'react-icons/fa'
import aboutusbanner from '../../../../image/aboutus-banner.png'
import Link from 'next/link'

const AbountusBanner = () => {


  return (
    <div className='relative bg-cover bg-no-repeat bg-center h-[500px] mt-4 bg-[#121B51]' style={{backgroundImage: `url('${aboutusbanner.src}')`}} >
          <div className='absolute inset-0 bg-[#3e5aa7]/50  '></div>

          <div className='relative z-10 flex justify-center items-center h-full' >
               <div>
               <h1 className='text-[55px] mulish text-white !font-[700]'>About Us</h1>
               <p className='text-[18px] font-[500px] text-white text-center flex justify-center gap-2 cursor-pointer uppercase'> <Link href='/deelnews'>Home </Link>  <FaChevronRight/> <span>About Us</span> </p>
               </div>
          </div>
    </div>
  )
}

export default AbountusBanner