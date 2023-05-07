import React, {useState} from 'react'
import './App.scss'

import Perfil from './components/Perfil'
import Formacao from './components/Formacao'
import Habilidades from './components/Habilidades'

function App() {
  const [perfil, setPerfil] = useState(true)
  const [formacao, setFormacao] = useState(false)
  const [habilidades, setHabilidades] = useState(false)
  const [certificados, setCertificados] = useState(false)

  function getPerfil(){
    setPerfil(true)
    setFormacao(false)
    setHabilidades(false)
    setCertificados(false)
  }
  function getFormacao(){
    setFormacao(true)
    setPerfil(false)
    setHabilidades(false)
    setCertificados(false)
  }
  function getHabilidades(){
    setHabilidades(true)
    setPerfil(false)
    setFormacao(false)
    setCertificados(false)
  }
  function getCertificados(){
    setCertificados(true)
    setPerfil(false)
    setFormacao(false)
    setHabilidades(false)
  }

  return (
    <div className='App'>
      <div className='container'>
        <Perfil ativacao={perfil}/>
        <Formacao ativacao={formacao}/>
        <Habilidades ativacao={habilidades}/>

        <footer>
          <button onClick={getPerfil}>Perfil</button>
          <button onClick={getFormacao}>Formacao</button>
          <button onClick={getHabilidades}>Habilidades</button>
          <button onClick={getCertificados}>Certificados</button>
        </footer>
      </div>
    </div>
  )
}

export default App
