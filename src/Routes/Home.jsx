import React from 'react';
import './HomeStyles.css';
import fonts from 'google-fonts';

fonts.add({
  'DotGothic16' : ['400', 'sans-serif']
})

function Home() {
  return (
    <div>
      <h2>Transformando Ideias <br/> Em Experiências <br/> Digitais Inovadoras</h2>
      <p>Combinando design intuitivo e tecnologia de ponta,<br/> criamos soluções digitais que entregam resultados.<br/> Cada projeto é uma oportunidade de transformar a<br/> visão do cliente em uma experiência única, funcional e<br/> impactante, elevando sua presença digital ao próximo<br/> nível.</p>
    </div>
  )
}

export default Home
