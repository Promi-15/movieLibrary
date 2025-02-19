// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';
const Treanding = () => {
  return (
    <div className=' py-10'>
      <p className='text-center font-bold text-4xl pb-10'>Trending Movies On <span className='text-red-950 italic'>NETFLIX</span></p>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
      className="mySwiper lg:h-[500px] lg:w-[900px] "
    >
      <SwiperSlide>
        <img src="https://i.ibb.co.com/XfQwmP0h/8881287.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/Z6MPDYgz/1805487.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/4whgQjJ5/3205120.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/chnRg2qM/2776321.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/G4CsXfyq/3162888.jpg" />
      </SwiperSlide>
      
    </Swiper>
  </div>
  )
}

export default Treanding
