import React from "react";

import BlogCard from "../../components/BlogCard/BlogCard";
import Header from "../../components/Header/Header";
import { blogs } from "./index.js";
import "./index.css";

const Blogs = () => {
	return (
		<>
			<Header title="Blogs" />
			<div className="blog-container">
				{blogs.map((blog, index) => (
					<BlogCard
						even={index % 2 === 0}
						key={blog.name}
						name={blog.name}
						description={blog.desc}
						href={blog.href}
						image={blog.image}
					/>
				))}
			</div>
		</>
	);
};

export default Blogs;
