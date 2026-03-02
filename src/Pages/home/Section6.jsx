import React from 'react'

const Section6 = () => {
  return (
    <div className='px-45 py-25 flex flex-row   bg-white'>

        <div className="h-full py-5 pl-5 pr-30 w-1/2  flex-row gap-5 flex ">
            <div className= 'w-1/2 relative '>
                <img className='h-full w-full object-cover'  src="https://static.wixstatic.com/media/a97347d205194af6b032e1efa1ade4b6.jpg/v1/fill/w_386,h_1106,fp_0.59_0.1,q_90,enc_avif,quality_auto/a97347d205194af6b032e1efa1ade4b6.jpg" alt="" />
                <div className='h-full top-0 opacity-0 hover:opacity-100 duration-300 w-full absolute bg-[#00000055]'></div>
            </div>
            <div className='w-1/2  relative'>
                <img className='h-full w-full object-cover' src="https://static.wixstatic.com/media/62c7d3aea49a4c24b39b610ab9fa0c8e.jpg/v1/fill/w_386,h_1106,q_90,enc_avif,quality_auto/62c7d3aea49a4c24b39b610ab9fa0c8e.jpg" alt="" />
                <div className='h-full top-0 w-full opacity-0 hover:opacity-100 duration-300 absolute bg-[#00000055]'></div>
            </div>
        </div>

        <div style={{fontFamily: "Avenir Lt Std"}} className='w-1/2 p-5 flex flex-col  items-center pr-25 justify-center'>
          <h1 style={{fontFamily: "Playfair Display"}} className='text-4xl text-[#756f63] leading-18 '>The Beans</h1>
          <p className='text-[#7f796e] mb-2 text-[15px] tracking-[2px] font-extralight '>QUALITY CACAO FROM AROUND THE GLOBE</p>
          <hr className='bg-[#7f796e] w-30 mb-10 '></hr>
          <p  className='leading-6 text-[#8d887d] mb-10 font-extralight text-[14px] text-center'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>

    </div>
  )
}

export default Section6