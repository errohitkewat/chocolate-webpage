import React from 'react'
import OrderCard from '../../components/OrderCard'

const OrderOnline = () => {

  let truffelsDetails = [
    {
      name: "Dark Chocolate Peanut Truffles",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$9.00",
      image: "https://static.wixstatic.com/media/84770f_e50ac8cb502d4cd4815840c5d89fbcb8~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_auto/84770f_e50ac8cb502d4cd4815840c5d89fbcb8~mv2.jpg"
    },
    {
      name: "White Chocolate & Nuts Truffles",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$12.00",
      image: "https://static.wixstatic.com/media/84770f_633c70c33b784597a9eae950477740a2~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_633c70c33b784597a9eae950477740a2~mv2.jpg"
    },
    {
      name: "Milk Chocolate Carmel Truffles",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$13.00",
      image: "https://static.wixstatic.com/media/84770f_395d59a3d96248b682cab04703598991~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_395d59a3d96248b682cab04703598991~mv2.jpg"
    },
    {
      name: "Dark Chocolate Raspberry Truffles",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$15.00",
      image: "https://static.wixstatic.com/media/84770f_f7931d16999248b09df5bf84a0b19855~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f7931d16999248b09df5bf84a0b19855~mv2.jpg"
    }
  ]
  let desertDetails = [
    {
      name: "Banana Caramel Lake",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$9.00",
      image: "https://static.wixstatic.com/media/84770f_c968c26e530943799b25ac2da44adffe~mv2_d_3690_4915_s_4_2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_c968c26e530943799b25ac2da44adffe~mv2_d_3690_4915_s_4_2.jpg"
    },
    {
      name: "Cookies & Cream Mousse Strip",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$9.00",
      image: "https://static.wixstatic.com/media/84770f_7439cc4b541342c2a2698ed8f299d7fe~mv2_d_5208_3472_s_4_2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_7439cc4b541342c2a2698ed8f299d7fe~mv2_d_5208_3472_s_4_2.jpg"
    },
    {
      name: "Black & White Heart",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$9.00",
      image: "https://static.wixstatic.com/media/84770f_e17815fcb02c4c5581651122d629299d~mv2_d_3861_2574_s_4_2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_e17815fcb02c4c5581651122d629299d~mv2_d_3861_2574_s_4_2.jpg"
    },
    {
      name: "Golden Pistachio Chocolate Bar",
      discription: "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.",
      price: "$9.00",
      image: "https://static.wixstatic.com/media/84770f_f52f3a599f0242378629d9b725df39b2~mv2_d_5000_3333_s_4_2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f52f3a599f0242378629d9b725df39b2~mv2_d_5000_3333_s_4_2.jpg"
    },
  ]

  return (
    <div>

        <div className='w-full pt-15 bg-transparent ' >
           <img src="https://static.wixstatic.com/media/1263855e7c17443c8300b2a231eca495.jpg/v1/fill/w_2000,h_438,fp_0.50_0.50,q_85,enc_avif,quality_auto/1263855e7c17443c8300b2a231eca495.jpg" alt="" />
        </div>

        <div className='bg-white flex flex-col gap-7 py-10  px-20 '>
          <h1  style={{fontFamily: "Playfair Display"}} className='text-6xl  font-extralight text-[#615a44] '>Order Online</h1>
          <p style={{fontFamily: "Avenir Lt Std"}} className=' font-extralight  text-[#615a44] '>You can order online! Browse our menu items and choose what you’d like to order from us.</p>
          <div className='border items-center border-[#cfcfcf] w-fit flex gap-2 px-3 py-2 rounded-3xl '>
            <div className='h-3 w-3 bg-green-400 rounded-2xl'></div>
            <p className='font-light text-[#615a44]'>Accepting Orders</p>
          </div>

          <div className='flex gap-2'>
            <button className='focus:bg-[#cacaca] hover:bg-[#cacaca] border px-15 border-[#9f9f9f] font-light text-[#615a44] py-2'>PickUp</button>
            <button className='focus:bg-[#cacaca] hover:bg-[#cacaca] border px-15 border-[#9f9f9f] font-light text-[#615a44] py-2' >Delivery</button>
          </div>

          <div className='flex flex-row gap-15'>
            <div className='flex text-[#615a44] gap-2'>
              <i class="ri-timer-2-line"></i>
              <p className=' font-extralight'>Pickup time: Up to 30 minutes <a className='underline' href="">Change</a></p>
            </div>
            <div className=' text-[#615a44] flex gap-2'>
              <i class="ri-map-pin-line"></i>
              <p className='font-extralight'>Pickup Address: San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className='bg-white py-10 px-20 '>
          <div className='flex gap-5'>
            <p style={{fontFamily: "Avenir Lt Std"}} className=' text-[#615a44]  uppercase hover:underline text-[20px] px-2 font-extralight underline-offset-4' href="">Truffel</p>
            <p style={{fontFamily: "Avenir Lt Std"}} className=' text-[#615a44] uppercase hover:underline text-[20px] px-2 font-extralight underline-offset-4' href="">Deserts</p>
          </div>

          <div>
            <h1 style={{fontFamily: "Playfair Display"}} className='text-[35px] py-5 border-b border-[#bcbcbc] text-[#615a44] ' >Menu</h1>
          </div>



          <div className="py-5">
              <div className='py-5'>
                <h1 style={{fontFamily: "Playfair Display"}} className="text-2xl  text-[#2a2924] font-extrabold py-1">TRUFFELS</h1>
                <p style={{fontFamily: "Avenir Lt Std"}} className="font-extralight text-[#615a44] text-[18px] py-1">This is a section of your menu, customize it any way you want.</p>
              </div>
              
              <div className="py-5 w-full flex flex-row items-center justify-between gap-5 ">
                  {
                    truffelsDetails.map((props, idx)=>{
                      return <OrderCard id={idx} name={props.name} discription={props.discription} price={props.price} image={props.image} />
                    })
                  }
              </div>
          </div>



          <div className="py-5">
              <div className='py-5'>
                <h1 style={{fontFamily: "Playfair Display"}} className="text-2xl  text-[#2a2924] font-extrabold py-1">DESERTS</h1>
                <p style={{fontFamily: "Avenir Lt Std"}} className="font-extralight text-[#615a44] text-[18px] py-1">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
              </div>
              
              <div className="py-5 w-full flex flex-row items-center justify-between gap-5 ">
                  {
                    desertDetails.map((props, idx)=>{
                      return <OrderCard id={idx} name={props.name} discription={props.discription} price={props.price} image={props.image} />
                    })
                  }
              </div>
          </div>

        </div>

    </div>
  )
}

export default OrderOnline