import {User, Message} from './types';
import messages from './mocks/messages';
import users from './mocks/users';

/** current user hard-coded id as we do everything in mocks */
const CURRENT_USER_ID = 0;

/** returns current user correspondents */
export const getUsers = (): Promise<User[]> => Promise.resolve(users.filter(user => user.id !== CURRENT_USER_ID));

/** returns current user */
export const getCurrentUser = (): Promise<User> => Promise.resolve(users.find(user => user.id === CURRENT_USER_ID));

/** returns messages exchanged with selected user */
export const getMessagesByUser = (selectedUser: User): Promise<Message[]> => Promise
	.resolve([...messages.filter(msg =>
		msg.authorId === selectedUser.id && msg.addresseeId === CURRENT_USER_ID
		|| msg.addresseeId === selectedUser.id && msg.authorId === CURRENT_USER_ID
	)]);

/** registers with backend new message */
export const registerNewMessage = ({message, toUser, fromUser}: {message: string; toUser: User; fromUser: User}) => {
	const newMessage = uploadNewMessage({message, toUser, fromUser});

	messages.push(newMessage);
};

/** I am mocking a function which uploads the message to the server */
export const uploadNewMessage = ({message, toUser, fromUser}): Message => {
	// upload the message to server and return its id, time and user (but i hard code it here)
	const nextMessageId = Math.max(...messages.map(msg => msg.id)) + 1;

	return {
		id: nextMessageId,
		date: new Date(),
		authorName: fromUser.name,
		addresseeId: toUser.id,
		textContent: message,
		authorId: CURRENT_USER_ID
	};
};
