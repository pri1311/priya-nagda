import React from 'react'
import Skills from '../utils/Skills'
import '../styles/About.css'
import Experience from '../utils/Experience'
import aboutme from '../../assets/images/aboutme2.png'
import {programmingLanguages, databases, frameworks, others, tools} from '../skillsimports'


export default function About() {
    return (
        <div className='aboutWrapper'>
            <div className='topWrapper'>
                <div className='imageWrapper'>
                    <img className='aboutImage' src={aboutme}></img>
                </div>
            
                <div className='expWrapper'>
                    <div className='experience'>
                    <h1 className='heading'>About Me</h1>
                        <p className='aboutMe'>I am a third-year Computer Engineering student at VJTI, Mumbai. <br /><br />I am currently specializing in the web development arena and exploring the world of Machine Learning. For the past two years, I have been developing projects in Flutter, Flask, Vanilla JS, NodeJs, and ReactJS. To get professional experience in the field, I took up an Internship at Imumz as a Flutter developer intern in the Summer of 2021. No two days were the same for me; my tasks involved analyzing algorithms, altering code, fixing bugs, brainstorming ideas, or integrating new systems. <br /><br />Something that I love about programming is the opportunity to work with people from a wide range of disciplines. The software development lifecycle involves working with so many different people and departments. As a people person and someone who loves to build new relationships, it’s great to be able to come together with other professionals striving towards the same goal.<br /><br />If you want to talk about programming, coding, software engineering, or anything else, drop me a line. I am currently available for employment and am always eager to hear from peer programmers.</p>
                    </div>
                </div>
                </div>
            <div className='bottomWrapper'>

            <div className='expWrapper'>
                    <h1 className='heading'>Experience</h1>
                    <Experience company="iMumz- Pruoo Healthcare Technologies Pvt. Ltd." years="May - July 2021" summary={["Redesigning the UI of profile screen, Feed, etc. in Flutter.", " Implemented Stories feature for the app, in a team.", "Bug fixes and code redesign to help make app more responsive."]}></Experience>
                    <Experience company="Your Super Idea" years="May 2021" summary={["Integrated firebase authentication.", "Built UI for app which uses location to find nearby vendors to deliver vegetables/fruits.", "Integrated google maps to display markers on map.", "Brainstorming Database model required for the app, considering both admin app and customer app usage."]}></Experience>
                </div>
                <div className='skillsWrapper'>
                    <h1 className='heading'>Skills</h1>
                    <Skills title ="Programming Languages" images = {programmingLanguages}></Skills>
                    <Skills title ="Frameworks" images = {frameworks}></Skills>
                    <Skills title ="Databases" images = {databases}></Skills>
                    <Skills title ="Others" images = {others}></Skills>
                    <Skills title ="Tools and Platforms" images = {tools}></Skills>
                    </div>

            </div>
        </div>
    )
}
