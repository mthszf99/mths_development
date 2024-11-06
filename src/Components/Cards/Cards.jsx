import './Card.css';
import fonts from 'google-fonts';


fonts.add({
    'Montserrat' : ['400', 'regular']
  })
  
  fonts.add({
    'DotGothic16' : ['400', 'sans-serif']
  })

export default function Cards ({ title, description, image, link }){
    return (
        <div className="card-port">
        <img className="img-card" src={ image } alt={ title }/>
        <h2 className='title-card'>{ title }</h2>
        <p className='description-card'>{ description }</p>
        <a className='card-page' href={ link }>Learn More</a>
        </div>
    )
}