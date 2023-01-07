import React from 'react'
import './Portfolio.css'
import {Swiper ,SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/card.jpg"
import Ecommerce from "../../img/pillowNPKP.jpg";
import mybrand from "../../img/mybrand.jpg";
import card from "../../img/card.jpg";
import code from "../../img/code.jpg";
import { themeContext } from '../../Context';
import {useContext } from "react";



import 'swiper/css'
function Portfolio() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
      <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{
                 color:darkMode?'white':''
                }}>Recent Project</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper  spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
            <img   className="cardImg" src={Sidebar} alt=""  />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={mybrand} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={card} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={code} alt="" />
            </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default Portfolio