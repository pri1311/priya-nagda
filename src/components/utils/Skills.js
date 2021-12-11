import React from 'react'
import '../styles/Skills.css'

export default function Skills(props) {
    var logos = []
    for (var i in props.images) {
        logos.push(<img key={i} src={props.images[i]}></img>)
    }
    return (
        <div className='skills'>
            <h1 className='skillsTitle'>{props.title}: </h1>
            {logos}
        </div>
    )
}
