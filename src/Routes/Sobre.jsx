import React from 'react'
import {IMG02} from '../images/IMG01.png'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>
      <img src={IMG02 }/>
      <Swiper>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Sobre
