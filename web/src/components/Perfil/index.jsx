import React from "react"
import './style.scss'

import FotoPerfil from '../../assets/yuriferr.png'

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'

export default function Perfil({ativacao}){
    return(
        <div className='perfil' style={ativacao ? {display: 'block'} : {display: 'none'}}>
          <div className='titulo'>
            <div>
              <p>Yuri Fernandes</p>
              <p>Desenvolvedor</p>
            </div>
            <img src={FotoPerfil}/>
          </div>

          <div className='descricao'>
            <div>
              <h3>Sobre</h3>
              <div className='borda'/>
              <p className="sobre">Eu sou um desenvolvedor full stack com 3 anos de experiência e tenho um compromisso constante com a qualidade máxima em todos os meus projetos. Sempre busco aprimorar minhas habilidades para oferecer soluções eficientes e eficazes aos meus clientes.</p>
            </div>

            <div>
              <h3>Linguas</h3>
              <div className='borda'/>
              <span>
                <p>Portugues:</p>
                <p>Nativo</p>
              </span>
              <span>
                <p>Ingles:</p>
                <p>Intermediario</p>
              </span>
              <span>
                <p>Espanhol:</p>
                <p>Intermediario</p>
              </span>
            </div>

            <div>
              <h3>Contatos</h3>
              <div className='borda'/>
              <div>
                <a target='_blank' href='https://www.linkedin.com/in/yuriferr/' className='linkedin'><BsLinkedin/>Linkedin</a>
                <a target='_blank' href='https://github.com/Yuriferr' className='github'><BsGithub/>GitHub</a>
                <a target='_blank' href='mailto:yurifernandespreto@gmail.com' className='email'><MdEmail/>Email</a>
              </div>
            </div>
          </div>
        </div>
    )
}