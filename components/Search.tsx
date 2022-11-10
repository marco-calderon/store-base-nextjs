import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Icon } from '@iconify/react';

const Container = styled.div`
	border-radius: 48px;
	background-color: ${({ theme }) => theme.background.default};
	display: flex;
	flex-direction: row;
	align-items: center;
	color: ${({ theme }) => theme.color.text};
	gap: 8px;
	width: 210px;
	padding: 16px 24px;
`;

const Search = () => {
	return (
		<Container>
			<Icon icon="ri:search-line" fontSize={16} /> Search
		</Container>
	);
};

export default Search;
