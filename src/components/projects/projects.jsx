import './projects.css';
import { motion } from 'motion/react';
import { useState } from 'react';

//assets
import React from '../../assets/misc/React.svg';
import HTML5 from '../../assets/misc/Html 5.svg';
import CSS3 from '../../assets/misc/CSS3.svg';
import JavaScript from '../../assets/misc/JavaScript.svg';
import Figma from '../../assets/misc/Figma.svg';
import Firebase from '../../assets/misc/Firebase.svg';
import ExternalLink from '../../assets/External Link.png';

function Deployed({

    backgroundColor = "#4DB61C",
    boxShadow = "0 1px 10px rgba(77, 219, 84, 0.8)"

}) {
    return (
        <div 
            style={{
                backgroundColor,
                height:"12px",
                width:"12px",
                borderRadius:"100px",
                marginLeft:"8px",
                boxShadow,
            }}
        />
    )
};

function WIP({

    backgroundColor = "#b61c1cff",
    boxShadow = "0 1px 10px rgba(219, 77, 77, 0.8)"

}) {
    return (
        <div 
            style={{
                backgroundColor,
                height:"12px",
                width:"12px",
                borderRadius:"100px",
                marginLeft:"8px",
                boxShadow,
            }}
        />
    )
};




function Projects () {

    const projectsData = [
        {
            id: 'project-one',
            title: 'Maison`D',
            description: 'A modern website developed to provide an online booking system for a local spa business. ',
            role: 'Full Stack Developer',
            status: 'Deployed / Live',
            indicator: <Deployed />,
            link: 'https://project-maison.vercel.app/',
            target: '_blank',
            tags: [React, HTML5, CSS3, JavaScript, Firebase],
        },

        {
            id: 'project-two',
            title: 'Coming Soon',
            description: 'Work In Progress Project',
            role:'Front-End Developer',
            status:'Work In Progress',
            indicator: <WIP />,
            link: '#project-two',
            target:'',
            tags: [],
        }
    ];

    return (
        <>
            <div className='projects-section' id="projects">
                <p className='projects-header'>Projects</p>
                {projectsData.map((project) => (
                    <a href={project.link} target={project.target} className='project-box' id={project.id} key={project.id}>
                        <img src={ExternalLink} className='link' alt="external link"/>
                        <div className={project.id}
                            style={{
                                height:"300px",
                                width:"100%",
                                borderRadius:"10px"
                            }}/>
                        <div className='project-container'>
                            <div className='project-info'>
                                <h1 style={{color:"white"}}>{project.title}</h1>
                                <p style={{color:"white", textAlign:"left"}}>{project.description}</p>
                            </div>
                            <div className='additional-info'>
                                <div className='role-status'>
                                    <p><strong>Role:</strong> {project.role}</p>
                                    <div style={{ backgroundColor:"rgba(255,255,255,0.8)", height:"30px", width:"1px"}}/>
                                    <p><strong>Status:</strong> {project.status} {project.indicator}</p>
                                </div>
                                <div className='project-tags'>
                                    {project.tags.map((index) => (
                                        <img src={index} style={{width:"50px"}} alt="Tool Icon"/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Projects;