import { useState } from "react";


const LoginPage = ({ isOpen, closeLogin }) => {

  const [type, setType] = useState("customer")

    if (!isOpen) return null;
      return (
        <div className="fixed inset-0 text-black bg-black/50 flex items-center justify-center z-50">
            <div className="w-[40%] py-2 px-5 h-[80%] bg-white relative rounded-lg">
            
    
            <button onClick={closeLogin} className="absolute top-4 right-4 text-black text-xl">✖</button>
                
            <h1 style={{fontFamily: "Playfair Display"}} className="py-10 mt-15 text-3xl font-bold text-center uppercase">Welcome Back</h1>

            <div style={{fontFamily: "Avenir Lt Std"}} className="flex px-7 py-5">
    
              <button
              onClick={()=>setType("customer")}
              className={`px-4 text-[20px] py-2 ${type==="customer" ? "underline underline-offset-4":""}`}>
                Customer
              </button>
    
              <button
              onClick={()=>setType("admin")}
              className={`px-4 text-[20px]  py-2 ${type==="admin" ? "underline underline-offset-4":""}`}>
                Admin
              </button>
    
            </div>
            {/* Customer Form */}
            {type === "customer" && (
    
              <form className="flex px-10 flex-col gap-3">
    
                <input
                type="email"
                placeholder="Customer Email"
                className="border p-2"
                />
    
                <input
                type="password"
                placeholder="Password"
                className="border p-2"
                />
    
                <button className="bg-black mt-5 text-white py-2">
                  Login
                </button>
    
              </form>
    
            )}
    
            {/* Admin Form */}
            {type === "admin" && (
    
              <form className="flex px-10 flex-col gap-3">
    
                <input
                type="email"
                placeholder="Admin Email"
                className="border p-2"
                />
    
                <input
                type="password"
                placeholder="Password"
                className="border p-2"
                />
    
                <button className="bg-black mt-5 text-white py-2">
                  Admin Login
                </button>
    
              </form>
    
            )}
    
          </div>
    
        </div>
    
            
    
    
      )
}

export default LoginPage