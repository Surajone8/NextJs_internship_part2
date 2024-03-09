import React from 'react'
import style from "../CSS/LandingPage.module.css"
import Image from 'next/image'
import coverImg from "../components/people.png"

const CoverLetter = () => {
  return (
    <>
        <div className={style.coverLetter_cont}>
            <div className={style.coverLetter}>
            <div className={style.cover_top}>
               <h1 className={style.reader_head}>Explore your <span className={style.reader_head_span1}>hobby</span> or <span className={style.reader_head_span2}>passion</span></h1>
          <button className={style.card_btn}>Get started</button> 
            </div>
            <Image src={coverImg} alt='people' className={style.coverImg} />

            </div>
        </div>
    </>
  )
}

export default CoverLetter
