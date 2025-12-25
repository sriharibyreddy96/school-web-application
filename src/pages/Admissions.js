import React from 'react'
import Navbar from '../components/home/Navbar'
import Footer from '../components/home/Footer'
import ScrollTop from '../components/home/ScrollTopButton'
import AdmissionData from '../components/admissions/AdmissionData'

const Admissions = () => {
  return (
    <div>
        <Navbar />
        <AdmissionData />
        <Footer />
        <ScrollTop />
    </div>
  )
}

export default Admissions;