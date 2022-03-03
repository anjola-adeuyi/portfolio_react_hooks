import React from "react";

import CustomCard from "../CustomCard/CustomCard";

const ProjectCard = props => (
	<CustomCard cardType="project" height={250} {...props} />
);

export default ProjectCard;
