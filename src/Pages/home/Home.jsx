
import HeroSection from './HeroSection'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Contact from '../../components/Contact'


const Home = () => {
  return (
    <div className='w-full bg-transparent' >
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Contact />
    </div>
  )
}

export default Home

