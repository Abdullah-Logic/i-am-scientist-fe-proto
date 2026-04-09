import React from 'react'
import Image from 'next/image';


const ComingSoon = () => {
  return (
  <div className="z-10 relative bg-[#280253] text-white overflow-hidden p-8 md:p-0">
  {/* Top Images */}
  <div className="hidden lg:flex justify-between items-center absolute top-0 left-0 right-0 transform -translate-y-1/2">
    <Image
      
      src="/about-us/Ellipse 4.webp"
      width={323}
      height={323}
      alt="images"
      className="animate-pulse"
    />
    <Image
      
      src="/about-us/Ellipse 8.webp"
      width={323}
      height={323}
      alt="images"
      className="animate-pulse delay-200"
    />
    <Image
      
      src="/about-us/Ellipse 5.webp"
      width={323}
      height={323}
      alt="images"
      className="animate-pulse delay-400"
    />
  </div>

  {/* Coming Soon Message */}
  <div className="h-[50vh] flex flex-col justify-center items-center space-y-4">
    <p className="font-misri font-bold text-3xl md:text-5xl text-center pt-14 md:pt-12 drop-shadow-lg">
      Coming Soon
    </p>
    <p className="text-lg md:text-2xl font-light text-center max-w-3xl">
      We're working hard to bring you something amazing! Stay tuned.
    </p>
    <button className="mt-6 px-8 py-3 bg-white text-purple-800 rounded-lg font-semibold hover:bg-purple-200 transition duration-300">
      Notify Me
    </button>
  </div>

  {/* Bottom Images */}
  <div className="hidden lg:flex justify-between items-center absolute bottom-0 left-0 right-0 transform translate-y-1/2">
    <Image
      
      src="/about-us/Ellipse 6.webp"
      width={323}
      height={323}
      alt="images"
      className="animate-bounce delay-300"
    />
    <Image
      
      src="/about-us/Ellipse 7.webp"
      width={323}
      height={323}
      alt="images"
      className="animate-bounce"
    />
  </div>
</div>
  )
}

export default ComingSoon