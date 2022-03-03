import React from "react";
import Typist from "react-typist";
import Typography from "@material-ui/core/Typography";

import "./index.css";

const Home = () => {
	return (
		<>
			<Typist
				className="intro-box"
				avgTypingDelay={60}
				startDelay={200}
				cursor={{
					show: false,
				}}
			>
				<Typography className="intro-text" variant="h1">
					Hi! My name is <strong>Anjolaoluwa Adeuyi Joshua</strong>.
				</Typography>
				<Typist.Delay ms={500} />
				<Typography className="intro-text" variant="h1">
					I'm a <strong>Frontend</strong>
					<Typist.Backspace count={8} delay={300} />
					<strong>UI/UX</strong>
					<Typist.Backspace count={7} delay={300} />
					<strong>Full Stack Developer</strong> from Lagos, Nigeria.
				</Typography>
			</Typist>
		</>
	);
};

export default Home;
