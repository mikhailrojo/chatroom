import React from 'react';
import {Message} from '../ChatRoom/types';

type Props = {messages: Message[]};

/** history of messages */
export const History = ({messages}: Props) => <div>
	{
		messages.map(msg => <div key={msg.id}>{msg.textContent}</div>)
	}
</div>;
