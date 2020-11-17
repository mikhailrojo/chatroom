export type User = {
	name: string;
	isOnline: boolean;
	id: number;
};

export type Message = {
	id: number;
	authorId: User['id'];
	authorName: User['name'];
	textContent: string;
	addresseeId: number,
	date: Date;
}
