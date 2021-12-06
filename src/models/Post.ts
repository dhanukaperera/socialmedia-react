export interface IPost {
	id: string;
	title: string;
	content: string;
	createdAt?: Date;
	username: string;
	likeCount?: number;
}
