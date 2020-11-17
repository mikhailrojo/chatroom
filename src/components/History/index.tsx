import React, {useEffect} from 'react';
import {Message} from '../ChatRoom/types';

import {StyledHistoryBox, StyledHistoryLine, StyledHistoryTitle} from './styled';
import {User} from '../ChatRoom/types';

type Props = {
	messages: Message[];
	selectedUser: User;
};

/** history of messages */
export const History = ({messages, selectedUser, ...rest}: Props) => {
	const fieldRef = React.useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (fieldRef.current) {
			// scroll down to the last message
			fieldRef.current.scrollIntoView({ block: 'end'});
		}
	});

	return (<div {...rest} >
		<StyledHistoryTitle>{!selectedUser ? '' : `Messages for ${selectedUser.name}`}</StyledHistoryTitle>
		<StyledHistoryBox ref={fieldRef}>
			{
				messages.map(msg => <StyledHistoryLine key={msg.id}><b>{msg.authorName}</b>: {msg.textContent}</StyledHistoryLine>)
			}
		</StyledHistoryBox>
	</div>);
}
