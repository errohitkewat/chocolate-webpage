import { Link } from "react-router-dom"


const HeroSection = () => {
  return (
    <div id="heroSection" className='h-full pt-50 pb-70 px-45 w-full '>
      <p className=" font-Mulish uppercase tracking-[7px] font-extralight text-[13px] mb-3 text-center  text-white ">- Boutique Factory -</p>
      <h1 style={{fontFamily: "Playfair Display"}} className="text-center leading-27 text-[120px] text-white">Chocolat</h1>
      <div style={{fontFamily: "Playfair Display"}} className="text-[120px] flex flex-row gap-5 justify-center leading-27 text-white ">
        <h1 className="text-[35px] -mt-3 italic">de</h1>
        <h1>rêves</h1>
      </div>

      <div className=" mt-50 border-white  flex items-center justify-center  " >
        <Link to='/orderOnline' className="text-xl underline underline-offset-5 decoration-1 uppercase text-white font-extralight" href="">Order Online</Link>
      </div>
    </div>
  )
}

export default HeroSection