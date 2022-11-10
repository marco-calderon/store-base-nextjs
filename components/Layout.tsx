import React from 'react';
import styled from '@emotion/styled';
import Navbar from './Navbar';

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.background.default};
	height: 108px;
`;

const MainContainer = styled.div`
	width: 100%;
	position: relative;
	padding-top: 108px;
	background-color: ${({ theme }) => theme.background.default};
`;

export type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<LayoutContainer>
			<Navbar />
			<MainContainer>{children}</MainContainer>
		</LayoutContainer>
	);
};

export default Layout;
