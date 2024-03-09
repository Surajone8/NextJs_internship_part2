import React from 'react'
import style from "../CSS/LandingPage.module.css"
import Image from 'next/image'
import people from "./people.png"

const ReaderPage = () => {
  return (
    <>
        <div className={style.ReaderCont}>
        <>
          <h1 className={style.reader_head}>Explore your <span className={style.reader_head_span1}>hobby</span> or <span className={style.reader_head_span2}>passion</span></h1>
            <div className={style.Reader_text}>
                <p className={style.reader_line1}>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                <p className={style.reader_line1_screen}>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</p>
            <p className={style.reader_line2}>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
        </>
            
            <Image src={people} alt='people'  className={style.people_img} />
        </div>
    </>
  )
}

export default ReaderPage
