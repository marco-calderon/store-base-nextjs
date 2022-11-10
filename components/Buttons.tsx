import styled from '@emotion/styled';

export const IconButton = styled.button`
	background: none;
	color: ${({ theme }) => theme.color.text};
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	border-radius: 50%;
	transition: background-color ease-in-out 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;

	&:hover {
		background-color: rgba(230, 230, 230, 0.2);
	}
`;

export const Button = styled.button<{ background?: string }>`
	background: none;
	color: inherit;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	border-radius: 16px;
	transition: background-color ease-in-out 0.1s;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ background }) => background ?? 'transparent'};
	font-size: 14px;
	line-height: 24px;
	padding: 8px 16px;
	color: #e9e3ff;

	&:hover {
		background-color: rgba(230, 230, 230, 0.1);
	}
`;

export const PrimaryButton = styled(Button)`
	background-color: #fff;
	color: #000;

	&:hover {
		background-color: rgba(255, 255, 255, 0.9);
	}
`;
