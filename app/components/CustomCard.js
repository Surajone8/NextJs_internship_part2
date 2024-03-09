import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import style from "../CSS/LandingPage.module.css"

const CustomCard = () => {
  return (
    <>
        <div className={style.custom_card_display}>
    
            <div className={style.Custom_card}>
                <div className={style.card_icon_title}>
                    <IoMdAddCircle fontSize={30} />
                    <p>Add your own</p>
                </div>
                <p className={style.card_desc}>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                <button className={style.card_btn}>Add new</button>
            </div>
        
        </div>
    </>
  )
}

export default CustomCard
