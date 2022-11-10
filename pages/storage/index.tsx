import { Box, Col, Row } from '../../components/Flex';
import { Heading1, Paragraph } from '../../components/Text';
import FileDragAndDrop from '../../components/FileDropzone';
import Layout from '../../components/Layout';
import {
	ref,
	StorageReference,
	uploadBytes,
	getDownloadURL,
} from 'firebase/storage';
import { storage } from '../../lib/firebase-config';
import { useState } from 'react';
import { Card } from '../../components/Card';
import { Icon } from '@iconify/react';
import { useTheme } from '@emotion/react';
import { IconButton } from '../../components/Buttons';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../../components/Loader';

const UploadFilePage = () => {
	const theme = useTheme();
	const [uploadedFile, setUploadedFile] = useState<StorageReference | null>(
		null
	);
	const [downloadUrl, setDownloadUrl] = useState('');
	const [uploading, setUploading] = useState(false);

	const handleFileChange = async (file: File) => {
		try {
			setUploading(true);
			setUploadedFile(null);
			const fileRef = ref(storage, file.name);
			await uploadBytes(fileRef, file);
			setUploadedFile(fileRef);
			const url = await getDownloadURL(fileRef);
			setDownloadUrl(url);
		} catch (err) {
			console.error(err);
		} finally {
			setUploading(false);
		}
	};

	return (
		<Layout>
			<Box p={5} style={{ minHeight: '100vh' }}>
				<Col items="center" content="center" gap={5}>
					<Box style={{ width: 320 }}>
						<Col items="center" content="center">
							<Heading1>Upload some files</Heading1>
							<FileDragAndDrop
								types={['pdf', 'png']}
								onChange={handleFileChange}
							/>
						</Col>
					</Box>

					<AnimatePresence>
						{uploading && (
							<motion.div
								initial={{ opacity: 0, y: 0, height: 0 }}
								animate={{ opacity: 1, y: 100, height: 100 }}
								exit={{ opacity: 0, y: 0, height: 0 }}
							>
								<Loader />
							</motion.div>
						)}

						{uploadedFile && (
							<motion.div
								initial={{ opacity: 0, paddingTop: 50 }}
								animate={{ opacity: 1, paddingTop: 0 }}
								exit={{ opacity: 0, paddingTop: 50 }}
							>
								<Card style={{ width: 400 }}>
									<Box p={4}>
										<Col>
											<Row style={{ height: 300 }}>
												<Icon
													icon="ri:checkbox-circle-line"
													fontSize={200}
													color={theme.color.positive}
												/>
											</Row>

											<Heading1>Your file is saved.</Heading1>

											<Col>
												<Paragraph>Download it</Paragraph>

												<Link href={downloadUrl}>
													<IconButton style={{ width: 100, height: 100 }}>
														<Icon icon="ri:download-line" fontSize={60} />
													</IconButton>
												</Link>
											</Col>
										</Col>
									</Box>
								</Card>
							</motion.div>
						)}
					</AnimatePresence>
				</Col>
			</Box>
		</Layout>
	);
};

export default UploadFilePage;
