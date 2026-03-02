

const CartModal = ({ isOpen, closeCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="w-[40%] py-2 px-5 h-[80%] bg-white relative rounded-lg">
        {/* Close Button */}
        <button onClick={closeCart} className="absolute top-4 right-4 text-black text-xl">✖</button>
        
        <div className="flex items-center border-[#c0c0c0]  gap-3 border-b ">
            <h1 style={{fontFamily: "Playfair Display"}} className="text-3xl">Cart</h1>
            <p style={{fontFamily: "Avenir Lt Std"}} className="mt-3 " >(0 items)</p>
        </div>

        <div className="flex flex-col gap-2">
            <div className="p-2 border-b border-[#c0c0c0] h-90 "></div>
            <div className="border-b py-2 border-[#c0c0c0] ">
                <p style={{fontFamily: "Avenir Lt Std"}} className="flex  hover:text-[#7f796e] duration-200 text-[20px]" >🏷️ Enter Promo Code</p>
            </div>
            <div className="">
                <div>
                    <div style={{fontFamily: "Avenir Lt Std"}} className="flex py-2 text-[20px] items-center justify-between ">
                        <span>Estiated Total</span> <span>$9.00</span>
                    </div>
                    <p style={{fontFamily: "Avenir Lt Std"}} className=" text-[15px]">Taxes and shipping are calculated at checkout.</p>
                    <div className="flex py-2 flex-col gap-2 justify-between">
                        <button style={{fontFamily: "Avenir Lt Std"}} className=" bg-black hover:bg-[#404040] duration-300 decoration-1 underline-offset-4  text-white hover:underline  px-10 py-1">CheckOut</button>
                        <button style={{fontFamily: "Avenir Lt Std"}} className="border hover:text-[#7f796e] underline-[#c0c0c0] border-[#c0c0c0] hover:underline underline-offset-4 decoration-1 duration-200 px-10 py-1">View Cart</button>
                    </div>
                    <p style={{fontFamily: "Avenir Lt Std"}} className="text-center pt-4">🔒 Secure CheckOut</p>
                </div> 
                
            </div>
        </div>
        
      </div>

    </div>
  );
};

export default CartModal;