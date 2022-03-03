import React from "react";

const MenuOption = props => {
	return (
		<li onClick={props.onClick}>
			<div onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
				<span id={props.id}>{props.name}</span>
			</div>
		</li>
	);
};

export default MenuOption;
