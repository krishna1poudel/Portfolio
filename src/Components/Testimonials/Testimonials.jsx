import React from 'react'
import './Testimonials.css'
import  {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

import krishna1 from '../../img/krishna.jpg'
import krishna2 from '../../img/krishna2.png'
function Testimonials() {
   
    const clients=[
         {
          img: krishna2,
          review :
          "he is a very talented in Ui design and i work with him for 4,5 year during his bachelor i love  him literally and his enthusiam toward is work is fabulus. one day i said to him we are take holiday from our project for 2 days  he said okey then we are going holiday party in  india but also he doing his jobs in travelling time."
            } ,

         {
           img: krishna1,
           review : 
           "he is a very talented in Ui design and i work with  him for 4,5 year during his bachelor i love him literally and his enthusiam toward work is fabulus. one day i said to him  we are take holiday from our project for 2 days  he said okey then we are going holiday party in  india but also he doing his jobs in travelling time.",
                },

    ]

  
  return (
       <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
          <span>Clients always get</span>
          <span>Exceptional work</span>
          <span>from me .|.</span>
          <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
          <div className="blur t-blur2" style={{background:"var(--purple)"}}></div>
        </div>
         {/* slider */}
         <Swiper 
           modules={[Pagination]}
           slidesPerView={1}
           pagination={{clickable:true}}
           >
            {clients.map((clients ,index)=>{
              return(
                <SwiperSlide key={index}>
                  <div className="testimonial">
                  <img src={clients.img} alt="" />
                  <span>{clients.review}</span>
                  </div>
                </SwiperSlide>
              )
            })
            }
         </Swiper>

       </div>
  )
}

export default Testimonials