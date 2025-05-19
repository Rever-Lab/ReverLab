import React from 'react';

interface Project {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	link: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, imageUrl, link }) => {
	return (
		<a href={link} className="project-link">
			<div className="project-card">
				<img src={imageUrl} alt={title} />
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</a>
	);
};

export default ProjectCard;