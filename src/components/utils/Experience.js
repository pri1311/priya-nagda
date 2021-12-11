import React from 'react'
import './Experience.css'

export default function Experience(props) {
    return (
        <div className='experienceWrapper'>
            <h1 className='companyTitle'>{props.company}</h1>
            <h2 className='years'>{props.years}</h2>
            <h2 className='summary'>{props.summary}</h2>
        </div>
    )
}
