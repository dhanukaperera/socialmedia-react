import { FC } from "react";
import styled from "styled-components";
import { IPost } from "../../models/Post";

const Post: FC<IPost> = ({
	title,
	content,
	createdAt,
	username,
	likeCount,
}) => {
	return (
		<PostStyle>
			<h2>{title}</h2>
			<p>{content}</p>
			<ContentFooter>
				<p>
					By {username.toUpperCase()} at{" "}
					{new Date(createdAt).toLocaleString("EN-GB")}
				</p>
				<p> </p>
				{/* 	<p>Star : {likeCount}</p> */}
				<HearButton>
					<img src="heart-solid.svg" /> {likeCount}
				</HearButton>
			</ContentFooter>
		</PostStyle>
	);
};

export default Post;

const PostStyle = styled.div`
	width: 600px;
	margin-bottom: 1rem;
	p {
		font-size: 1.2rem;
	}

	background-color: #4f46e5;

	color: #fff;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	padding: 1rem 2rem;

	img {
		height: 24px;
		margin-right: 0.5rem;
	}
`;

const ContentFooter = styled.div`
	display: flex;
	justify-content: space-between;
	p {
		font-size: 0.8rem;
	}
`;

const HearButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
