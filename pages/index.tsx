import styled from '@emotion/styled';
import { Button, PrimaryButton } from '../components/Buttons';
import { Card } from '../components/Card';
import { Box, Col, Row } from '../components/Flex';
import Layout from '../components/Layout';
import { Heading1, Heading2, Heading5, Paragraph } from '../components/Text';
import { GetStaticProps } from 'next';
import { fileData } from '../lib/data/files.data';
import { FileModel } from '../lib/models/file.model';
import Image from 'next/image';
import { css } from '@emotion/react';
import Link from 'next/link';
import { StorageReference, getDownloadURL, list, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../lib/firebase-config';

const Hero = styled.div`
	width: 100%;
	padding: 64px;
	background-color: #3b15e6;
	border-radius: 20px;
`;

const RoundedImg = css`
	width: 100%;
	border-radius: 16px;
	background-position: center;
	object-fit: cover;
	height: 300px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	gap: 16px;

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		grid-template-columns: repeat(4, 1fr);
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;

const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * max);
};

export type HomePageProps = {
	files: FileModel[];
};

const HomePage = ({ files }: HomePageProps) => {
	const [uploadedFiles, setUploadedFiles] = useState<StorageReference[]>([]);

	useEffect(() => {
		const perform = async () => {
			try {
				const listRef = ref(storage, '/');
				const recents = await list(listRef, { maxResults: 10 });
				setUploadedFiles(recents.items);
			} catch (err) {
				console.error(err);
			}
		};

		perform();
	}, []);

	return (
		<Layout>
			<Box p={5} style={{ width: '100%' }}>
				<Col gap={2}>
					{/* Hero */}
					<Hero>
						<Row
							items="center"
							style={{ width: '100%', flexWrap: 'wrap' }}
							gap={3}
						>
							<Col style={{ maxWidth: 400 }}>
								<Heading1 color="#fff">
									Save files and retrieve them later. Without the hassle.
								</Heading1>

								<Paragraph color="#fff">
									Minim eu cupidatat exercitation commodo aliquip. Excepteur
									velit magna in anim. Nulla laboris reprehenderit reprehenderit
									sit cillum cupidatat fugiat et amet deserunt. Irure pariatur
									nostrud non sint anim excepteur quis nulla labore duis ad
									consectetur. Deserunt elit proident in nisi tempor cupidatat.
									Aliquip id Lorem commodo cillum dolor commodo.
								</Paragraph>

								<Row
									style={{ paddingTop: 40 }}
									gap={2}
									items="center"
									content="start"
								>
									<PrimaryButton>Get started</PrimaryButton>

									<Button>Watch video</Button>
								</Row>
							</Col>

							<Box style={{ flex: 1 }}>
								<Col items="center" content="center">
									<Link href="/storage">
										<Button background="#11047A">
											<Heading1 color="#fff" style={{ margin: 16 }}>
												Go to my vault
											</Heading1>
										</Button>
									</Link>
								</Col>
							</Box>
						</Row>
					</Hero>

					{/* Card container */}
					<Col>
						<Heading2>Recently uploaded</Heading2>

						<Grid>
							{uploadedFiles &&
								uploadedFiles.map((f) => (
									<Card key={f.toString()} style={{ flex: 1 }}>
										<Box p={2}>
											<Col>
												<Box
													style={{
														position: 'relative',
														width: '100%',
														height: 300,
													}}
												>
													<Image
														alt="File image"
														src={`/img/${getRandomInt(6) + 1}.png`}
														layout="fill"
														objectFit="cover"
														css={RoundedImg}
													/>
												</Box>

												<Heading5>{f.name}</Heading5>
											</Col>
										</Box>
									</Card>
								))}
						</Grid>
					</Col>

					<Col>
						<Heading2>Relevant</Heading2>

						<Grid>
							{files &&
								files.slice(0, 3).map((f) => (
									<Card key={f.id} style={{ flex: 1 }}>
										<Box p={2}>
											<Col>
												<Box
													style={{
														position: 'relative',
														width: '100%',
														height: 300,
													}}
												>
													<Image
														alt="File image"
														src={f.imgUrl}
														layout="fill"
														objectFit="cover"
														css={RoundedImg}
													/>
												</Box>

												<Heading5>{f.title}</Heading5>
												<Paragraph>{f.description}</Paragraph>
											</Col>
										</Box>
									</Card>
								))}
						</Grid>
					</Col>

					<Col>
						<Heading2>Popular</Heading2>

						<Grid>
							{files &&
								files.slice(3, 6).map((f) => (
									<Card key={f.id} style={{ flex: 1 }}>
										<Box p={2}>
											<Col>
												<Box
													style={{
														position: 'relative',
														width: '100%',
														height: 300,
													}}
												>
													<Image
														alt="File image"
														src={f.imgUrl}
														layout="fill"
														objectFit="cover"
														css={RoundedImg}
													/>
												</Box>

												<Heading5>{f.title}</Heading5>
												<Paragraph>{f.description}</Paragraph>
											</Col>
										</Box>
									</Card>
								))}
						</Grid>
					</Col>
				</Col>
			</Box>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {
			files: fileData,
		},
	};
};

export default HomePage;
