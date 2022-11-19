import React from 'react'
import home from '../../assets/home.png'
import home_mobile from '../../assets/home_mobile.jpg'
import '../styles/Home.css'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default function Home() {
    var image = home;
    if (window.innerWidth <= 440) {
        image = home_mobile;
    }
    return (
        <React.Fragment>
            <About />
            <Projects />
            <Contact />
        </React.Fragment>
    )
}
