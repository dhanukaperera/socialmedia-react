import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Post from "./components/Post/Post";
import { IPost } from "./models/Post";

import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

interface IPostInput {
	title: string;
	content: string;
}

function App() {
	const [posts, setPosts] = useState<IPost[]>([]);

	const { register, handleSubmit } = useForm<IPostInput>();
	const onSubmit: SubmitHandler<IPostInput> = (data) => {
		console.log(data);

		const { title, content } = data;
		if (title && content) {
			const newPost: IPost = {
				id: uuidv4(),
				title: title,
				content: content,
				username: "anonymous",
				likeCount: 0,
			};
			if (posts) setPosts([newPost, ...posts]);
			const url =
				"https://socialmedia-api.dhanuka-work3606.workers.dev/posts";

			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};

			axios.post(url, newPost, config);
		}
	};

	useEffect(() => {
		axios
			.get("https://socialmedia-api.dhanuka-work3606.workers.dev/posts")
			.then((data) => {
				if (data) setPosts(data.data);
			});
	}, []);

	return (
		<AppStyles>
			<CreatePost onSubmit={handleSubmit(onSubmit)}>
				<input {...register("title")} placeholder="Title" />
				<textarea {...register("content")} placeholder="Your Content" />
				<button>Post</button>
			</CreatePost>
			<PostList>
				{posts?.map((item: IPost, index) => {
					return <Post key={index} {...item} />;
				})}
			</PostList>
		</AppStyles>
	);
}

export default App;

const PostList = styled.div``;

const AppStyles = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CreatePost = styled.form`
	display: flex;
	flex-direction: column;
	width: 600px;
	align-items: center;
	input,
	textarea {
		width: 100%;
		border-radius: 1rem;
		border: 2px solid #4f46e5;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-family: "Inter", sans-serif;
		margin: 0.5rem 0;
	}

	textarea {
		resize: none;
	}

	button {
		width: 10rem;
		border: none;
		border-radius: 0.5rem;
		padding: 0.4rem;
		margin: 1rem 0;
		cursor: pointer;
	}
`;
