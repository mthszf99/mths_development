import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { LiaWhatsapp } from "react-icons/lia";
import { VscGithubInverted } from "react-icons/vsc";
import { LuInstagram } from "react-icons/lu";

function Contatos() {
  return (
    <div>
      <h2 class="title_page">Contatos</h2>
      <p class="desc_page">Esses são nossos contatos. Fique a vontade para enviar sugestões, dúvidas ou orçamentos.</p>
        <ul class="social">
            <li class="item">
              <a href="https://www.instagram.com/mths.development/" target="_blank">
              <LuInstagram />
              </a>
            </li>
            <li class="item">
              <a href="https://github.com/mthszf99" target="_blank">
              <VscGithubInverted />
              </a>
            </li>
            <li class="item">
              <a href="https://www.linkedin.com/in/matheus-ferreira-3b26a823b/" target="_blank">
              <TiSocialLinkedin />
              </a>
            </li>
            <li class="item">
              <a href="https://api.whatsapp.com/send?phone=5531992778054" target="_blank">
              <LiaWhatsapp />
              </a>
            </li>
          </ul>
    </div>
  )
}

export default Contatos
