import MenuCard from "../../components/MenuCard"


const Menu = () => {
  
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
    <div >
        <div className='w-full py-35 bg-transparent ' >
            <h1 style={{fontFamily: "Playfair Display"}} className='text-white text-center text-5xl'>Chocolates & Desserts</h1>
        </div>
  
        {/* Menu Container  */}
        <div className="bg-white py-25 px-45 ">
          
          <h1 style={{fontFamily: "Playfair Display"}} className="text-4xl mb-10">Menu</h1>



          <div className=" mb-10">
              <div>
                <h1 style={{fontFamily: "Playfair Display"}} className="text-2xl  text-[#2a2924] font-extrabold py-1">TRUFFELS</h1>
                <p style={{fontFamily: "Avenir Lt Std"}} className="font-extralight text-[#2a2924] text-[18px] py-1">This is a section of your menu, customize it any way you want.</p>
              </div>

              <div className="py-5">
                 {truffelsDetails.map((props, idx)=>{
                    return <MenuCard id={idx} name={props.name} discription={props.discription} price={props.price} image={props.image} />
                  })
                 }
              </div>
          </div>



          <div className="mb-10">
              <div>
                <h1 style={{fontFamily: "Playfair Display"}} className="text-2xl text-[#2a2924] font-extrabold py-1">DESSERTS</h1>
                <p style={{fontFamily: "Avenir Lt Std"}} className="font-extralight text-[18px] text-[#2a2924] py-1">I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
              </div>

              <div className="py-5">
                  {desertDetails.map((props, idx)=>{
                      return <MenuCard id={idx} name={props.name} discription={props.discription} price={props.price} image={props.image} />
                    })
                  }
              </div>
          </div>

        

        </div>
      </div>
    
  )
}

export default Menu