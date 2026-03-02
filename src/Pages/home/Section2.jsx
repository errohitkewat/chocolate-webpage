import React from 'react'

const Section2 = () => {
  return (
    <div className='h-screen flex w-full bg-[#ffffff] px-45 py-25 '>
      <div className=' w-1/2  p-5'>
         <img className=' h-full' src="https://static.wixstatic.com/media/5bfb6f_9187ca7d81a740878fcf167282edab65.jpg/v1/fill/w_920,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_9187ca7d81a740878fcf167282edab65.jpg" alt="" />
      </div>

      <div style={{fontFamily: "Avenir Lt Std"}} className='w-1/2 p-5 flex flex-col  items-center pr-25 justify-center'>
        <h1 style={{fontFamily: "Playfair Display"}} className='text-4xl text-[#756f63] leading-18 '>Cacao & Me</h1>
        <p className='text-[#7f796e] mb-2 text-[15px] tracking-[2px] font-extralight '>MEET CHOCOLATIER BETH BLOOMINGS</p>
        <hr className='bg-[#7f796e] w-30 mb-10 '></hr>
        <p  className='leading-6 text-[#8d887d] mb-10 font-extralight text-[14px] text-center'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</p>
        <p className=' text-[#8d887d] font-extralight text-[14px] text-center'>Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      </div>
    </div>
  )
}

export default Section2