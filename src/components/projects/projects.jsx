import './projects.scss';
import { useState, useEffect, useRef } from 'react';

//DarkMode 
import { useDarkMode } from '../../context/DarkModeContext';

//assets
import React from '../../assets/misc/React.svg';
import HTML5 from '../../assets/misc/Html 5.svg';
import CSS3 from '../../assets/misc/CSS3.svg';
import JavaScript from '../../assets/misc/JavaScript.svg';
import Figma from '../../assets/misc/Figma.svg';
import Firebase from '../../assets/misc/Firebase.svg';
import Motion from '../../assets/misc/motion.png';
import ExternalLink from '../../assets/External Link.png';
import Arduino from '../../assets/misc/Arduino.svg';
import Sass from '../../assets/misc/Sass.svg';
import Tailwind from '../../assets/misc/Tailwind CSS.svg';

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
    const [isVisible, setIsVisible] = useState(false);
    const { darkMode } = useDarkMode();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // 10% of the box must be visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const projectsData = [
        {
            id: 'project-one',
            title: 'Maison`D',
            description: '(Currently being updated) A modern website developed to provide an online booking system for a local spa business. ',
            role: 'Full Stack Developer',
            status: 'Deployed / Live',
            indicator: <Deployed />,
            link: 'https://project-maison.vercel.app/',
            target: '_blank',
            tags: [React, HTML5, CSS3, JavaScript, Firebase, Figma],
        },

        {
            id: 'project-two',
            title: 'Maison`D Staff Page',
            description: '(Currently being updated) A staff page dedicated for Maison`D admins and employees.',
            role: 'Full Stack Developer',
            status: 'Deployed / Live',
            indicator: <Deployed />,
            link: 'https://admin-project-d.vercel.app/',
            target: '_blank',
            tags: [React, HTML5, CSS3, JavaScript, Figma, Firebase]
        },

        {
            id: 'project-three',
            title: 'QueueIt',
            description: 'A smart queue management web application designed to streamline waiting lines and enhance customer experience.',
            role: 'UI/UX & Front-End Developer',
            status: 'Deployed / Live',
            indicator: <Deployed />,
            link: 'https://queueit-d6c2e.web.app/',
            target: '_blank',
            tags: [Figma, HTML5, CSS3]
        },

        {
            id: 'project-four',
            title: 'Jumies',
            description: 'Pastry Business Website, Work In Progress',
            role:'Front-End Developer',
            status:'Work In Progress',
            indicator: <WIP />,
            link: '#project-four',
            target:'',
            tags: [React, HTML5, CSS3, Tailwind, JavaScript, Figma],
        }
    ];

    return (
            <div className={`projects-section ${darkMode? 'light':'dark'}`} id="projects" ref={ref} >
                <p className={`projects-header ${isVisible? 'animate' : ''}`} >Projects</p>
                {projectsData.map((project) => (
                    <div 
                        href={project.link} 
                        target={project.target} 
                        className={`project-box ${isVisible? 'animate':''}`} 
                        id={project.id} 
                        key={project.id}
                        ref={ref}
                    >
                        <div className={project.id}
                            style={{
                                height:"300px",
                                width:"100%",
                                borderTopLeftRadius: "10px",
                                borderBottomLeftRadius: "10px",
                            }}/>
                        <div className='project-container'>
                            <div className='project-info'>
                                <h1>{project.title}</h1>
                                <p style={{ textAlign:"left"}}>{project.description}</p>
                            </div>
                            <div className='additional-info'>
                                <div className='role-status'>
                                    <p className='role-text'><strong>Role:</strong> {project.role}</p>
                                    <a href={project.link} target={project.target}>
                                        <strong>Status:</strong> {project.status} {project.indicator}
                                        <img src={ExternalLink} className='link' alt="external link" loading="lazy"/>
                                    </a>
                                </div>
                                <div className='project-tags'>
                                    {project.tags.map((index) => (
                                        <img src={index} style={{width:"50px"}} alt="Tool Icon" loading="lazy"/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Projects;