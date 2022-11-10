import { useContext } from 'react';
import styled from '@emotion/styled';
import { Heading1 } from './Text';
import { Box, FlexRow, Row, Spacing } from './Flex';
import Search from './Search';
import { IconButton } from './Buttons';
import { Icon } from '@iconify/react';
import ThemeToggleContext from '../lib/themes/theme-toggle.context';
import { useTheme } from '@emotion/react';
import Link from 'next/link';

const RightBar = styled.div`
	border-radius: 32px;
	background-color: ${({ theme }) => theme.background.level1};
`;

const Navbar = () => {
	const theme = useTheme();
	const { isDarkTheme, toggleTheme } = useContext(ThemeToggleContext);

	const handleChangeTheme = () => {
		toggleTheme();
	};

	return (
		<Row
			style={{
				width: '100%',
				position: 'fixed',
				backdropFilter: 'blur(5px)',
				zIndex: 10,
				backgroundColor: `${theme.background.default}33`,
			}}
		>
			<Box px={4} pt={3} style={{ width: '100%' }}>
				<FlexRow items="center">
					<Link href="/">
						<Heading1>StoreBase</Heading1>
					</Link>

					<Spacing />

					<RightBar>
						<Box m={1}>
							<Row gap={1}>
								<Search />

								<IconButton>
									<Icon icon="ri:notification-line" fontSize={16} />
								</IconButton>

								<IconButton onClick={handleChangeTheme}>
									{!isDarkTheme ? (
										<Icon icon="ri:moon-line" fontSize={16} />
									) : (
										<Icon icon="ri:sun-line" fontSize={16} />
									)}
								</IconButton>

								<IconButton>
									<Icon icon="ri:information-line" fontSize={16} />
								</IconButton>
							</Row>
						</Box>
					</RightBar>
				</FlexRow>
			</Box>
		</Row>
	);
};

export default Navbar;
