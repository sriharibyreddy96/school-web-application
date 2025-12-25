import React from 'react'
import Navbar from '../components/home/Navbar'
import Slider from '../components/home/Slider'
import BackgroundImg from '../components/home/BackgroundImg'
import Curriculum from '../components/home/Curriculum'
import Cards from '../components/home/Cards'
import Footer from '../components/home/Footer'
import ScrollTop from '../components/home/ScrollTopButton'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <BackgroundImg />
        <Curriculum />
        <Cards />
        <Footer />
        <ScrollTop />
    </div>
  )
}

export default Home