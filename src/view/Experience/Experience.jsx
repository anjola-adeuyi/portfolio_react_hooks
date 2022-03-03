import React from "react";

import Header from "../../components/Header/Header";
import "./index.css";
import WorkExTitle from "../../components/WorkExTitle/WorkExTitle";

const Experience = () => {
	return (
		<>
			<Header title="Experience" />
			<div className="work-container even-work">
				<WorkExTitle
					jobTitle="Open Source Contributor at"
					company="Uber/deck.gl"
					href="https://deck.gl/"
					duration="Sep 2019 - Oct 2019"
				/>
				<ul className="work">
					<li>
						<span>
							Added support for quantile and ordinal scaling (
							<a
								href="https://github.com/uber/deck.gl/pull/3546"
								className="blueBox"
								target="_blank"
								rel="noopener noreferrer"
							>
								#3546
							</a>
							,{" "}
							<a
								href="https://github.com/uber/deck.gl/pull/3609"
								className="blueBox"
								target="_blank"
								rel="noopener noreferrer"
							>
								#3609
							</a>
							).
						</span>
					</li>
					<li>
						<span>
							Added ‘auto’ support for smooth “fly to” transitions (
							<a
								className="blueBox"
								href="https://github.com/uber/deck.gl/pull/3677"
								target="_blank"
								rel="noopener noreferrer"
							>
								#3677
							</a>
							) .
						</span>
					</li>
					<li>
						<span>
							Implemented various other bug fixes, docs changes, enhancements
							and helped create specs for future development via Github Issues.
							<ul
								className="work"
								style={{
									fontSize: "1em",
									paddingTop: "10px",
								}}
							>
								<li style={{ listStyleType: "circle" }}>
									<a
										className="blueBox"
										href="https://github.com/uber/deck.gl/issues?utf8=✓&q=assignee%3ANavneet-Sahota+"
										target="_blank"
										rel="noopener noreferrer"
									>
										View all my contributions on Github.
									</a>
								</li>
							</ul>
						</span>
					</li>
				</ul>
			</div>
			<div className="work-container odd-work">
				<WorkExTitle
					jobTitle="Frontend Lead at"
					company="Xane AI"
					href="https://xane.ai"
					duration="Jul 2018 - Jun 2019"
				/>
				<ul className="work">
					<li>
						<span>
							Wrote a custom{" "}
							<a
								className="blueBox"
								href="https://webpack.js.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Webpack
							</a>{" "}
							configuration to reduce bundle size by ~70%.
						</span>
					</li>
					<li>
						<span>
							Improved development experience by setting up ESLint, Prettier,
							Husky, and Lint-staged.
						</span>
					</li>
					<li>
						<span>
							Heavily contributed to a custom{" "}
							<a
								className="blueBox"
								href="https://reactjs.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								React
							</a>{" "}
							dashboard for{" "}
							<a
								className="blueBox"
								href="https://jiva.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jiva Ayurveda
							</a>{" "}
							used to track each of their 1,000+ employees’ sentiment to find
							and resolve HR issues as early as possible.
						</span>
					</li>
					<li>
						<span>
							Built a custom Typeform-like interface to conduct intra-department
							surveys for{" "}
							<a
								className="blueBox"
								href="https://www.firstsource.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								First Source
							</a>
							.
						</span>
					</li>
					<li>
						<span>
							Built a custom PowerPoint Report generator using{" "}
							<a
								className="blueBox"
								href="https://gitbrent.github.io/PptxGenJS/"
								target="_blank"
								rel="noopener noreferrer"
							>
								PptxGenJS
							</a>
							.
						</span>
					</li>
					<li>
						<span>
							Built an MVP{" "}
							<a
								className="blueBox"
								href="https://facebook.github.io/react-native/"
								target="_blank"
								rel="noopener noreferrer"
							>
								React Native
							</a>{" "}
							app to scan, detect & provide voice & text-based information about
							different parts of a car to win an enterprize services contract
							from{" "}
							<a
								className="blueBox"
								href="https://www.marutisuzuki.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Suzuki
							</a>
							.
						</span>
					</li>
				</ul>
			</div>
			<div style={{ height: "10vh" }}></div>
		</>
	);
};

export default Experience;
