import Image from "next/image";

export default function TeacherGrp() {
  return (
    <div className="bg-cover bg-center text-white flex flex-col items-center justify-center py-32 px-4 relative"
      style={{ backgroundImage: 'url("/images/Awards.png")'}}>

      {/* White opaque film */}
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      {/* Title Section */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-[37px] md:text-[40px] lg:text-[45px] text-[#004875] font-bold text-shadow-lg mb-6">
          Empowering the Leaders of Tomorrow 
        </h1>

        <p className="text-lg sm:text-[20px] lg:text-[25px] text-black text-center text-shadow-md mb-6 whitespace-normal">
          At Greenfield International School, we believe in fostering the leaders of tomorrow. <br/>
          Our curriculum goes beyond textbooks, embracing innovation, creativity, and hands-on experiences. <br/>
          With a passion for excellence, we prepare our students to make a difference in the world, equipping <br/>
          them with the skills and mindset to lead with confidence and purpose.
        </p>
      </div>
    </div>
  )
}