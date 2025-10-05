import './skills.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//assets
import Business from '../../assets/Business.png';
import Stack from '../../assets/Layers.png';
import Bulb from '../../assets/bulb.png';

//misc
import React from '../../assets/misc/React.svg';
import VisualStudio from '../../assets/misc/Visual Studio.svg';
import JavaScript from '../../assets/misc/JavaScript.svg';
import HTML5 from '../../assets/misc/Html 5.svg';
import GitHub from '../../assets/misc/GitHub.svg';
import Figma from '../../assets/misc/Figma.svg';
import CSS3 from '../../assets/misc/CSS3.svg';
import Canva from '../../assets/misc/Canva.svg';
import Firebase from '../../assets/misc/Firebase.svg';

function BranchLine({ height = "50px" }) {
    return (
        <div 
            style={{
                width:"1px",
                height,
                backgroundColor:"rgba(255,255,255,0.5)",
                marginLeft:"4px"
            }}
        />
    )
}

function Skills () {
    const [isHovered, setIsHovered] = useState(null);


    const experiences = [
        {
            title: "Front-End Developer",
            subtitle: "Freelance",
            year: "2025",
            branch: <BranchLine />
        },
        {
            title:"Front-End Developer (Intern)",
            subtitle:"Blissful Bali Spa",
            year:"2025",
            branch: <BranchLine />
        },
        {
            title:"BS Computer Engineering",
            subtitle:"De La Salle University Dasmariñas",
            year:"2021-2025",
            branch:"",
        },
    ];

    const skillsData = [
        'Communication',
        'Teamwork',
        'Creativity',
        'Leadership',
        'Programming',
        'Designing',
        'Crafting'
    ];

    const techTools = [
        { src: React, label: 'React'},
        { src: JavaScript, label: 'JavaScript'},
        { src: HTML5, label: 'HTML5'},
        { src: CSS3, label: 'CSS3'},
        { src: Figma, label: 'Figma'},
        { src: VisualStudio, label: 'Visual Studio Code'},
        { src: GitHub, label: 'Github'},
        { src: Firebase, label: 'Firebase'},
        { src: Canva, label: 'Canva'},
    ];

    return (
        <>
            <div className='skills-section-grid' id="skills">
                <div className='experience'>
                    <h1><img src={Business}/>Experience</h1>
                    
                    <div className='timeline'>
                        {experiences.map((exp, index) => (
                            <>
                                <div key={index} className='timeline-item'>
                                    <div className='timeline-dot'/>
                                    <div className='timeline-content'>
                                        <div className='timeline-header'>
                                            <h3 className='timeline-role'>{exp.title}</h3>
                                            <span className='timeline-year'>{exp.year}</span>
                                        </div>
                                        <p className='timeline-subtitle'>{exp.subtitle}</p>
                                    </div>
                                </div>
                                {exp.branch}
                            </>
                        ))}
                    </div>
                </div>
                
                <div className='tech-stack'>
                    <h1><img src={Stack}/>Tech Stack</h1>
                    <div className='tech-tools'>
                        {techTools.map((tool, index) => (
                            <motion.div 
                                key={index}
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                                style={{position:'relative'}}
                            >
                                <motion.img
                                    src={tool.src}
                                    alt={tool.label}
                                    whileHover={{ scale: 1.1 }}
                                />
                                <AnimatePresence>
                                    {isHovered === index && (
                                    <motion.div
                                        className="info-box"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                        position: 'absolute',
                                        top: '-100%',
                                        left: '0%',
                                        transform: 'translateX(-50%)',
                                        background: 'rgba(0,0,0,0.5)',
                                        backdropFilter:'blur(5px)',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                                        zIndex: 10,
                                        whiteSpace: 'nowrap',
                                        color:'white'
                                        }}
                                    >
                                        {tool.label}
                                    </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className='skills'>
                    <h1><img src={Bulb}/>Skills</h1>
                    <div className='skills-grid'>
                        {skillsData.map((skill, index) => (
                            <div className='skills-value'>
                                <p key={index}>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;