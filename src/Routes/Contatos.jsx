import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { LiaWhatsapp } from "react-icons/lia";
import { VscGithubInverted } from "react-icons/vsc";
import { LuInstagram } from "react-icons/lu";
import IMG03 from '../images/IMG03.png'

function Contatos() {
  return (
    <div>
      <h2 class="title_page">Contatos</h2>
      <p class="desc_page">Contate-nos para dúvidas, sugestões ou orçamentos!</p>
        <ul class="social">
        <li className="item">
              <a href="https://api.whatsapp.com/send?phone=5531992778054" target="_blank">
              <LiaWhatsapp className='icon' />
              </a>
            </li>
            <li className="item">
              <a href="https://github.com/mthszf99" target="_blank">
              <VscGithubInverted className='icon' />
              </a>
            </li>
            <li className="item">
              <a href="https://www.instagram.com/mths.development/" target="_blank">
              <LuInstagram className='icon' />
              </a>
            </li>
            <li className="item">
              <a href="https://www.linkedin.com/in/matheus-ferreira-3b26a823b/" target="_blank">
              <TiSocialLinkedin className='icon' />
              </a>
            </li>
          </ul>
          <img className='img03' src={IMG03 }/>
    </div>
  )
}

export default Contatos
