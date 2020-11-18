import styled, {createGlobalStyle} from 'styled-components';

import {Users} from '../Users';
import {History} from '../History';
import {MessageBox} from '../MessageBox';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		background-color: rgb(44, 48, 58);
		color: rgb(192, 197, 205);
		font-size: 1.5em;
		font-family: monospace;
	}
	
	#app {
		height: 100vh;
		padding: 20px;
		box-sizing: border-box;
	}
`;

export const StyledChatRoom = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
`;

export const StyledUsers = styled(Users)`
	border: 1px solid;
	padding: 30px;
	margin: 0 30px 0 0;
	flex: 1;
	
	@media (max-width: 720px) {
		margin: 0;
	}
`;

export const StyledHistory = styled(History)`
	border: 1px solid;
	height: 100%;
	padding: 20px;
	border-bottom-color: transparent;
	overflow: auto;
`;

export const StyledMessageAndHistory = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 5;
	flex-basis: auto;
`;
