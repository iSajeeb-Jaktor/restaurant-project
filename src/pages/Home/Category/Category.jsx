import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"


const Category = () => {
    return (
        <div className='mb-28' >
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl  uppercase font-serif text-center text-white -mt-20' >Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl font-serif uppercase text-center text-white -mt-28' >Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl font-serif  uppercase text-center text-white -mt-28' >Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img c src={slide4} alt="" />
                    <h3 className='text-4xl  font-serif uppercase text-center text-white -mt-28' >desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl font-serif uppercase text-center text-white -mt-28' >Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;