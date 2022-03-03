import React from "react";

import SkillCard from "../../components/SkillCard/SkillCard";
import Header from "../../components/Header/Header";
import { skills } from "./index.js";
import "./index.css";

const Skills = () => {
	return (
		<>
			<Header title="Skills" />
			<div className="skill-container">
				{skills.map(skill => (
					<SkillCard
						key={skill.name}
						name={skill.name}
						image={skill.image}
					/>
				))}
			</div>
		</>
	);
};

export default Skills;
