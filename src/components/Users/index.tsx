import React from 'react';
import {User} from '../ChatRoom/types';
import {StyledUser, StyledUserList, StyledUserTitle} from './styled';

type Props = {
	users: User[];
	onUserSelection: (user: User) => () => void;
	selectedUser: User;
};

/** users to whom a message can be sent */
export const Users = ({users, onUserSelection, selectedUser, ...rest}: Props) => (<div {...rest}>
	<StyledUserTitle>Users</StyledUserTitle>
	<StyledUserList>
		{
			users.map(user => <StyledUser
				key={user.id}
				onClick={onUserSelection(user)}
				active={selectedUser.id === user.id}
			>{user.name}</StyledUser>)}
	</StyledUserList>
</div>);
