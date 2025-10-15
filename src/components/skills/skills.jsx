import './skills.scss';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

//assets
import Business from '../../assets/Business.png';
import Stack from '../../assets/Layers.png';
import Bulb from '../../assets/bulb.png';
import More from '../../assets/More.svg';
import Close from '../../assets/Close.svg';
import Model from '../../assets/pacot-model-two.png';
import Download from '../../assets/Download.svg';

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
import Motion from '../../assets/misc/motion.png';
import Arduino from '../../assets/misc/Arduino.svg';
import Sass from '../../assets/misc/Sass.svg';
import Tailwind from '../../assets/misc/Tailwind CSS.svg';

function BranchLine({ height = "50px" }) {
    return (
        <div 

            className='branchLine'
            style={{
                width:"1px",
                height,
                marginLeft:"4px"
            }}
        />
    )
}

function Skills () {
    const [isHovered, setIsHovered] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const { darkMode } = useDarkMode();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
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

    const experiences = [
        {
            title: "Front-End Developer",
            subtitle: "Freelance",
            year: "2025",
            branch: <BranchLine />
        },
        {
            title:"Full-Stack Developer (Intern)",
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
        'Drawing',
        'Conflict Resolution',
        'Problem-Solving',
        'Adaptability'
    ];

    const techTools = [
        { src: React, label: 'React'},
        { src: JavaScript, label: 'JavaScript'},
        { src: HTML5, label: 'HTML5'},
        { src: CSS3, label: 'CSS3'},
        { src: Sass, label: 'Sass'},
        { src: Tailwind, label: 'Tailwind'},
        { src: Motion, label: 'Motion'},
        { src: Figma, label: 'Figma'},
        { src: VisualStudio, label: 'Visual Studio Code'},
        { src: GitHub, label: 'Github'},
        { src: Firebase, label: 'Firebase'},
        { src: Canva, label: 'Canva'},
        { src: Arduino, label: 'Arduino'},
    ];

    {/* FOR MODAL */}

    const education = [
        {
            degree: "Bachelor of Science in Computer Engineering with Specialization in Software Development",
            school: "De La Salle University of Dasmariñas Cavite",
            year: "2021-2025"
        },
        {
            degree: "STEM (Senior High School)",
            school: "Cachapero Academe Inc.",
            year: "2019-2021"
        },
        {
            degree: "Junior High School",
            school: "Imus Institute of Science & Technology Inc.",
            year: "2015-2019"
        },
    ];

    const skills = {
        hard: [
            'Computer Programming,',
            'Front-End Development (React.js, HTML5, CSS3, JavaScript),',
            'Web Design (Figma),',
            'Computer Hardware Assembly,',
            'PCB Design,',
            'Soldering,',
            'Professional Portrait Drawing'
        ],
        soft: [
            'Creativity,',
            'Communication,',
            'Teamwork,',
            'Leadership,',
            'Conflict Resolution,',
            'Problem-Solving,',
            'Adaptability,',
            'Emotional Intelligence'
        ]
    };

    const additionalInfo = {
        language: [
            'Tagalog,',
            'English'
        ],

        achievements: [
            'Multimedia Artist of the Year (April 2020),',
            'Best in Robotics Thesis (May 2019)'
        ]
    };

    return (
            <div className={`skills-section-grid ${darkMode? 'light':'dark'}`} id="skills" ref={ref}>

                <div className={`skills-header ${isVisible? 'animate':''}`}> 
                    <p>Character Information</p>
                    <button onClick={() => setModalOpen(true)}>More <img src={More} alt='More Button' aria-hidden="true" loading="lazy"/></button>
                </div>

                <div className={`experience ${isVisible? 'animate':''}`} ref={ref}>
                    <h1><img src={Business} alt="business-icon" loading="lazy"/>Experience</h1>
                    <div className='timeline'>
                        {experiences.map((exp, index) => (
                            <>
                                <div key={index} className='timeline-item'>
                                    <div className='timeline-dot'/>
                                    <div className='timeline-content'>
                                        <div className='timeline-header'>
                                            <p className='timeline-role'>{exp.title}</p>
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
                
                <div className={`tech-stack ${isVisible? 'animate':''}`} ref={ref}>
                    <h1><img src={Stack} alt="stack-icon" loading="lazy"/>Tech Stack</h1>
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
                                    loading="lazy"
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
                <div className={`skills ${isVisible? 'animate':''}`} ref={ref}>
                    <h1><img src={Bulb} alt="bulb-icon" loading="lazy"/>Skills</h1>
                    <div className='skills-grid'>
                        {skillsData.map((skill, index) => (
                            <div className='skills-value'>
                                <p key={index}>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* MODALS */}
                {isModalOpen && (
                    <div className='character-info-modal-overlay'>
                        <div className='modal-container'> 
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.7 }}
                                className="close-btn" onClick={() => setModalOpen(false)}>
                                <img src={Close} alt='Close Button' style={{width:"50px"}} loading='lazy' aria-hidden="true" />
                            </motion.button>
                            <div className='modal-header'>
                                <img src={Model} alt="Pacot Profile Picture" loading='lazy'
                                    style={{width: "100px"}}
                                />
                                <div className='profile-information'>
                                    <p style={{fontSize:"1.5rem", fontWeight:"bold"}}>PACOT, EVANE DELA CRUZ</p>
                                    <p>evanepacot2002@gmail.com</p>
                                    <p>(+63)947-631-8165</p>
                                </div>
                            </div>
                            <motion.a
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                                href="/pacot-resume.pdf"
                                download
                                target='_blank'
                                rel="noopener noreferrer"
                                className='download-resume-btn'
                            >
                                Download Resume
                                <img src={Download} alt="Download Icon" aria-hidden="true" loading='lazy'
                                    style={{width:"20px", filter:"invert(1)"}}
                                />
                            </motion.a>

                            <div className='modal-body'>
                                <h1>SUMMARY</h1>
                                <p>I am a graduate student from De La Salle University Dasmariñas, driven by a passion for technology and creativity. I specialize in front-end programming, with a strong passion for creating user-friendly and visually engaging web interfaces. Beyond coding, I bring a creative eye for UI design, allowing me to craft websites that are not only functional but also aesthetically appealing. I place great importance on user experience, ensuring that every website I design or develop is intuitive, responsive, and built with both form and function in mind.</p>
                                <h1>EDUCATION</h1>
                                {education.map((level, index) => (
                                    <div key={index} className='education-section'>
                                        <h3 style={{paddingRight:"100px"}}>{level.degree}</h3>
                                        <p>{level.school}</p>
                                        <span>{level.year}</span>
                                    </div>
                                ))}
                                <h1>SKILLS</h1>
                                <h3 className='modal-skills-section'>Hard Skills:
                                    {skills.hard.map((info) => (
                                        <span> {info} </span>
                                    ))}
                                </h3>
                                <h3 className='modal-skills-section'>Soft Skills:
                                    {skills.soft.map((info) => (
                                        <span> {info} </span>
                                    ))}
                                </h3>
                                <h1>ADDITIONAL INFORMATION</h1>
                                <h3 className='add-info-section'>Language:
                                    {additionalInfo.language.map((info) => (
                                        <span> {info} </span>
                                    ))}
                                </h3>
                                <h3 className='add-info-section'>Awards / Achievements: 
                                    {additionalInfo.achievements.map((info) => (
                                        <span> {info} </span>
                                    ))}
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default Skills;