import React from 'react'
import Image from 'next/image'
// import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 lg:px-36 text-left w-full'>
      <div className='flex flex-col lg:flex-row items-start px-8 justify-center gap-11 lg:gap-32 py-10 border-b border-white/30'>
        {/* Column 01 */}
        <div className='flex flex-col lg:items-start items-center w-full'>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={200} height={70} className="w-40 sm:w-35 md:w-34 lg:w-57 lg:h-14 xl:w-60 xl:h-16" />
          </Link>
          <p className='mt-6 text-center lg:text-left text-md xl:text-lg text-white/80'>
            Genesis Trainings empowers individuals through practical, industry-relevant IT education. We bridge the skills gap by fostering innovation, leadership, and growth—helping learners unlock their potential and thrive in their careers.
          </p>
        </div>

        {/* Column 02 */}
        {/* <div className='flex flex-col lg:items-start items-center w-full'>
          <ul className='grid grid-cols-3 sm:grid sm:grid-cols-3 lg:flex lg:flex-col gap-4 justify-between text-md pt-5 sm:pt-5 md:pt-2 lg:pt-20 text-white/80 lg:space-y-1.5'>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/trainings">Trainings</Link></li>
            <li><Link href="/future">FutureMinds</Link></li>
            <li><Link href="/incubator">Incubator</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/upcomingevents">Upcoming Events</Link></li>
          </ul>
        </div> */}

        {/* Column 03 */}
        <div className='flex flex-col w-full items-center lg:items-start sm:text-center md:text-left'>
          <h2 className='font-semibold text-white text-xl mb-2 pt-5 sm:pt-5 md:pt-2 lg:pt-18'>Contact Us</h2>
          <p className='text-white text-sm mb-4'>We would like to talk to you</p>
          <p className='font-semibold text-white text-xl lg:text-lg xl:text-xl mb-5'>+92 313 7344 465</p>
          <div className='mb-4'>
            <Link href={'/contact'} className='w-full py-3 px-10 md:px-6 lg:px-7 xl:px-10 text-white border border-blue-500 hover:bg-blue-500 hover:text-white'>
              CONTACT US
            </Link>
          </div>
          <p className='text-white/80 text-sm'>11:00 AM TO 06:00 PM</p>

          {/* Social Media Icons */}
          {/* <div className="flex flex-col sm:flex-row-reverse sm:justify-between gap-4 sm:gap-6 mt-6 sm:mt-4">
            <div className="flex gap-x-6 justify-center"> */}
              {/* Instagram Icon */}
              {/* <Link href="https://www.instagram.com/genesis_trainings/" className="group" aria-label="Instagram">
                <FaInstagram color="white" size={24} />
              </Link> */}
              {/* LinkedIn Icon */}
              {/* <Link href="https://www.linkedin.com/company/genesis-trainings-official/" className="group" aria-label="LinkedIn">
                <FaLinkedin color="white" size={24} />
              </Link> */}
              {/* Facebook Icon */}
              {/* <Link href="https://www.facebook.com/gentrainings" className="group" aria-label="Facebook">
                <FaFacebook color="white" size={24} />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        Copyright 2025 © Genesis. All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
