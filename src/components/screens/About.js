import React from 'react'
import Skills from '../others/Skills'
import '../styles/About.css'
import Experience from '../utils/Experience'

export default function About() {
    return (
        <div className='aboutWrapper'>
            <div className='topWrapper'>
                <div className='expWrapper'>
                    <div className='experience'>
                        <p className='aboutMe'>I am a third-year Computer Engineering student at Veermata Jijabai Technological Institute, Mumbai. <br /><br />

                            I am currently specializing in the web development arena. For the past two years, I have been developing projects in Flutter, Flask, HTML, CSS, and JS. To get professional experience in the field, I took up an Internship at YourSuperIdea and Imumz as a Flutter developer intern in the Summer of 2021. No two days were the same for me; my tasks involved analyzing algorithms, altering code, fixing bugs, brainstorming ideas, or integrating new systems. <br /><br />

                            Something that I love about programming is the opportunity to work with people from a wide range of disciplines. The software development lifecycle involves working with so many different people and departments. As a people person and someone who loves to build new relationships, it’s great to be able to come together with other professionals striving towards the same goal.<br /><br />

                            If you want to talk about programming, coding, software engineering, or anything else, drop me a line. I am currently available for employment and am always eager to hear from LinkedIn users.</p>
                        <h1 className='heading'>About Me</h1>
                    </div>
                </div>
                <div className='imageWrapper'>
                    <img className='aboutImage' src='/assets/images/undraw_voice_interface_eckp.svg'></img>
                </div>
            </div>
            <div className='bottomWrapper'>
                <div className='skillsWrapper'>
                    <h1 className='heading'>Skills</h1>
                    <Skills title="Programming languages" base="programminglanguages" images={['c.svg', 'c++.svg', 'dart.svg', 'javascript.svg', 'kotlin.svg', 'php.png', 'python.svg']}></Skills>
                    <Skills title="Databases" base="databases" images={['mongodb.svg', 'mysql.svg']}></Skills>
                    <Skills title="Frameworks" base="frameworks" images={['android.svg', 'boostrap.svg', 'flask.svg', 'nodejs.svg', 'react.svg']}></Skills>
                    <Skills title="Others" base="others" images={['css.svg', 'firebase.svg', 'git.svg', 'html.svg', 'json.svg']}></Skills>
                    <Skills title="Tools/Platforms" base="tools" images={['android-studio.svg', 'github.svg', 'intellij.svg', 'vscode.svg']}></Skills>
                </div>
                <div className='expWrapper'>
                    <h1 className='heading'>Experience</h1>
                    <Experience company="iMumz- Pruoo Healthcare Technologies Pvt. Ltd." years="May - June 2021" summary="Redesigning the UI of profile screen, Feed, etc. in Flutter. Implemented Stories feature for the app, in a team. Bug fixes and code redesign to help make app more responsive."></Experience>
                    <Experience company="Your Super Idea" years="May 2021" summary="Integrated firebase authentication. Built UI for app which uses location to find nearby vendors to deliver vegetables/fruits. Integrated google maps to display markers on map. Brainstorming Databasemodelrequired forthe app, considering both admin app and customer app usage."></Experience>
                </div>
            </div>
        </div>
    )
}
