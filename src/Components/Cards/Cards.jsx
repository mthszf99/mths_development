import GithubBackground from '../../images/GithubBackground.jpg';
import './Card.css';
import fonts from 'google-fonts';


fonts.add({
    'Montserrat' : ['400', 'regular']
  })
  
  fonts.add({
    'DotGothic16' : ['400', 'sans-serif']
  })

export default function Cards (){
    return (
        <div className="card-port">
        <img href='http://localhost:5173/Home' className="img-card" src={GithubBackground }/>
        <h2 className='title-card'>Title</h2>
        <p className='description-card'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <a className='card-page' href='http://localhost:5173/Home'>Learn More</a>
        </div>
    )
}