import React, { useState, Suspense } from 'react';
import Button from './button';
import { uploadImg } from '@/services/storage';
import { uploadImgData } from '@/services/apis';
import { useSearchParams } from '../../../node_modules/next/navigation';

const UploadAndDisplayImage = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [displayMsg, setDisplayMsg] = useState('Upload and Display Image');
	const searchParams = useSearchParams();
	console.log(searchParams.get('uid'));

	const onUpload = (event: any) => {
		console.log(event.target.files[0]);
		console.log(event.target.files[0]);
		setSelectedImage(event.target.files[0]);
		setDisplayMsg('uploading');
		uploadImg(event.target.files[0], (url: string) => {
			uploadImgData(searchParams.get('uid'), url);
			setDisplayMsg('Image uploaded! Upload more');
		});
	};

	return (
		<div className='flex flex-col border border-solid rounded-md my-4 border-green-600 min-h-64 h-auto p-4'>
			<div className='mx-auto'>{displayMsg}</div>

			{selectedImage && (
				<div className='space-y-2 py-2'>
					<img
						alt='not found'
						width={'250px'}
						src={URL.createObjectURL(selectedImage)}
					/>
				</div>
			)}

			<input
				className=' file:bg-primary file:bg-primaryHov file:text-primaryText file:rounded-md'
				type='file'
				name='myImage'
				onChange={onUpload}
			/>
		</div>
	);
};
const Wrapper = () => (
	<Suspense fallback={<div>Loading data... You may not be logged</div>}>
		<UploadAndDisplayImage />
	</Suspense>
);
export default Wrapper;
