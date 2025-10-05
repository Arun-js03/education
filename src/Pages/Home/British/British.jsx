import React from 'react';
import './British.css';
import british_img from '../../../assets/Group45539.png';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function British() {
  return (
    <div className='royal-bg'>
      <div className='container'>
        
       <div className='slid-british'>

        <Swiper
          spaceBetween={20} // spacing between slides
          centeredSlides={false}
          loop={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 5, // your target
              spaceBetween: 30,
            },
          }}
        >
           
          <SwiperSlide>
            <img src={british_img}></img>
          </SwiperSlide>
          <SwiperSlide>
              <img src={british_img}></img>
          </SwiperSlide>
          <SwiperSlide>
              <img src={british_img}></img>
          </SwiperSlide>
          <SwiperSlide>
              <img src={british_img}></img>
          </SwiperSlide>
          <SwiperSlide>
              <img src={british_img}></img>
          </SwiperSlide>
          <SwiperSlide>
              <img src={british_img}></img>
          </SwiperSlide>
         
        </Swiper>
         </div>
      </div>
    </div>
  );
}

export default British;
