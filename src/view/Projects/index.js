import { color, snake, notes, posto } from "../../assets/img/project";

const projects = [
	{
		name: "Posto",
		desc: "A blogging site for markdown enthusiasts",
		stack:
			"React, Node, Express, MongoDB, Firebase, Heroku, CircleCI and Yarn Workspaces",
		href: "https://github.com/pesto-students/batch-9-Posto",
		image: posto,
	},
	{
		name: "Snake Game",
		desc: "Snake game that keeps track of your high score",
		stack: "React",
		href: "https://github.com/Navneet-Sahota/snake-game",
		image: snake,
	},
	{
		name: "Notes CLI",
		desc: "A CLI tool to keep up with your tasks",
		stack: "Node.js",
		href: "https://github.com/Navneet-Sahota/notes-app",
		image: notes,
	},
	{
		name: "Guess-the-Color",
		desc: "The RGB Color guessing game",
		stack: "HTML, CSS, and JavaScript",
		href: "https://github.com/Navneet-Sahota/Guess-the-Color",
		image: color,
	},
];

export { projects };
