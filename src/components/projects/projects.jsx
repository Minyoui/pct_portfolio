import './projects.css';

function Projects () {
    const projectsData = [
        {
            id: 'project-one',
            image: '',
            title: 'Maison`D',
            description: 'A modern website developed to provide an online booking system for a small business. ',
            role: 'Front-End Developer',
            status: 'Deployed / Live',
            link: '',
            tags: ['','']
        }
    ];

    return (
        <>
            <div className='projects-section' id="projects">
                {projectsData.map((project) => (
                    <div className='project-box' id={project.id} key={project.id}>
                        <div className='project-info'>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <div className='line'/>
                            <p>Role:{project.role}</p>
                            <p>Status:{project.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;