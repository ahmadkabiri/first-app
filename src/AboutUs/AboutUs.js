import React from 'react'
import "./AboutUs.css"
import { TbChecks } from "react-icons/tb";


export default function AboutUs() {
  return (
    <div className='about-container'>
        <div className='content'>
            <h1>درباره ما</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</p>
        </div>
        <div className='about'>
            <div className='about-right'>
                <p>ما جاده ای هستیم که مسیر رویاهایتان را هموار میکنیم. گروه ما متشکل از تیمی قدرتمند است که برای خلق ایده های شما تلاش میکنند.</p>
                <ul>
                    <li><span><TbChecks></TbChecks></span> توانا در اجرای هرگونه ایده</li>
                    <li><span><TbChecks></TbChecks></span> خلاقیت را سرلوحه خود قرار داده ایم</li>
                    <li><span><TbChecks></TbChecks></span> در محصولات ما امنیت حرف اول را میزند</li>
                </ul>
            </div>
            <div className='about-left'>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                <a href="#">بیشتر بدانید</a>
            </div>

        </div>
    {/* <section id="about" class="about">
      <div class="about-container">

        <div class="section-title">
          <h2>درباره ما</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است</p>
        </div>

        <div class="content">
          <div class="content1">
            <p>
              ما جاده ای هستیم که مسیر رویاهایتان را هموار میکنیم.
               گروه ما متشکل از تیمی قدرتمند است که برای خلق ایده های شما تلاش میکنند.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> توانا در اجرای هرگونه ایده</li>
              <li><i class="ri-check-double-line"></i> خلاقیت را سرلوحه خود قرار داده ایم</li>
              <li><i class="ri-check-double-line"></i> در محصولات ما امنیت حرف اول را میزند</li>
            </ul>
          </div>
          <div class="content2">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
               و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
            </p>
            <a href="#" class="btn-learn-more">بیشتر بدانید</a>
          </div>
        </div>

      </div>
    </section> */}
    </div>
  )
}
