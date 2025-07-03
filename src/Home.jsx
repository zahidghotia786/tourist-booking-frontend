import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Valley from './components/Valley'
import BrochureForm from './components/BrochureForm'
import Gallery from './components/Gallery'
import Plans from './components/Plans'
import PaymentPlans from './components/PaymentPlans'
import LocationMap from './components/locationMap'
import Footer from './components/Footer'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // Scroll to top whenever the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className='w-full h-max bg-[#FFFFFF] flex flex-col items-center'>
            <Navbar />
            <Hero />
            <Valley />
            <BrochureForm />
            <Gallery />
            <Plans />
            <PaymentPlans />
            <LocationMap />
            <Footer />
        </div>
    )
}
