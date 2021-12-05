import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Post from "./components/Post/Post";
import { IPost } from "./models/Post";

import styled from "styled-components";

function App() {
	const [posts, setPosts] = useState<IPost[]>();

	useEffect(() => {
		axios
			.get("https://socialmedia-api.dhanuka-work3606.workers.dev/posts")
			.then((data) => {
				if (data) setPosts(data.data);
			});
	}, []);

	return (
		<AppStyles>
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
	justify-content: center;
`;
