

const LoginPage = ({ isOpen, closeLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="w-[40%] py-2 px-5 h-[80%] bg-white relative rounded-lg">
            <button onClick={closeLogin} className="absolute top-4 right-4 text-black text-xl">✖</button>
        </div>
    </div>
  )
}

export default LoginPage