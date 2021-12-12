import React from 'react'
import '../styles/ProjectCard.css'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProjectCard(props) {
    var techstack =[<p>Tech Stack: </p>]
    for (var i in props.techstack) {
        techstack.push(<img src={props.techstack[i]} key={i} className='techstackIcon'></img>)
    }
    return (
        <div className='projectCardWrapper'>
            <img className='projectImage' src={props.image}></img>
            <div className='techStackWrapper'>
                <h1>{props.projectTitle}</h1>
                <a className='gitLink' href={'https://github.com/pri1311/' + props.github}><FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
            </div>
            <div className='techIconWrapper'>
            {techstack}
            </div>
            <p>{props.summary}</p>
        </div>
    )
}
