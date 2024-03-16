"use client"

import React, { useState } from 'react'
import style from "../CSS/LandingPage.module.css"
import { IoBagCheck } from "react-icons/io5";
import { Data } from '../Data/cardData';
import { IoIosAddCircle } from "react-icons/io";
import Card from './Card';

const Card_display = () => {






    return (
        <>
            <div className={style.card_display_sec_cont}>
                <div className={style.card_display_title}>
                    <IoIosAddCircle fontSize={30} className={style.toWhite} />
                    <h2>Add Your Listing</h2>
                </div>
                <div className={style.card_display_cont}>

                    {Data.map((ele, ind) => {
                        return (
                            <Card data={[ele]} key={ind} />
                        )
                    })}
                </div>
            </div >


        </>
    )
}

export default Card_display
