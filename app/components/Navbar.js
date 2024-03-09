"use client"


import React, { useState } from 'react'
import style from "../CSS/LandingPage.module.css"
import logo from "@/app/components/logo.png"
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { FaCompass } from "react-icons/fa6";
import { BsFillPentagonFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";






const Navbar = () => {


    const [togel, setTogel] = useState(true);

    return (
        <>
            <div className={style.navbar}>
                <div className={style.nav_logo}>
                    <Image src={logo} alt="logo" width={200} height={50} className={style.logo} />
                </div>
                <div className={style.nav_input}>
                <input type="text" placeholder="Search here..." className={style.nav_search} />
                <button className={style.nav_input_btn}><CiSearch fontSize={25} /></button>
                </div>
                
                <div className={style.explore_drop}>
                    <FaCompass color='#8064A2' fontSize={30} />
                    <select className={style.option_explore} name="explore" id="explore">
                            <option value="first">Explore</option>
                            <option value="first">second</option>
                            <option value="first">third</option>
                        </select>
                </div>
                <div className={style.explore_drop}>
                    <div className="penta_star">
                        {/* <FaStar className={style.star} /> */}
                        <BsFillPentagonFill className={style.penta} color='#8064A2' fontSize={30} />
                    </div>
                    {/* <FaCompass color='#8064A2' fontSize={30} /> */}
                    <select className={style.option_explore} name="explore" id="explore">
                            <option value="first">Explore</option>
                            <option value="first">second</option>
                            <option value="first">third</option>
                        </select>
                </div>
                <div className={style.nav_icons}>
                    <FaBookmark className={style.bookmark} fontSize={30} color='#8064A2' />
                    <IoIosNotifications className={style.notification} fontSize={40} color='#8064A2' />
                    <FaCartShopping className={style.cart} fontSize={30} color='#8064A2' />
                    <div className={style.togel_cont}>
                    {togel ? <GiHamburgerMenu fontSize={30} color='#8064A2' className={style.hamburger} onClick={e => setTogel(!togel)} /> : <GiCancel onClick={e => setTogel(!togel)} fontSize={30} color='#8064A2' className={style.cancel} />}
                    </div>
                </div>
                <button className={style.signin_btn}>Sign In</button>
            </div>
        </>
    )
}

export default Navbar 