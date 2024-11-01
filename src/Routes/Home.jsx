import React from 'react';
import './PagStyles.css';
import fonts from 'google-fonts';
import IMG01 from '../images/IMG01.png'

fonts.add({
  'Montserrat' : ['400', 'regular']
})

fonts.add({
  'DotGothic16' : ['400', 'sans-serif']
})

function Home() {
  return (
    <div>
      <h2 className='home'>Transformando Ideias <br/> Em Experiências <br/> Digitais Inovadoras</h2>
      <p className='desc01'>Combinando design intuitivo e tecnologia de ponta,<br/> criamos soluções digitais que entregam resultados.<br/> Cada projeto é uma oportunidade de transformar a<br/> visão do cliente em uma experiência única, funcional e<br/> impactante, elevando sua presença digital ao próximo<br/> nível.</p>
      <img className='img01' src={IMG01 }/>
    </div>
  )
}

export default Home
