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
import Sass from '../../assets/misc/Sass.svg';
import Tailwind from '../../assets/misc/Tailwind CSS.svg';
import Github from '../../assets/misc/GitHub.svg';
import Vite from '../../assets/misc/Vite.svg';
import MongoDB from '../../assets/misc/MongoDB.png';
import NodeJS from '../../assets/misc/Nodejs.png';

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
            description: '(Currently being developed) A modern website developed to provide an online booking system for a local spa business. NOTE: Back-end is not yet deployed',
            role: 'Full Stack Developer',
            status: 'Deployed / Live',
            indicator: <Deployed />,
            link: 'https://project-maison.vercel.app/',
            github: 'https://github.com/Minyoui/maison-website',
            target: '_blank',
            tags: [React, Vite, HTML5, CSS3, JavaScript, Firebase, Figma],
        },

        {
            id: 'project-three',
            title: 'My Portfolio',
            description: '(Always being updated) A personally developed portfolio to showcase my skills in front-end development.',
            role: 'Front-End Developer',
            status: 'Deployed / Live',
            indicator: <Deployed />,
            link: '#home',
            github: 'https://github.com/Minyoui/pct_portfolio',
            target: '_blank',
            tags: [React, Vite, HTML5, CSS3, Sass, Motion, Figma]
        },

        {
            id: 'project-four',
            title: 'Jumies',
            description: 'Pastry Business Website, Work In Progress',
            role:'Front-End Developer',
            status:'Work In Progress',
            indicator: <WIP />,
            link: '#project-four',
            github: '#project-four',
            target:'',
            tags: [React, Vite, HTML5, CSS3, Tailwind, JavaScript, Figma],
        }
    ];

    return (
            <div className={`projects-section ${darkMode? 'light':'dark'}`} id="projects" ref={ref} >
                <p className={`projects-header ${isVisible? 'animate' : ''}`} >Projects</p>
                {projectsData.map((project) => (
                    <div className={`project-box ${isVisible? 'animate' : ''}`} id={project.id} key={project.id} ref={ref}>
                        <div className={project.id}></div>
                        <div className='project-description'>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <a 
                                href={project.link}
                                target={project.target}
                            >
                                {project.indicator}
                                Visit Here
                                <img src={ExternalLink} />
                            </a>
                            <a
                                href={project.github}
                                target={project.target}
                                id="github-link"
                            >
                                Github Link
                                <img src={Github} />
                            </a>
                            <div className='tools'>
                                {project.tags.map((index) => (
                                    <img src={index} alt="Tool Icon" loading='lazy'/>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Projects;