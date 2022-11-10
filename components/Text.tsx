import styled from '@emotion/styled';

export const Heading1 = styled.h1<{ color?: string }>`
	color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Heading2 = styled.h2`
	color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Heading3 = styled.h3`
	color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Heading4 = styled.h4`
	color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Heading5 = styled.h5`
	color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Heading6 = styled.h6`
	color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Paragraph = styled.p`
	color: ${({ color, theme }) => color ?? theme.color.text};
`;

export const Bold = styled.b`
	color: ${({ color, theme }) => color ?? theme.color.text};
	font-weight: bold;
`;
