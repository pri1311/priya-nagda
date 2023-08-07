import React from "react";
import Skills from "../utils/Skills";
import "../styles/About.css";
import Experience from "../utils/Experience";
import aboutme from "../../assets/images/aboutme2.png";
import {
    programmingLanguages,
    MachineLearning,
    FullStack,
} from "../skillsimports";

export default function About() {
    return (
        <div className="aboutWrapper">
            <div className="topWrapper">
                <div className="imageWrapper">
                    <img className="aboutImage" src={aboutme}></img>
                </div>

                <div className="expWrapper">
                    <div className="experience">
                        <h1>Hello! I am</h1>
                        <span className="name">Priya Nagda,</span>
                        <p className="aboutMe">
                            a 2023 Computer Engineering graduate from VJTI,
                            Mumbai.
                            <br />
                            <br />I daily use: <span>.py</span>, <span>.cpp</span>, <span>.js</span>, <span>.html</span>, <span>.css</span>, <span>.java</span>. I have
                            numerous Deep Learning and Full Stack Development
                            projects under my hood, details of which you can
                            find here -{" "}
                            <a href="https://github.com/pri1311?tab=repositories">
                                GitHub
                            </a>
                            <br />
                            <br />I also have fair amount of experience with
                            open-source projects contributing to repositories
                            such as CuPy, import-js, etc.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottomWrapper">
                <div className="expWrapper">
                    <h1 className="heading">Experience</h1>
                    <Experience
                        company="D. E. Shaw & Co."
                        years="May - July 2022"
                        title="SDE Intern"
                        summary={[
                            "Migrated from InfluxDB to internal Time Series database, developed and configured a Flask API for Grafana to visualize the data.",
                            "Further worked on generalizing the API to load and visualise any database give a config file.",
                            "Added caching for time-series data using Redis and Java.",
                        ]}
                    ></Experience>
                    <Experience
                        company="MLH Fellowship"
                        years="Jan - April 2022"
                        title="Open Source Contributor"
                        summary={[
                            "Worked with GraphQL x GitHub API for a closed sourced project.",
                            "Added bug fixes and additional options to rules in eslint-plugin-import package.",
                            "Tech stack: JavaScript, NodeJs, GraphQL",
                        ]}
                    ></Experience>
                    <Experience
                        company="iMumz- Pruoo Healthcare Technologies Pvt. Ltd. - SDE Intern"
                        years="May - July 2021"
                        title="SDE Intern"
                        summary={[
                            "Implemented Stories feature for the app, in a team.",
                            "Bug fixes and code redesign to help make app more responsive.",
                            "Helped improve caching mechanism and list view to make loading faster.",
                            "Tech stack: Flutter/Dart, Firebase",
                        ]}
                    ></Experience>
                </div>
                <div className="skillsWrapper">
                    <h1 className="heading">Skills</h1>
                    <Skills
                        title="Programming Languages"
                        images={programmingLanguages}
                    ></Skills>
                    <Skills
                        title="Machine Learning"
                        images={MachineLearning}
                    ></Skills>
                    <Skills
                        title="Full Stack Devlopment"
                        images={FullStack}
                    ></Skills>
                </div>
            </div>
        </div>
    );
}
