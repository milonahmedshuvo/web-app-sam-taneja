'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";


interface Project {
  id: number;
  name: string;
  image: string;
  timeTitle: string,
  price : string
}

const projects: Project[] = [
  { id: 1, timeTitle: 'AliExpress 2 day ago', price: 'Up to 80% Off', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/cms/shzinc2z2tsnmrbdc6ys.png' },
  { id: 2, timeTitle: 'AliExpress 2 day ago', price: '$500', name: 'MLILY Fusion Supreme 11.5″ Hybrid Luxury..', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/content/zs7erjhvdhlyaktsajcp.jpg' },
  { id: 3, timeTitle: 'AliExpress 2 day ago', price: 'Get a 100 ama..', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/content/nxqozcejsev49fw2apwr.jpg' },
  { id: 4, timeTitle: 'AliExpress 2 day ago', price: '$11 per year', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/content/ha2pjlke8r6muhxcyqg5.png' },
  { id: 5, timeTitle: 'AliExpress 2 day ago', price: 'Trio basic for $29', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/content/qxfv9mltbssms3eyd4w9.png' },
  { id: 6, timeTitle: 'AliExpress 2 day ago', price: 'Up to 80% Off', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/cms/pv3qpvsxrluysblvumn2.jpg' },
  { id: 7, timeTitle: 'AliExpress 2 day ago', price: 'Up to 80% Off', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/cms/yq4xacrshhs2srgv1f8a.jpg' },
  { id: 8, timeTitle: 'AliExpress 2 day ago', price: 'Up to 80% Off', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/cms/fyj6jtkdhfts2fvgcbeg.jpg' },
  { id: 9, timeTitle: 'AliExpress 2 day ago', price: 'Up to 80% Off', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/cms/ovpirzadfrjtxe5uz5yt.jpg' },
  { id: 10, timeTitle: 'AliExpress 2 day ago', price: 'Up to 80% Off', name: 'AliExpress Tool Storage Deals', image: 'https://cdlnws.a.ssl.fastly.net/image/upload/f_auto,t_xlarge,q_auto:low/cms/axz4d3vxcxanjgrpwpls.png' },
];






export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative p-4 ">
      {canScrollLeft && (
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 p-1 cursor-pointer bg-[#fff] drop-shadow-lg text-white rounded-full z-10"
        >
          {/* &#9664; */}
          <FaAngleLeft  className='text-3xl text-gray-500'> </FaAngleLeft>
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 scrollbar-hide hide-scrollbar cursor-pointer "
        onScroll={updateScrollButtons}
      >
        {projects.map((project) => (
          <div key={project.id} className="min-w-[220px] h-[300px] relative bg-white shadow-md rounded-lg  p-1 border border-gray-200 ">
            
            <div className='overflow-hidden'>
            <Image
              src={project.image}
              alt={project.name}
              width={150}
              height={150}
              className="h-[130px] w-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            </div>

            <p className='text-xs text-gray-500 !mt-4' > {project.timeTitle} </p>

            <div className='flex flex-col justify-between min-h-[86px]'>
            <h3 className="mt-1 font-medium text-black text-md">{project.name}</h3>
            <p className='text-[#00A863] font-medium text-xl'>{project.price}</p>
            </div>
             
            
            <button className='!text-[#2C65BB] cursor-pointer text-sm absolute w-full bottom-0 left-0 pt-3 pb-2 text-end flex justify-end items-center hover:bg-gray-100 gap-2 pr-3'> <span>Daitals</span> <FaAngleRight></FaAngleRight> </button>
          </div>
          
        ))}

      </div>
      {canScrollRight && (
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-[10px] top-1/2 -translate-y-1/2 p-1 cursor-pointer bg-[#fff]  drop-shadow-lg text-white rounded-full z-10"
        >  
          <FaAngleRight className='text-3xl text-gray-500' ></FaAngleRight>
        </button>
      )}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>


    </div>
  );
}
