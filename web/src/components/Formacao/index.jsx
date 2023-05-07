import React from "react"
import './style.scss'

export default function Formacao({ativacao}){
    return(
        <div className="formacao" style={ativacao ? {display: 'block'} : {display: 'none'}}>
            <div className="margem"/>
            <h1>Cotemig - Tecnico</h1>
            <p className="tempo">02/2020 - 11/2022</p>
            <div className="borda"/>
            <p className="resumo">Tive a oportunidade por meio do ensino médio técnico de estudar e praticar linguagens e frameworks da programação, como: Html, Css, Javascript, React, Node, Swift, Kotlin, PHP, SQL, C#.</p>

            <h1>Fiap - Graduacao</h1>
            <p className="tempo">02/2024 - 12/2024</p>
            <div className="borda"/>
            <p className="resumo">Estou aprofundando mais na área da programação com o curso de ADS, com a oportunidade de desenvolver habilidades como: Python, Java, Design de interface, Figma, SQL, React, React-Native, Swift.</p>
        </div>
    )
}