import { useState, useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Navbar from './components/Navbar'
import Menu from './Pages/menu/Menu'
import Footer from './components/Footer'
import OrderOnline from './Pages/orderOnline/OrderOnline'
import ScrollToContact from './components/ScrollToContact'
import CartModal from './components/CartComponent'
import Lenis from '@studio-freight/lenis'

const App = () => {


// Smoth Scroll Using Lenis and bg image scroll effet with Lenis 
    const bgRef = useRef(null);
    
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
      });
    
      function raf(time) {
        lenis.raf(time);
    
        if (bgRef.current) {
          const scroll = lenis.scroll;
          bgRef.current.style.transform = `translateY(${scroll * 0.05}px)`;
        }
    
        requestAnimationFrame(raf);
      }
    
      requestAnimationFrame(raf);
    
      return () => {
        lenis.destroy();
      };
    }, []);
// Lenis code is completed


  const [isCartOpen, setIsCartOpen] = useState(false);


  return (
    <div className='relative  '>

        <ScrollToContact />

        <Navbar openCart={() => setIsCartOpen(true)}  />

        <div ref={bgRef} className="fixed h-300 -top-50 left-0 w-full -z-10">
          <img className="h-full w-full object-cover" src="/chocolateBgImage.png" alt=""/>
        </div>

        <CartModal isOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/orderOnline' element={<OrderOnline />}/>
        </Routes>

        <Footer />
    </div>
  )
}

export default App



