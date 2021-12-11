import React from 'react'
import '../styles/Skills.css'

export default function Skills(props) {
    var logos = []
    for (var i in props.images) {
        var url = "%PUBLIC_URL%/assets/skills/" + props.base + "/" + props.images[i]
        logos.push(<img key={i} src={url}></img>)
    }
    return (
        <div className='skills'>
            <h1 className='skillsTitle'>{props.title}: </h1>
            {logos}
        </div>
    )
}
