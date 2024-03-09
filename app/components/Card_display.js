import React from 'react'
import style from "../CSS/LandingPage.module.css"
import { IoBagCheck } from "react-icons/io5";
import { Data } from '../Data/cardData';

const Card_display = () => {
  return (
    <>
             <div className={style.card_display_cont}>
    {Data.map((ele,ind) => {
        return (
            <div className={style.card} key={ind}>
                <div className={style.card_icon_title}>
                    <IoBagCheck fontSize={30} />
                    <p>People</p>
                </div>
                <p className={style.card_desc}>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                <button className={style.card_btn}>connect</button>
            </div>
        )
    })}
        </div>
       
    </>
  )
}

export default Card_display
