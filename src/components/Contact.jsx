import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#f4f3f2] h-full w-full px-45  py-25 '>
        <div className='flex flex-col gap-4 items-center '>
            <h1 style={{fontFamily: "Playfair Display"}} className='text-[#756f63] text-3xl'>Contact Me</h1>
            <p className='font-extralight text-[15px] tracking-[2px] text-[#7f796e] '>INFO@MYSITE.COM / TEL: 123-456-7890</p>
            <hr className='text-[#625f57ad] w-30 mb-5 '></hr>
            <p className='px-80  text-center text-[#8d887d] font-extralight text-[14px] '>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you</p>
        </div>

        <div className='py-10 flex h-full w-full gap-5 px-45'>
            <div className='h-full flex flex-col gap-4 w-1/2 px-2'>
                <div className='flex  flex-col gap-1'>
                    <label className='text-[#625f57] text-sm font-extralight' htmlFor="firstName">Enter Your Fist Name *</label>
                    <input className='border duration-200 focus:bg-[#cacaca] outline-none hover:bg-[#cacaca] border-[#625f576d] py-2 px-2' type="text" id='firstName' name='FistName'/>
                </div>
                <div className='flex  flex-col gap-1'>
                    <label className='text-[#625f57] text-sm font-extralight'  htmlFor="lastName">Enter Your Last Name *</label>
                    <input className='border duration-200 focus:bg-[#cacaca] outline-none hover:bg-[#cacaca] border-[#625f576d] py-2 px-2' type="text" id='lastName' name='LastName'/>
                </div>
                <div className='flex  flex-col gap-1'>
                    <label className='text-[#625f57] text-sm font-extralight' htmlFor="message">Enter Your Message *</label>
                    <textarea className='resize-none border duration-200 focus:bg-[#cacaca] outline-none hover:bg-[#cacaca] border-[#625f576d] h-30 py-2 px-2' type="text" id='message' name='Message'/>
                </div>
            </div>

            <div className=' h-full flex flex-col gap-4 px-2 w-1/2'>
                <div className='flex  flex-col gap-1'>
                    <label className='text-[#625f57] text-sm font-extralight' htmlFor="fullName">Enter Your Full Name *</label>
                    <input className='border duration-200 focus:bg-[#cacaca] outline-none hover:bg-[#cacaca] border-[#625f576d] py-2 px-2' type="text" id='fullName' name='FullName'/>
                </div>
                <div className='flex  flex-col gap-1'>
                    <label className='text-[#625f57] text-sm font-extralight' htmlFor="subject">Enter Your Subject *</label>
                    <input  className='border duration-200 focus:bg-[#cacaca] outline-none hover:bg-[#cacaca] border-[#625f576d] py-2 px-2' type="text" id='subject' name='Subject'/>
                </div>
                <button className='border hover:bg-[#8d8c8a] duration-300 font-extralight bg-[#64635f] text-white px-10 mt-7 py-3'>Submit</button>
            </div>

        </div>
    </div>
  )
}

export default Contact