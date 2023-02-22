import "./Header.css"
import React from 'react'


export default function Header() {
  return (
    <div className="header">
        <header className="header-top">
            <h1>
                <a href="#">وان پیج</a>
            </h1>
            <nav>
                <ul className="header-topics">
                    <li>
                        <a href="#">خانه</a>
                    </li>
                    <li>
                        <a href="#">درباره ما</a>
                    </li>
                    <li>
                        <a href="#">برگه‌های داخلی</a>
                        </li>
                    <li>
                        <a href="#">خدمات</a>
                    </li>
                    <li>
                        <a href="#">نمونه کارها</a>
                    </li>
                    <li>
                        <a href="#">تیم ما</a>
                    </li>
                    <li>
                        <a href="#">قیمت</a>
                    </li>
                    <li>
                        <a href="#">تماس با ما</a>
                    </li>
                    <li className="start">
                        <a href="">شروع</a>
                    </li>

                </ul>
            </nav>
        </header>
    </div>
  )
}
