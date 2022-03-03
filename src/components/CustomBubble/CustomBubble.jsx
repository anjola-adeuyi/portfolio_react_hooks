import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "./index.css";

const CustomBubble = props => {
	return (
		<Card className={`bubble ${props.cardType}`}>
			<CardMedia
				component="img"
				alt={props.name}
				image={props.image}
				title={props.name}
				className="bubble-image"
			/>
		</Card>
	);
};

export default CustomBubble;
