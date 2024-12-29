import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dqvv from '../assets/image/dqvv.png';
import mokepon from '../assets/image/mokepon.png'
import conversor from '../assets/image/conversor1.png'
import projectData from '../data/projectData';

const Projects = () => {

    const imageMapping = {
        dqvv: dqvv,
        mokepon: mokepon,
        conversor: conversor
    };

    const projectWithImage = projectData.map((project) => ({
        ...project,
        imageUrl: imageMapping[project.imageUrl]
    
    }));

    return (
        <div className="projects-container">
            <h2>Algunos de mis proyectos recientes</h2>
            <Carousel className="project-carousel">
                {projectWithImage.map((project) => (
                    <Carousel.Item key={project.id}>
                        <a href={project.url} target='_blank' rel="noopener noreferrer">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title}
                                className="d-block w-100 project-image"
                            />
                            <Carousel.Caption>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Projects;


