import styled from 'styled-components';
import {MessageBox} from '../MessageBox';

export const StyledInput = styled.input`
	width: 100%;
	outline: none;	
	border:none;
	background-image:none;
	background-color:transparent;
	box-shadow: none;
	padding: 10px 20px;
	color: inherit;
	font-size: 1em;
	line-height: 40px;
	font-family: monospace;
	border: 1px solid;
	box-sizing: border-box;
	
	&:focus {
		border-color: red;
	}
`;
