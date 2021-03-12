import React from 'react'
import NavbarComponent from './components/NavbarComponent.jsx'
import Benefits from './components/Benefits.jsx'
import BookAppointment from './components/BookAppointment.jsx'
import CustomerFeedback from './components/CustomerFeedback.jsx'
import Footer from './components/Footer.jsx'
import JumbotronComponent from './components/JumbotronComponent.jsx'
import LatestNews from './components/LatestNews.jsx'
import Services from './components/Services.jsx'
import ShopSection from './components/ShopSection.jsx'
import SpecialOffer from './components/SpecialOffer.jsx'
import TriSection from './components/TriSection.jsx'
import VideoSection from './components/VideoSection.jsx'
const Homepage = () => {
  return (
    <div>
      <NavbarComponent />
      <JumbotronComponent />
      <TriSection />
      <VideoSection />
      <Services />
      <SpecialOffer />
      <Benefits />
      <ShopSection />
      <CustomerFeedback />
      <BookAppointment />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default Homepage
