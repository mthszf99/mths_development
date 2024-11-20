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
      title: 'Title 1',
      description: 'Description for card 1',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra'
    },
    {
      title: 'Title 2',
      description: 'Description for card 2',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra'
    },
    {
      title: 'Title 3',
      description: 'Description for card 3',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra'
    },
    {
      title: 'Title 4',
      description: 'Description for card 4',
      image: GithubBackground,
      link: 'https://github.com/mthszf99/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra'
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