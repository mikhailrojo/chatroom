import {User, Message} from './types';
import messages from './mocks/messages';
import users from './mocks/users';

/** current user hard-coded id as we do everything in mocks */
const CURRENT_USER_ID = 1;

/** returns current user friends */
export const getUsers = (): Promise<User[]> => Promise.resolve(users);

/** returns messages exchanged with selected user */
export const getMessagesByUser = (selectedUserId: number): Promise<Message[]> => Promise
	.resolve([...messages.filter(msg =>
		msg.authorId === selectedUserId && msg.addresseeId === CURRENT_USER_ID
		|| msg.addresseeId === selectedUserId && msg.authorId === CURRENT_USER_ID
	)]);

/** registers with backend new message */
export const registerNewMessage = ({message, selectedUserId}: { message: string; selectedUserId: User['id'] }) => {
	const newMessage = uploadNewMessage({message, selectedUserId});

	messages.push(newMessage);
};

/** I am mocking a function which uploads the message to the server */
export const uploadNewMessage = ({message, selectedUserId}): Message => {
	// upload the message to server and return its id, time and user (but i hard code it here)
	const nextMessageId = Math.max(...messages.map(msg => msg.id)) + 1;

	return {
		id: nextMessageId,
		date: new Date(),
		addresseeId: selectedUserId,
		textContent: message,
		authorId: CURRENT_USER_ID
	};
};
