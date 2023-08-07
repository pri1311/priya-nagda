import React from 'react'
import '../styles/Projects.css'
import {crunch, dyceanddyne, earthling, khetibadi, foco, chaptersqueue, mrc, fyp} from '../projectsimports';
import flutter from '../../assets/skills/frameworks/flutter.svg'
import firebase from '../../assets/skills/others/firebase.svg'
import flask from '../../assets/skills/frameworks/flask.svg'
import nodejs from '../../assets/skills/frameworks/nodejs.svg'
import react from '../../assets/skills/frameworks/react.svg'
import javascript from '../../assets/skills/programminglanguages/javascript.svg'
import python from '../../assets/skills/programminglanguages/python.svg'
import ProjectCard from '../utils/ProjectCard';
import redux from '../../assets/skills/frameworks/redux.svg'
import pytorch from '../../assets/skills/machinelearning/pytorch.png'

export default function Projects() {
    return (
        <div className='pageWrapper'>
            <h1 className='projectsPageTitle'>Some things I've built</h1>
                    <div className='projectsWrapper'>
            <ProjectCard image = {chaptersqueue} projectTitle= "ChaptersQueue" techstack ={[react, firebase, redux]} deployed ="https://chapters-queue.vercel.app/register" github ="ChaptersQueue" summary ="Bring any YouTube video which has chapters and convert it into a course, track your progress right inside of our app."></ProjectCard>
            <ProjectCard image = {crunch} projectTitle ="Crunch - Group Chat App" techstack={[flask, javascript]} github ="crunch" summary="If you’re looking for a simple chat app to meet new people around the world, our chat is for you! Here, nothing is impossible — find new friends, share images, have fun and of course discuss your working projects. With this chat you can meet thousands of people. The Chat app concept is designed with simplicity in mind. Anyone willing to get acquainted and communicate can install it for free and use without limits."></ProjectCard>
            <ProjectCard image = {fyp} projectTitle= "Molecular Property Prediction" techstack ={[python, pytorch]} github ="" summary ="With this research project we implemented various techniques for enhancing toxicity prediction of molecules in scenarios where there exists scarcity of labeled data. We propose three different architectural modifications and conclude that each of them give better results than the baseline in any given test conditions. However GIN, shows the most promising results over training of 150 epochs."></ProjectCard>
            <ProjectCard image = {mrc} projectTitle= "Machine Reading Comprehension" techstack ={[python, flask, react]} github ="" summary ="The goal of this project is to create a question answering model that works well on both the difficult no-answer questions and the traditional answerable contextual questions from SQuAD 2.0. In this work, I implemented the bidirectional attention flow (BiDAF) paper from scratch and achieved an F1 score of 68.57 after only 5 epochs."></ProjectCard>
            <ProjectCard image = {dyceanddyne} projectTitle= "Dyce-and-Dyne" techstack ={[nodejs, javascript]} deployed ="https://dyce-dyne.herokuapp.com/" github ="Dyce-and-Dyne" summary ="Dyce&Dyne is a modern-day food ordering website. Instead of the traditional PROMO Code technique, we introduce games and quizzes. A user can play games and earn rewards in the ratio of their respective score. The games are 8 Puzzle and connect4. Algorithms like minimax, A* are used for these games. Apart from this, we have implemented genetic algorithms to solve TSP for routing delivery partners for the shortest and fastest route delivery."></ProjectCard>
            <ProjectCard image = {earthling} projectTitle ="Earthling" techstack ={[flutter, firebase, flask]} github ="SyntaxError-Hackbash" summary="This idea is one little step taken by us with the motive to restore our environment which will have features like step tracking, planting and gifting a tree, calculation of PMI, and eco-friendly alternatives generator for plastic items. It will also consist of randomly generated tasks to do to help the environment become the serene place we envisage."></ProjectCard>
            <ProjectCard image = {khetibadi} projectTitle ="Khetibadi" techstack ={[flutter, flask]} github="khetibadi" summary="An app which provides curated content that can help a farmer at all the stages of the farming process."></ProjectCard>
            <ProjectCard image ={foco} projectTitle="foco - Pomodoro Timer" github="foco" summary ="foco is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo." techstack = {[react]}></ProjectCard>
        </div>
    
        </div>
)
}
