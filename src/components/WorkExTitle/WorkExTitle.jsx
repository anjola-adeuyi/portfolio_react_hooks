import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import "./index.css";

const WorkExTitle = props => {
	return (
		<Typography
			className="work-title"
			style={{ paddingBottom: "2.5vh" }}
			variant="h3"
		>
			<strong>
				{props.jobTitle ? props.jobTitle + " " : null}
				<Link
					className="link"
					href={props.href}
					target="_blank"
					rel="noreferrer"
				>
					{props.company}
				</Link>
			</strong>{" "}
			({props.duration})
		</Typography>
	);
};

export default WorkExTitle;
