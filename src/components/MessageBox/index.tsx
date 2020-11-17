import React from 'react';

import {StyledInput} from './styled';

type Props = {
	onSubmit: (s: string) => void;
}

/** Input for new messages */
export const MessageBox = ({onSubmit, ...rest}: Props) => (<div {...rest}>
	<form
		onSubmit={(e: React.FormEvent) => {
			e.preventDefault();
			if (e.target[0].value) {
				onSubmit(e.target[0].value);
				e.target[0].value = '';
			}
		}}
	>
		<StyledInput
			name='new-message'
			type='text'
			placeholder='Enter you message'
		/>
	</form>
</div>);
