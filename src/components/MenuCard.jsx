

const MenuCard = (props) => {
  return (
    <div>

        <div className="border-t border-[#d2d0d0] py-5 text-[#2a2924] flex justify-between ">
            <div className="flex-1 pr-3">
              <p style={{fontFamily: "Avenir Lt Std"}} className="flex justify-between text-[22px] tracking-[1px] font-extralight text-[#2a2924] ">{props.name} <span className="text-sm font-extralight">{props.price} </span></p>
              <p style={{fontFamily: "Avenir Lt Std"}} className="font-extralight leading-10 text-[15px] ">{props.discription}</p>
            </div>
            <div>
              <img className="h-40" src={props.image} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default MenuCard