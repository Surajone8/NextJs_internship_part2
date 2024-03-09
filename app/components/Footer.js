import React from 'react'
import style from "../CSS/LandingPage.module.css"
import { FootData } from '../Data/FooterData'
import { social_data } from '../Data/FooterData'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


const Footer = () => {
  return (
    <>
        <div className={style.footer_cont}>
            <div className={style.footer_inner}>
                {FootData.map((ele,ind) => {
                    return (
                    <div className={style.footer_col} key={ind}>
                        <h4 className={style.footer_head}>{ele.title}</h4>
                        {ele.links.map((link,index) => {
                            return (
                            <p key={index} className={style.footer_link}>{link}</p>
                            )
                        })}
                    </div>
                    )
                })}
                <div className={style.footer_col_last}>
                <h4 className={style.footer_head}>Social Media</h4>
                    <div className={style.social_icons}>
                        <FaFacebook fontSize={30}/>
                        <AiFillTwitterCircle fontSize={30} />
                        <FaInstagram fontSize={30}/>
                        <FaPinterest fontSize={30}/>
                        <FaGooglePlus fontSize={30}/>
                        <FaSquareYoutube fontSize={30}/>
                        <BsTelegram fontSize={30}/>
                        <MdEmail fontSize={30}/>
                    </div>
                
                <h4 className={style.footer_head}>Invite Friends</h4>
                <div className={style.nav_input}>
                <input type="text" placeholder="Email." className={style.nav_search} />
                <button className={style.nav_input_btn}><CiSearch fontSize={25} /></button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
