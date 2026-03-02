

const OrderCard = (props) => {
  return (

        <div className='w-1/4 h-full border-[#bcbcbc] hover:scale-103 duration-200 border'>
            <div className='h-1/2 w-full'>
              <img className='h-full w-full object-cover' src={props.image} alt="" />
            </div>
            <div className='h-1/2 p-5 w-full flex flex-col gap-3 bg-[#f4f3f2] '>
               <h1 style={{fontFamily: "Playfair Display"}} className='text-[17px]'>{props.name}</h1>
               <p  style={{fontFamily: "Avenir Lt Std"}} className='font-extralight text-[#6f6f6f] text-[15px] line-clamp-2 '>{props.discription}</p>
               <p style={{fontFamily: "Avenir Lt Std"}} >{props.price}</p>
            </div>
        </div>
  )
}

export default OrderCard