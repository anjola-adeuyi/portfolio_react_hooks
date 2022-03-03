import React from "react";

import CustomCard from "../CustomCard/CustomCard";

const BlogCard = props => (
	<CustomCard cardType="blog" height={250} {...props} />
);

export default BlogCard;
