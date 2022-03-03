import React from "react";

import Header from "../../components/Header/Header";
import { contacts } from "./index.js";
import "./index.css";

const ContactMe = () => {
	return (
		<>
			<Header title="Contact Me" />
			<ul className="contact-container">
				{contacts.map(contact => {
					return (
						<li>
							<a target="_blank" rel="noopener noreferrer" href={contact.href}>
								<img
									src={contact.image}
									alt={contact.name}
									className="contact-logo"
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ContactMe;
