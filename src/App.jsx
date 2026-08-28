import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ServiceAreas from './components/ServiceAreas'
import Listings from './components/Listings'
import RecentSales from './components/RecentSales'
import HomeValueForm from './components/HomeValueForm'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import StickyMobileBar from './components/StickyMobileBar'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceAreas />
        <Listings />
        <RecentSales />
        <HomeValueForm />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  )
}

export default App
