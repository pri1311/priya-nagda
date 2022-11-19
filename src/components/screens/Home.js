import React from 'react'
import '../styles/Home.css'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default function Home() {
    return (
        <React.Fragment>
            <About />
            <Projects />
            <Contact />
        </React.Fragment>
    )
}
