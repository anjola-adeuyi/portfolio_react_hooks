import React, { useState } from "react";
import Container from "@material-ui/core/Container";

import Home from "./view/Home/Home";
import Blogs from "./view/Blogs/Blogs";
import Skills from "./view/Skills/Skills";
import Projects from "./view/Projects/Projects";
import Experience from "./view/Experience/Experience";
import ContactMe from "./view/Contact/ContactMe";
import home from "./assets/img/home.svg";
import MenuOption from "./components/MenuOption";
import "./App.css";

const App = () => {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState("home");
	const mobileDevices = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/;

	const changeMenu = menu => {
		setDisplay(menu);
		setOpen(false);
	};

	const onMouseEnter = () => {
		if (!open && !mobileDevices.test(navigator.userAgent)) {
			setOpen(true);
		}
	};

	const onMouseExit = () => {
		if (open && !mobileDevices.test(navigator.userAgent)) {
			setOpen(false);
		}
	};

	const backToHome = () => {
		if (mobileDevices.test(navigator.userAgent)) {
			setOpen(open => !open);
		} else if (display !== "home" && open) {
			setDisplay("home");
		}
	};

	return (
		<>
			<Container fixed>
				<div
          className={`cn-home${display === "home" ? " pointer" : ""}${display !== "home" || open ? " cn-home-no-ripple" : ""}`}
					id="cn-home"
					onMouseOver={onMouseEnter}
					onClick={backToHome}
				>
					{display !== "home" &&
					open &&
					!mobileDevices.test(navigator.userAgent) ? (
						<img
							src={home}
							alt="Home"
							style={{
								height: "33.3%",
								position: "relative",
								top: "17.5%",
								transform: "translateY(-17.5%)",
							}}
						/>
					) : null}
				</div>
				<div
					className={`cn-wrapper${open ? " opened-nav" : ""}`}
					id="cn-wrapper"
				>
					<ul>
						<MenuOption
							id="blogs"
							name="Blogs"
							onClick={() => changeMenu("blogs")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="skills"
							name="Skills"
							onClick={() => changeMenu("skills")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="projects"
							name="Projects"
							onClick={() => changeMenu("projects")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="experience"
							name="Experience"
							onClick={() => changeMenu("experience")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
						<MenuOption
							id="contact"
							name="Contact"
							onClick={() => changeMenu("contact")}
							onMouseOver={onMouseEnter}
							onMouseLeave={onMouseExit}
						/>
					</ul>
				</div>
				<div
					className={`cn-overlay${open ? " on-overlay" : ""}`}
					id="cn-overlay"
				/>
				{display === "home" ? <Home /> : null}
				{display === "blogs" ? <Blogs /> : null}
				{display === "experience" ? <Experience /> : null}
				{display === "skills" ? <Skills /> : null}
				{display === "projects" ? <Projects /> : null}
				{display === "contact" ? <ContactMe /> : null}
			</Container>
		</>
	);
};

export default App;
