import React from "react";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Header from "../../components/Header/Header";
import { projects } from "./index.js";
import "./index.css";

const Projects = () => {
	return (
		<>
			<Header title="Projects" />
			<div className="project-container">
				{projects.map((project, index) => (
					<ProjectCard
						even={index % 2 === 0}
						key={project.name}
						stack={project.stack}
						href={project.href}
						name={project.name}
						description={project.desc}
						image={project.image}
					/>
				))}
			</div>
		</>
	);
};

export default Projects;
