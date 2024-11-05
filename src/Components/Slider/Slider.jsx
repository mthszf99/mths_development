import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Cards from '../Cards/Cards';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

export default function Slider () {
    return (
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{clickable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
        <SwiperSlide><Cards/></SwiperSlide>
      </Swiper>
    )
}