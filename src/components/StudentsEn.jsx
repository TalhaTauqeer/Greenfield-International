import { Playfair_Display } from 'next/font/google';
import { PiStudentDuotone } from "react-icons/pi";
import { BsAward } from "react-icons/bs";
import { GiShakingHands } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function StudentsEn() {
  return (
    <div className="w-full bg-slate-200 border-orange-500 border-t-2 border-b-2 py-4 sm:py-6 md:py-8 lg:py-10">
      
      {/* Main Title div */}
      <div className="mx-auto px-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h1 className={playfair.className + " text-slate-700 text-base sm:text-lg md:text-2xl lg:text-4xl font-bold text-center"}>
          Greenfield International By The Numbers
        </h1>
      </div>

      {/* Logo, Number & Title Div - Grid Layout */}
      <div className='grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 sm:gap-6 md:gap-8.5 lg:gap-8 mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12'>

        {/* Active Students */}
        <div className='flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4.5 lg:gap-6'>
          
          <div className='text-slate-700 text-4xl sm:text-5xl md:text-5xl lg:text-6xl shrink-0'>
            <PiStudentDuotone />
          </div>
          
          <div className='flex flex-col gap-0.5 sm:gap-1 md:gap-1 lg:gap-2'>
            <h2 className='text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-orange-700'>20000</h2>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base text-slate-500 font-medium'>Active Students</p>
          </div>
        </div>

        {/* Awards Winning */}
        <div className='flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4.5 lg:gap-6'>
          
          <div className='text-slate-700 text-4xl sm:text-5xl md:text-5xl lg:text-6xl shrink-0'>
            <BsAward />
          </div>
          
          <div className='flex flex-col gap-0.5 sm:gap-1 md:gap-1 lg:gap-2'>
            <h2 className='text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-orange-700'>100</h2>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base text-slate-500 font-medium'>Awards Winning</p>
          </div>
        </div>

        {/* Years of History */}
        <div className='flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4.5 lg:gap-6'>
          
          <div className='text-slate-700 text-4xl sm:text-5xl md:text-5xl lg:text-6xl shrink-0'>
            <GiShakingHands />
          </div>
          
          <div className='flex flex-col gap-0.5 sm:gap-1 md:gap-1 lg:gap-2'>
            <h2 className='text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-orange-700'>15</h2>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base text-slate-500 font-medium'>Years of History</p>
          </div>
        </div>

        {/* Library Books */}
        <div className='flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
          
          <div className='text-slate-700 text-4xl sm:text-5xl md:text-5xl lg:text-6xl shrink-0'>
            <TbBooks />
          </div>
          
          <div className='flex flex-col gap-0.5 sm:gap-1 md:gap-1 lg:gap-2'>
            <h2 className='text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-orange-700'>20000</h2>
            <p className='text-xs sm:text-sm md:text-sm lg:text-base text-slate-500 font-medium'>Library Books</p>
          </div>
        </div>

      </div>

    </div>
  )
}