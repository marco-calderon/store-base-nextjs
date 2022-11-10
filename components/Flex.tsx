import { css } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { CSSProperties } from 'react';

export const Flex = styled.div<{
	direction?: 'row' | 'column';
	items?: 'center' | 'start' | 'end' | 'stretch';
	content?: 'center' | 'start' | 'end' | 'space-between' | 'stretch';
	gap?: number;
}>`
	display: flex;
	flex-direction: ${({ direction }) => direction ?? 'row'};
	align-items: ${({ items }) => items ?? 'center'};
	justify-content: ${({ content }) => content ?? 'center'};
	gap: ${({ gap }) => (gap ?? 0) * 8}px;
`;

export type FlexProps = {
	style?: CSSProperties;
	items?: 'center' | 'start' | 'end' | 'stretch';
	content?: 'center' | 'start' | 'end' | 'space-between' | 'stretch';
	gap?: number;
	children?: React.ReactNode;
	// eslint-disable-next-line react/no-unused-prop-types
	onClick?: () => void;
};

export const FlexRow = ({
	style,
	items,
	content,
	gap,
	children,
	onClick,
}: FlexProps) => (
	<Flex
		style={{ width: '100%', ...style }}
		direction="row"
		items={items ?? 'start'}
		content={content ?? 'start'}
		gap={gap}
		onClick={onClick}
	>
		{children}
	</Flex>
);

FlexRow.defaultProps = {
	style: {},
	items: 'center',
	content: 'center',
	gap: 0,
	children: null,
	onClick: () => {},
};

export const Row = FlexRow;

Row.defaultProps = {
	style: {},
	items: 'center',
	content: 'center',
	gap: 0,
	children: null,
	onClick: () => {},
};

export const FlexCol = ({
	style,
	items,
	content,
	gap,
	children,
}: FlexProps) => (
	<Flex
		style={{ width: '100%', ...style }}
		direction="column"
		items={items ?? 'start'}
		content={content ?? 'start'}
		gap={gap}
	>
		{children}
	</Flex>
);

FlexCol.defaultProps = {
	style: {},
	items: 'center',
	content: 'center',
	gap: 0,
	children: null,
	onClick: () => {},
};

export const Col = FlexCol;

Col.defaultProps = {
	style: {},
	items: 'center',
	content: 'center',
	gap: 0,
	children: null,
	onClick: () => {},
};

export const Box = styled.div<{
	p?: number;
	px?: number;
	py?: number;
	pt?: number;
	pb?: number;
	ps?: number;
	pe?: number;
	m?: number;
	mx?: number;
	my?: number;
	mt?: number;
	mb?: number;
	ms?: number;
	me?: number;
}>`
	padding: ${({ p }: { p?: number }) => (p ? p * 8 : 0)}px;

	${({ px }) =>
		px &&
		css`
			padding-left: ${px ? px * 8 : 0}px;
			padding-right: ${px ? px * 8 : 0}px;
		`}

	${({ py }) =>
		py &&
		css`
			padding-top: ${py ? py * 8 : 0}px;
			padding-bottom: ${py ? py * 8 : 0}px;
		`}

  ${({ pt }) =>
		pt &&
		css`
			padding-top: ${pt ? pt * 8 : 0}px;
		`}

  ${({ pb }) =>
		pb &&
		css`
			padding-bottom: ${pb ? pb * 8 : 0}px;
		`}

  ${({ ps }) =>
		ps &&
		css`
			padding-start: ${ps ? ps * 8 : 0}px;
			padding-left: ${ps ? ps * 8 : 0}px;
		`}

  ${({ pe }) =>
		pe &&
		css`
			padding-end: ${pe ? pe * 8 : 0}px;
			padding-right: ${pe ? pe * 8 : 0}px;
		`}

  margin: ${({ m }: { m?: number }) => (m ? m * 8 : 0)}px;

	${({ mx }) =>
		mx &&
		css`
			margin-left: ${mx ? mx * 8 : 0}px;
			margin-right: ${mx ? mx * 8 : 0}px;
		`}

	${({ my }) =>
		my &&
		css`
			margin-top: ${my ? my * 8 : 0}px;
			margin-bottom: ${my ? my * 8 : 0}px;
		`}

  ${({ mt }) =>
		mt &&
		css`
			padding-top: ${mt ? mt * 8 : 0}px;
		`}

  ${({ mb }) =>
		mb &&
		css`
			padding-bottom: ${mb ? mb * 8 : 0}px;
		`}

  ${({ ms }) =>
		ms &&
		css`
			padding-start: ${ms ? ms * 8 : 0}px;
			padding-left: ${ms ? ms * 8 : 0}px;
		`}

  ${({ me }) =>
		me &&
		css`
			padding-end: ${me ? me * 8 : 0}px;
			padding-right: ${me ? me * 8 : 0}px;
		`}
`;

export const Spacing = styled.div`
	flex: 1;
`;
