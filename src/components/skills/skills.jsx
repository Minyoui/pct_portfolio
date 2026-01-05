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
import Next from '../../assets/misc/next-js.svg';
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
import Vite from '../../assets/misc/Vite.svg';
import MongoDB from '../../assets/misc/MongoDB.png';
import NodeJS from '../../assets/misc/Nodejs.png';
import Git from '../../assets/misc/Git.png';
import GPT from '../../assets/misc/ChatGPT.png';
import Claude from '../../assets/misc/Claude Ai.png';
import Gemini from '../../assets/misc/Gemini Ai.png';

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
        { src: React, label: 'React.js'},
        { src: Next, label: 'Next.js'},
        { src: Vite, label: 'Vite'},
        { src: VisualStudio, label: 'Visual Studio Code'},
        { src: JavaScript, label: 'JavaScript'},
        { src: HTML5, label: 'HTML5'},
        { src: CSS3, label: 'CSS3'},
        { src: Sass, label: 'Sass'},
        { src: Tailwind, label: 'Tailwind'},
        { src: Git, label: 'Git Version Control'},
        { src: GitHub, label: 'Github'},
        { src: GPT, label: 'ChatGPT'},
        { src: Claude, label: 'Claude AI'},
        { src: Gemini, label: 'Gemini AI'},
        { src: Motion, label: 'Motion'},
        { src: Figma, label: 'Figma'},
        { src: Canva, label: 'Canva'},
        { src: Firebase, label: 'Firebase'},
        { src: Arduino, label: 'Arduino'},
        { src: MongoDB, label: 'MongoDB'},
        { src: NodeJS, label: 'Node.js'},
    ];

    {/* FOR MODAL */}

    const education = [
        {
            title: "Front-End Developer (Freelance)",
            description: [
                "Developed modern, responsive websites using Next.js, focusing on SEO optimization and performance.",
                "Translated client requirements into clean, user-friendly interfaces.",
                "Implemented reusable components and responsive layouts for cross-device compatibility.",
                "Maintained clear communication with clients to ensure alignment with project goals and timelines.",
            ],
            year: "2025-Present"
        },
        {
            title: "Full Stack Developer (Intern), Blissful Bali Spa",
            description: [
                "Led the end-to-end design and development of a business website.",
                "Created wireframes and high-fidelity designs using Figma.",
                "Designed the official business logo and visual assets.",
                "Developed two website versions using React.js and Next.js for client review and approval.",
                "Collaborated closely with the business owner, providing regular progress updates.",
            ],
            year: "Feb 2025 - Apr 2025"
        },
        {
            title: "Bachelor of Science in Computer Engineering with Specialization in Software Development",
            description: [
                "De La Salle University of Dasmariñas Cavite"
            ],
            year: "2021-2025"
        },
    ];

    const skills = {
        hard: [
            'Computer Programming,',
            'Front-End Development (React.js, Next.js, HTML5, CSS3, Tailwind, JavaScript, Motion, Git),',
            'Web Design (Figma),',
            'Computer Hardware Assembly,',
            'PCB Design,',
            'Soldering,',
            'Professional Portrait Drawing',
            'Video Editing (Short & Long-form Content, Basic Motion Graphics, Visual Storytelling, Adobe Premiere Pro, CapCut'
        ],
        soft: [
            'Creativity,',
            'Communication,',
            'Teamwork,',
            'Leadership,',
            'Conflict Resolution,',
            'Adaptability,'
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
                                href="/Pacot Resume.pdf"
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
                                <p>
                                    Front-End Developer with hands-on experience in building modern, responsive, and 
                                    performance-optimized web applications using React.js and Next.js. Strong eye for 
                                    UI/UX design, combining technical development skills with creative design thinking 
                                    to deliver intuitive and visually engaging user interfaces. Experienced in working 
                                    directly with clients as a freelancer, translating business requirements into 
                                    functional digital solutions.
                                </p>
                                <h1>EXPERIENCE</h1>
                                {education.map((level, index) => (
                                    <div key={index} className='education-section'>
                                        <h3 style={{paddingRight:"100px"}}>{level.title}</h3>
                                        {/* <p>{level.description}</p> */}
                                        <ul className='experience-description'>
                                            {level.description.map((info, index) => (
                                                <li key={index}>
                                                    {info}
                                                </li>
                                            ))}
                                        </ul>
                                        <span>{level.year}</span>
                                    </div>
                                ))}
                                <h1>SKILLS</h1>
                                <h3 className='modal-skills-section'>Technical Skills:
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