import React from 'react'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    <div className=' h-180 w-full flex bg-[#ffff] px-45 py-25'>
      <div style={{fontFamily: "Avenir Lt Std"}} className='w-1/2 p-5 flex flex-col  items-center pr-25 justify-center'>
        <h1 style={{fontFamily: "Playfair Display"}} className='text-4xl text-[#756f63] leading-18 '>Catering & Events</h1>
        <p className='text-[#7f796e] mb-2 text-[15px] tracking-[2px] font-extralight '>FOR THE SWEETEST MOMENTS IN LIFE</p>
        <hr className='bg-[#7f796e] w-30 mb-10 '></hr>
        <p  className='leading-6 text-[#8d887d] mb-10 font-extralight text-[14px] text-center'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        
        <div className="   flex items-center justify-center  " >
            <Link to='/menu' className="text-sm text-[#756f63] opacity-70 mt-25 underline underline-offset-5 decoration-1 uppercase hover:text-[#31302e] duration-300  font-extralight" href="">View Selection</Link>
        </div>
      </div>

        <div className="h-full p-5 w-1/2 grid grid-cols-2 gap-3 grid-rows-2"> 
          <div className="bg-red-400 relative flex items-center justify-center">
            <img className='object-cover h-full  w-full ' src="https://static.wixstatic.com/media/3bccab8b3ff048b8a96d2505ce7a6b68.jpg/v1/fit/w_1686,h_1238,q_90,enc_avif,quality_auto/3bccab8b3ff048b8a96d2505ce7a6b68.jpg" alt="" />
            <div className='h-full w-full absolute bg-[#00000077] hover:opacity-100 duration-300 opacity-0'></div>
          </div>
          <div className="bg-red-400 relative flex items-center justify-center">
            <img className='object-cover h-full  w-full ' src="https://static.wixstatic.com/media/dd01395e4a254c42a0103b044a27bd39.jpg/v1/fit/w_1686,h_1238,q_90,enc_avif,quality_auto/dd01395e4a254c42a0103b044a27bd39.jpg" alt="" />
            <div className='h-full w-full absolute bg-[#00000077] hover:opacity-100 duration-300 opacity-0'></div>
          </div>
          <div className="bg-red-400 flex relative items-center justify-center">
            <img className='object-cover h-full  w-full ' src="https://static.wixstatic.com/media/37e6aa155d884912af7154b494ed6131.jpg/v1/fit/w_1686,h_1238,q_90,enc_avif,quality_auto/37e6aa155d884912af7154b494ed6131.jpg" alt="" />
            <div className='h-full w-full absolute bg-[#00000077] hover:opacity-100 duration-300 opacity-0'></div>
          </div>
          <div className="bg-red-400 flex relative items-center justify-center">
            <img className='object-cover h-full  w-full ' src="https://static.wixstatic.com/media/cbc31ba0d52d47ed94dfc5ccc7d9bb8f.jpg/v1/fit/w_1686,h_1238,q_90,enc_avif,quality_auto/cbc31ba0d52d47ed94dfc5ccc7d9bb8f.jpg" alt="" />
            <div className='h-full w-full absolute bg-[#00000077] hover:opacity-100 duration-300 opacity-0'></div>
          </div>
        </div>
    </div>
  )
}

export default Section4