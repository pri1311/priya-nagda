import React from 'react'
import '../styles/Projects.css'
import {crunch, dyceanddyne, earthling, khetibadi, foco} from '../projectsimports';
import flutter from '../../assets/skills/frameworks/flutter.svg'
import firebase from '../../assets/skills/others/firebase.svg'
import flask from '../../assets/skills/frameworks/flask.svg'
import nodejs from '../../assets/skills/frameworks/nodejs.svg'
import react from '../../assets/skills/frameworks/react.svg'
import javascript from '../../assets/skills/programminglanguages/javascript.svg'
import ProjectCard from '../utils/ProjectCard';

export default function Projects() {
    return (
        <div className='projectsWrapper'>
            <ProjectCard image = {dyceanddyne} projectTitle= "Dyce-and-Dyne" techstack ={[nodejs, javascript]} summary ="DyceandDyne is a modern-day food ordering website. The key concept that sets our app apart from other food ordering apps is giving discounts. Instead of the traditional PROMO Code technique, we introduce games and quizzes. A user can play games and earn rewards in the ratio of their respective score. The games are 8 Puzzle and connect4. Algorithms like minimax with alpha-beta pruning, A* are used for these games. Apart from this, we have implemented graph traversal techniques for routing delivery partners for the shortest and fastest route delivery. Vehicle Routing Problem,a generalized version of Traveling Salesman Problem is a very well-known problem that can be solved using various search algorithms like Genetic Algorithms."></ProjectCard>
            <ProjectCard image = {crunch} projectTitle ="Crunch - Group Chat App" techstack={[flask, javascript]} summary="If you’re looking for a simple chat app to meet new people around the world, our chat is for you! Here, nothing is impossible — find new friends, share images, have fun and of course discuss your working projects. With this chat you can meet thousands of people. The Chat app concept is designed with simplicity in mind. Anyone willing to get acquainted and communicate can install it for free and use without limits."></ProjectCard>
            <ProjectCard image = {earthling} projectTitle ="Earthling" techstack ={[flutter, firebase, flask]} summary="This idea is one little step taken by us with the motive to restore our environment which will have features like step tracking, planting and gifting a tree, calculation of PMI, and eco-friendly alternatives generator for plastic items. It will also consist of randomly generated tasks to do to help the environment become the serene place we envisage."></ProjectCard>
            <ProjectCard image = {khetibadi} projectTitle ="Khetibadi" techstack ={[flutter, flask]} summary="This idea is one little step taken by us with the motive to restore our environment which will have features like step tracking, planting and gifting a tree, calculation of PMI, and eco-friendly alternatives generator for plastic items. It will also consist of randomly generated tasks to do to help the environment become the serene place we envisage."></ProjectCard>
            <ProjectCard image ={foco} projectTitle="foco - Pomodoro Timer" summary ="foco is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo." techstack = {[react]}></ProjectCard>
        </div>
    )
}
