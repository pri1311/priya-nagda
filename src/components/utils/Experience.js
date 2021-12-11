import React from 'react'
import '../styles/Experience.css'

export default function Experience(props) {
    var summary = []
    for (var i in props.summary) {
        summary.push(<li key={i}>{props.summary[i]}</li>)
    }
    return (
        <div className='experienceWrapper'>
            <h1 className='companyTitle'>{props.company}</h1>
            <h2 className='years'>{props.years}</h2>
            <h2 className='summary'>{summary}</h2>
        </div>
    )
}
