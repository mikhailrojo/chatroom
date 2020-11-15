import React, {useState, useEffect} from 'react';

import {getUsers, getMessagesByUser, registerNewMessage} from './utils';

import {Users} from '../Users';
import {History} from '../History';
import {MessageBox} from '../MessageBox';

/** Room for users, history and message box */
export const ChatRoom = () => {
	const [state, setState] = useState({
		users: [],
		selectedUserId: null,
		messages: []
	});
	const {selectedUserId, messages, users} = state;

	/** On first render we get users and first user history */
	useEffect(() => {
		(async() => {
			const users = await getUsers();
			if (!users.length) return;

			const selectedUserId = users[0].id;
			const messages = await getMessagesByUser(selectedUserId);
			setState({
				messages,
				users,
				selectedUserId
			});
		})();
	}, []);

	/** On user new message */
	const onNewMessage = async(message) => {
		await registerNewMessage({message, selectedUserId});
		const messages = await getMessagesByUser(selectedUserId);

		setState((prevState) => ({...prevState, messages}));
	};

	/** when user selects a friend */
	const onUserSelection = (selectedUserId: number) => async() => {
		const messages = await getMessagesByUser(selectedUserId);

		setState((prevState) => ({...prevState, selectedUserId, messages}));
	};

	return (<div>
		<Users
			users={users}
			onUserSelection={onUserSelection}
			selectedUserId={selectedUserId}
		/>
		<History messages={messages} />
		<MessageBox onSubmit={onNewMessage} />
	</div>);
};
