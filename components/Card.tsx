import styled from '@emotion/styled';

export const Card = styled.div`
	border-radius: 24px;
	background-color: ${({ theme }) => theme.background.level1};
	transition: box-shadow ease-in-out 0.2s;

	&:hover {
		box-shadow: 0px 18px 40px rgba(112, 144, 176, 0.12);
	}
`;
