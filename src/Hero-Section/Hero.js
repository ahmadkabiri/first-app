
import "./Hero.css"
import React from 'react'
import Box from "../Boxes/Box"
import { HiOutlineFingerPrint } from "react-icons/hi";
import { RiStackLine } from "react-icons/ri";
import { RiPaletteLine } from "react-icons/ri";
import { BiCommand } from "react-icons/bi";


export default function Hero() {
    const allBoxes = [
        {icon:<RiStackLine></RiStackLine>, title:"دیتابیس ایمن" , description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."},
        {icon:<HiOutlineFingerPrint></HiOutlineFingerPrint>, title:"کاملا ایمن" , description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."},
        {icon:<RiPaletteLine></RiPaletteLine>, title:"رنگ بندی متنوع" , description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."},
        {icon:<BiCommand></BiCommand>, title:"کدنویسی مرتب" , description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."},


    ]
  return (
    <div className="hero-container">
        <div className="hero-topics">
        <h1> ‌وبسایت شرکتی خودرا راه‌اندازی کنید!</h1>
        <p>تیم ما آرزوهای شمارا برآورده می‌کند</p>
        <a href="#"> شروع کنید</a>
        <div className="boxes">
            <Box {...allBoxes[0]} ></Box>
            <Box {...allBoxes[3]} ></Box>
            <Box {...allBoxes[1]} ></Box>
            <Box {...allBoxes[2]} ></Box>
        </div>
        </div>
    </div>
  )
}
