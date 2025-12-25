import React from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import ScrollTop from '../components/home/ScrollTopButton'
import AcademicsData from '../components/academics/AcademicsData'

const Academics = () => {
  return (
    <div>
        <Navbar />
        <AcademicsData />
        <Footer />
        <ScrollTop />
    </div>
  )
}

export default Academics