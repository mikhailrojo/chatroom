import React from 'react';

type Props = {
	onSubmit: (s: string) => void;
}

/** Input for new messages */
export const MessageBox = (props: Props) => (<div>
	<form
		onSubmit={(e: React.FormEvent) => {
			e.preventDefault();
			if (e.target[0].value) {
				props.onSubmit(e.target[0].value);
				e.target[0].value = '';
			}
		}}
	>
		<input
			name='new-message'
			type='text'
		/>
	</form>
</div>);
