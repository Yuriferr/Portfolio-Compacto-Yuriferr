import React from "react";
import './style.scss'

import { DiHtml5, DiCss3, DiJava, DiPython, DiReact} from 'react-icons/di';
import { SiJavascript, SiTypescript, SiNodedotjs, SiFigma, SiMicrosoftoffice, SiAdobe } from 'react-icons/si'
import { BsFiletypeSql, BsGithub } from 'react-icons/bs'

export default function Habilidades({ativacao}){
    return(
        <div className="habilidades" style={ativacao ? {display: 'block'} : {display: 'none'}}>
            <div className="margem"/>
            <h1>Linguagens</h1>
            <div className="borda"/>
            <span>
                <DiHtml5 color="orangered"/>
                <p>Html</p>
            </span>
            <span>
                <DiCss3 color="dodgerblue"/>
                <p>Css</p>
            </span>
            <span>
                <SiJavascript color="yellow"/>
                <p>Javascript</p>
            </span>
            <span>
                <SiTypescript color="deepskyblue"/>
                <p>Typescript</p>
            </span>
            <span>
                <DiJava color="orange"/>
                <p>Java</p>
            </span>
            <span>
                <DiPython color="gold"/>
                <p>Python</p>
            </span>
            <span>
                <BsFiletypeSql color="orange"/>
                <p>SQL</p>
            </span>

            <h1>Frameworks</h1>
            <div className="borda"/>
            <span>
                <DiReact color="cyan"/>
                <p>React</p>
            </span>
            <span>
                <DiReact color="cyan"/>
                <p>React-Native</p>
            </span>
            <span>
                <SiNodedotjs color="lawngreen"/>
                <p>Node</p>
            </span>

            <h1>Outros</h1>
            <div className="borda"/>
            <span>
                <BsGithub color="#171515"/>
                <p>GitHub</p>
            </span>
            <span>
                <SiFigma color="purple"/>
                <p>Figma</p>
            </span>
            <span>
                <SiMicrosoftoffice color="orangered"/>
                <p>Microsoft Office</p>
            </span>
            <span>
                <SiAdobe color="red"/>
                <p>Adobe</p>
            </span>
        </div>
    )
}