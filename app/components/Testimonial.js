"use client"

import React from 'react'
import style from "../CSS/LandingPage.module.css"
import { IoMdAddCircle } from 'react-icons/io'
import profile from "./profile.png"
import Image from 'next/image'

const Testimonial = () => {
  return (
    <>
        <div className={style.testimonial_card_display}>
            <div className={style.testimonial_card}>
                <div className={style.card_icon_title}>
                    <IoMdAddCircle fontSize={30} />
                    <p>Testimonials</p>
                </div>
                <p className={style.testimonial_card_desc}>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                <div className={style.testimonial_card_last}>
                <audio className={style.audio_control} src="" controls ></audio>
                    <div className={style.testimonial_name_desc}>
                        <Image className={style.profile_pic} src={profile} width={80} alt='profile' />
                        <div className={style.testimonial_name}>
                            <p className={style.name}>Shubha Nagarajan</p>
                            <p className={style.profession}>Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial
