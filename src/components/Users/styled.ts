import styled from 'styled-components';
import {MessageBox} from '../MessageBox';

export const StyledUserList = styled.ul`
	list-style-type: none;
	padding-inline-start: 0;
`;

export const StyledUser = styled.li<{active: boolean}>`
	cursor: pointer;
	color: ${({active}) => active ? 'red': 'inherit'};
	margin-bottom: 0.5em;
`;

export const StyledUserTitle = styled.div`
	font-weight: bold;
`;
