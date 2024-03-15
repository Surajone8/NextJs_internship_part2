"use client"

import React, { useState } from 'react'
import style from "../CSS/LandingPage.module.css"
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdBasket } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";

const Card = ({ data }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverOut = () => {
        setIsHovered(false);
    };

    const colorData = isHovered ? data[0].color : "transparent";
    const colorData2 = isHovered ? "white" : data[0].color;


    return (
        <div className="card-co">
            {
                data.map((ele, ind) => {
                    return (
                        <>
                            <div className={style.card} style={{
                                // Define your inline CSS styles here
                                backgroundColor: colorData, // Change background color on hover
                                padding: '10px',
                                cursor: 'pointer' // Optional: Change cursor on hover
                            }}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHoverOut} key={ind}>

                                <div className={style.card_icon_title}  >
                                    {/* <IoBagCheck fontSize={30} /> */}
                                    <div className="card_icon_cont" style={{ color: colorData2 }}>
                                        {/* {ele.card_icon} */}
                                        <IoBagCheck fontSize={30} color={isHovered ? "white" : ele.color} />
                                        {/* <`${[ele.card_icon, ele.card_ex]}` /> */}
                                    </div>
                                    <p>{ele.card_title}</p>
                                </div>
                                <p className={style.card_desc}>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                                {/* <button className={style.card_btn}>{ele.btn_cont}</button> */}
                            </div >
                        </>
                    )
                })
            }



        </div>
    )
}


export default Card