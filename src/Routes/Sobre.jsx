import React from 'react'
import IMG02  from '../images/IMG02.png'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';

function Sobre() {
  return (
    <div>
      <h2 className='sobre'>Sobre</h2>
      <p className='desc02'>Na MTHS Developer, o foco é oferecer soluções digitais<br/> personalizadas que alinham design<br/> moderno e funcionalidade robusta. Atuamos<br/> tanto no desenvolvimento front-end quanto no<br/> back-end, criando experiências digitais que são<br/> visualmente impactantes e tecnicamente<br/> eficientes.<br/>
      Nosso compromisso é com a excelência em cada<br/> detalhe. Acreditamos que cada cliente tem uma<br/> visão única, e é nossa missão transformar essa<br/> visão em realidade por meio de uma abordagem<br/> colaborativa e orientada por resultados. Desde a<br/> concepção até a entrega final, garantimos um<br/> serviço de alta qualidade, sempre visando a<br/> satisfação total de nossos clientes.<br/>
      Se você busca inovação e soluções digitais que<br/> fazem a diferença, a MTHS Developer está<br/> pronta para ser o parceiro ideal em sua jornada<br/> digital.</p>
      <img className='img02' src={IMG02 }/>
      <h2 className='portifolio'>Portifólio</h2>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Sobre
