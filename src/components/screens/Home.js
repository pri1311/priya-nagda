import React from 'react'
import home from '../../assets/home.png'
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='homeWrapper'>
            <h1>Hello! I am</h1>
            <span className='name'>Priya Nagda</span>
            <img className='homeImage' src={home}></img>
            <p>I am a third-year Computer Engineering student at <span className='bits'>VJTI, Mumbai</span>. I have professional experience in <span className='bits'>App Development</span> using Flutter. Currently, I am exploring the world of <span className='bits'>Machine Learning</span> and brushing up on my <span className='bits'>Web Developement</span> skills.</p>
        </div>
    )
}
