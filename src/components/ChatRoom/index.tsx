import React, {useState, useEffect} from 'react';

import {getUsers, getMessagesByUser, registerNewMessage} from './utils';

import {
	StyledChatRoom,
	GlobalStyle,
	StyledUsers,
	StyledHistory,
	StyledMessageAndHistory
} from './styled';
import {getCurrentUser} from './utils';
import {MessageBox} from '../MessageBox';
import {User} from './types';

/** Room for users, history and message box */
export const ChatRoom = () => {
	const [state, setState] = useState({
		users: [],
		currentUser: null,
		selectedUser: null,
		messages: []
	});
	const {selectedUser, messages, users, currentUser} = state;

	/** On first render we get users and current user history */
	useEffect(() => {
		(async() => {
			const users = await getUsers();
			const currentUser = await getCurrentUser();
			if (!users.length) return;

			const selectedUser = users[0];
			const messages = await getMessagesByUser(selectedUser);
			setState({
				messages,
				users,
				currentUser,
				selectedUser
			});
		})();
	}, []);

	/** On user new message */
	const onNewMessage = async(message) => {
		const toUser = users.find(user => user.id === selectedUser.id);
		await registerNewMessage({message, toUser, fromUser: currentUser});
		const messages = await getMessagesByUser(selectedUser);

		setState((prevState) => ({...prevState, messages}));
	};

	/** when current user selects a friend */
	const onUserSelection = (selectedUser: User) => async() => {
		const messages = await getMessagesByUser(selectedUser);

		setState((prevState) => ({...prevState, selectedUser, messages}));
	};

	return (<StyledChatRoom>
		<GlobalStyle />
		<StyledUsers
			users={users}
			onUserSelection={onUserSelection}
			selectedUser={selectedUser}
		/>
		<StyledMessageAndHistory>
			<StyledHistory
				messages={messages}
				selectedUser={selectedUser}
			/>
			<MessageBox onSubmit={onNewMessage} />
		</StyledMessageAndHistory>
	</StyledChatRoom>);
};
