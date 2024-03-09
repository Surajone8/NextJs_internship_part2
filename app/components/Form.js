"use client"

import React, { useState } from 'react'
import style from "../CSS/LandingPage.module.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


 
const Form = () => {

  const[active, setActive] = useState(true)

  return (
    <>
        <div className={style.formCont}>
            <div className={style.sign_option}>
              <h3 className={active ? style.active : ""} onClick={e => setActive(!active)}>Sign In</h3>
              <h3 className={!active ? style.active : ""} onClick={e => setActive(!active)}>Join In</h3>
            </div>
            <div className={style.ran_cont}>
              <div className={style.easy_signIn}>
              <button className={style.google_sign}><FcGoogle className={style.input_in_icon} fontSize={30} /> Continue with Google</button>
              <button className={style.facebook_sign}><FaFacebook className={style.input_in_icon} color='blue' fontSize={30} /> Continue with Facebook</button>
            </div>
            <h3 class={style.line_through}><span>Or connect with</span></h3>
            <div className={style.ran_cont_2}>
                <div className={style.input_signIn}>
                                <input placeholder='Email' type="text" className={style.email} />
                                <div className={style.password_input}>
                                <input placeholder='Password' type="password" className={style.password}  />
                                <FaEyeSlash className={style.password_icon} fontSize={20} />
                                </div>
                            </div>
                            <div className={active ? style.signIn_alt : style.signIn_alt_sec}>
                            <div className={active ? style.signIn_alt_1 : style.not_visible}>
                              <input className={style.remember} type="checkbox" />
                                Remember me
                            </div>
                            <div className={style.signIn_alt_2}>
                              <FaLock fontSize={20} className={active ? style.visible : style.not_visible} />
                                {active ? "Forgot password?" : "Password strength"}
                            </div> 
                            </div>
                            <p className={!active ? style.customLine : style.No_customLine}>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
                            <button className={style.form_submit}>{active ? "Continue" : "Agree and Continue"}</button>
                  
            </div>
            
            </div>
            
        </div>
    </>
  )
}

export default Form
