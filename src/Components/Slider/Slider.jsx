import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Cards from '../Cards/Cards';
import GithubBackground from '../../images/GithubBackground.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

export default function Slider () {
  const cardsData = [
    {
      title: 'Projeto D Alessandra',
      description: 'Projeto desenvolvido em grupo na faculdade para um cliente real, com o objetivo de aprimorar a gestão da loja de roupas D Alessandra, visando agilizar processos de estoque, vendas e finanças. Com back-end em Java e front-end desenvolvido em React.',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra'
    },
    {
      title: 'Projeto Carro na Mão',
      description: 'Desenvolvido em back-end C# e front-end em React e React-Native mobile, o carro na mão tem como objetivo facilitar e organizar processos diários de uma locadora de veículos, tanto para o cliente, quanto para o locador, fazendo assim processos burocráticos, se tornarem mais ágeis e de melhor experiência para ambas as partes.',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2023-2-e4-proj-infra-t4-carro-na-mao'
    },
    {
      title: 'Projeto Cash-Grab',
      description: 'O projeto que está em desenvolvimento trata-se de um gestor financiero pessoal. Tendo como objetivo auxiliar as pessoas em relação a sua saude financeira e dar dicas de possiveis caminhos para lhe ajudar',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2022-1-e1-proj-web-t4-cash-grab-aplicacao-financeira'
    },
    {
      title: 'Projeto My Finances',
      description: 'Desenvolvido em React-Native, o My Finances têm como objetivo ser uma plataforma de gestão financeira, que possa permitir aos jovens analisar e gerenciar de uma forma simplificada suas finanças, e possa permiti-las realizar tomadas de decisões.',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2023-1-e3-proj-mov-t6-grupo-5-my-finace'
    },
    {
      title: 'Title 5',
      description: 'Description for card 5',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra'
    },
    {
      title: 'Title 6',
      description: 'Description for card 6',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra'
    },
  ]
    return (
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{clickable: true}}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        >
          {cardsData.map((card, index) => (<SwiperSlide key={index}>
            <Cards
            title= {card.title}
            description= {card.description}
            image= {card.image}
            link= {card.link}
            />
          </SwiperSlide>
          ))}
      </Swiper>
    )
}