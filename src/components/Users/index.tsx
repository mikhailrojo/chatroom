import React from 'react';
import {User} from '../ChatRoom/types';

type Props = {
	users: User[];
	onUserSelection: (n: number) => () => void;
	selectedUserId: number;
};

/** users to whom a message can be sent */
export const Users = ({users, onUserSelection, selectedUserId}: Props) => (<div>
	{
		users.map(usr => <div
			key={usr.id}
			onClick={onUserSelection(usr.id)}
			style={{
				color: selectedUserId === usr.id ? 'red' : ''
			}}
		>{usr.name}</div>)}
</div>);
