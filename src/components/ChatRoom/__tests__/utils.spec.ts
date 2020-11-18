import users from '../mocks/users';
import {
	getUsers,
	getCurrentUser,
	getMessagesByUser,
	registerNewMessage,
	CURRENT_USER_ID
} from '../utils';
import messages from '../mocks/messages';

describe('utils', () => {
	describe('getUsers()', () => {
		it('should return an array of users without current', async() => {
			const allUsers = await getUsers();
			const usersWithoutCurrent = users.filter(user => user.id !== CURRENT_USER_ID);
			expect(allUsers).toStrictEqual(usersWithoutCurrent);
		});
	});

	describe('getCurrentUser()', () => {
		it('should return user is current user id ', async() => {
			const allUsers = await getUsers();
			const foundCurrentUser = users.find(user => user.id === CURRENT_USER_ID);
			const expectedCurrentUser = await getCurrentUser();

			expect(foundCurrentUser).toBe(expectedCurrentUser);
		});
	});

	describe('getMessagesByUser()', () => {
		it('should return all messages for selected user ', async() => {
			const USER_TEST_ID = 1;
			const allUsers = await getUsers();
			const testUser = allUsers.find(user => user.id === USER_TEST_ID);
			const testUserMessages = await getMessagesByUser(testUser);

			expect(testUserMessages).toStrictEqual(testUserMessages);
		});
	});

	describe('registerNewMessage()', () => {
		it('should register new message to the server', async() => {
			const USER_TEST_ID = 1;
			const allUsers = await getUsers();
			const testUser = allUsers.find(user => user.id === USER_TEST_ID);
			const testUserMessages = await getMessagesByUser(testUser);
			const message = 'this is a message';
			const currentUser = await getCurrentUser();

			expect(testUserMessages).toStrictEqual(testUserMessages);
			registerNewMessage({message, toUser: testUser, fromUser: currentUser});

			const updatedUserMessages = await getMessagesByUser(testUser);
			const lastMessage = updatedUserMessages.slice(-1)[0];


			expect(testUserMessages.length + 1).toBe(updatedUserMessages.length);
			expect(lastMessage.textContent).toBe(message);
		});
	});
});
