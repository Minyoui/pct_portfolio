import './projects.css';
import { motion } from 'motion/react';

//assets
import React from '../../assets/misc/React.svg';
import HTML5 from '../../assets/misc/Html 5.svg';
import CSS3 from '../../assets/misc/CSS3.svg';
import JavaScript from '../../assets/misc/JavaScript.svg';
import Figma from '../../assets/misc/Figma.svg';

function Projects () {
    const projectsData = [
        {
            id: 'project-one',
            title: 'Maison`D',
            description: 'A modern website developed to provide an online booking system for a small business. ',
            role: 'Full Stack Developer',
            status: 'Deployed / Live',
            indicator: <div style={{backgroundColor:"#4DB61C",height:"12px",width:"12px",borderRadius:"100px", marginLeft:"8px", boxShadow:"0 1px 10px rgba(77, 219, 84, 0.8)"}}/>,
            link: 'https://project-maison.vercel.app/',
            tags: [React,HTML5,CSS3,JavaScript]
        },

        {
            id: 'project-two',
            title: 'Coming Soon',
            description: 'Work In Progress Project',
            role:'Front-End Developer',
            status:'Work In Progress',
            indicator: <div style={{backgroundColor:"#b61c1cff",height:"12px",width:"12px",borderRadius:"100px", marginLeft:"8px", boxShadow:"0 1px 10px rgba(219, 77, 77, 0.8)"}}/>,
            link: '',
            tags: []
        }
    ];

    return (
        <>
            <div className='projects-section' id="projects">
                {projectsData.map((project) => (
                    <a href={project.link} target="_blank" className='project-box' id={project.id} key={project.id}>
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
                                        <img src={index} style={{width:"50px"}}/>
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