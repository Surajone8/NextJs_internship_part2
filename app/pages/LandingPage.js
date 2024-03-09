import React from 'react'
import Navbar from '../components/Navbar'
import style from  "../CSS/LandingPage.module.css"
import ReaderPage from '../components/ReaderPage'
import Form from '../components/Form'
import Card_display from '../components/Card_display'
import CustomCard from '../components/CustomCard'
import Testimonial from '../components/Testimonial'
import CoverLetter from '../components/CoverLetter'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className={style.ReaderSection}>
                <ReaderPage />
                <Form />
            </div>
            <Card_display />
            <CustomCard />
            <Testimonial />
            <CoverLetter />
            <Footer />
        </>
    )
}

export default LandingPage