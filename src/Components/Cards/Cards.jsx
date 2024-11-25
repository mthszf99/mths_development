import { CardPort, ImgCard, TitleCard, DescriptionCard, CardPage } from './Card.js';
import fonts from 'google-fonts';


fonts.add({
    'Montserrat' : ['400', 'regular']
  })
  
  fonts.add({
    'DotGothic16' : ['400', 'sans-serif']
  })

  export default function Cards({ title, description, image, link }) {
    return (
      <CardPort>
        <ImgCard src={image} alt={title} />
        <TitleCard>{title}</TitleCard>
        <DescriptionCard>{description}</DescriptionCard>
        <CardPage href={link} target="_blank" rel="noopener noreferrer">Learn More</CardPage>
      </CardPort>
    );
  }