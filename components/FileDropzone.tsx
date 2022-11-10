import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import styled from '@emotion/styled';
import { FileModel } from '../lib/models/file.model';
import { Bold, Paragraph } from './Text';

const ExternalContainer = styled.div`
	width: 100%;
`;

const Container = styled.div`
	width: 100%;
	height: 66px;
	border: 1px solid rgba(228, 230, 232, 0.6);
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export type FileUploaderProps = {
	onSelect?: (file: File) => void;
	onDrop?: (file: File) => void;
};

export type FileDragAndDropProps = {
	onChange?: (file: File) => void;
	types?: string[];
	files?: FileModel | FileModel[] | File | File[];
} & FileUploaderProps;

const FileDragAndDrop = ({
	onChange,
	types,
	onDrop,
	onSelect,
}: FileDragAndDropProps) => {
	const [key, setKey] = useState(1);

	const handleOnChange = (file: File) => {
		setKey(key + 1);
		onChange && onChange(file);
	};

	const handleOnSelect = (file: File) => {
		setKey(key + 1);
		onSelect && onSelect(file);
	};

	return (
		<ExternalContainer>
			<FileUploader
				key={key}
				handleChange={handleOnChange}
				name="file"
				types={types}
				file={null}
				files={null}
				onDrop={onDrop}
				onSelect={handleOnSelect}
			>
				<Container>
					<Paragraph>
						<Bold>Drag a PDF or Click to Browse</Bold>
					</Paragraph>
				</Container>
			</FileUploader>
		</ExternalContainer>
	);
};

export default FileDragAndDrop;
