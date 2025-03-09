
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';
const Treanding = () => {
  return (
    <div className=' py-10 max-w-7xl mx-auto flex flex-col justify-center'>
      <p className='text-center font-bold text-4xl pb-10'>Trending Movies On <span className='text-red-950 italic'>NETFLIX</span></p>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
     
      pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
      className="mySwiper  lg:w-4xl lg:h-[580px] border-2 text-center"
      >
        {
          ['inception', 'baymax', 'openhimer', 'parasite', 'spider'].map((movie, index) => (
            <SwiperSlide key={index} >
              <img src={`/images/${movie}.jpg`} className='lg:w-full lg:h-full object-cover'>
              </img>
            </SwiperSlide>
          ))
        }

    </Swiper>
  </div>
  )
}

export default Treanding
