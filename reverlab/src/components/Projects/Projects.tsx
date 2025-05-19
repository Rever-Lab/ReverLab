import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './Projects.json';
import './ProjectCard.css';

const Projects: React.FC = () => {
	return (
		<div className="projects-section">
			<h2>Nuestros Proyectos</h2>
			<div className="projects-container">
				{projectsData.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;