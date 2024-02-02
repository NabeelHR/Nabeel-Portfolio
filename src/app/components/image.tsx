import React, { useState } from 'react';
import Button from './button';
// import { uploadImg } from '@/services/storage';
import { uploadImage } from '@/services/apis';

const UploadAndDisplayImage = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const onUpload = (event: any) => {
		console.log(event.target.files[0]);
		console.log(event.target.files[0]);
		setSelectedImage(event.target.files[0]);
		uploadImage(event.target.files[0], 'test@test.com');
		// uploadImg(event.target.files[0], (_) => {});
	};

	return (
		<div>
			<div>Upload and Display Image </div>

			{selectedImage && (
				<div className='space-y-2 py-2'>
					<img
						alt='not found'
						width={'250px'}
						src={URL.createObjectURL(selectedImage)}
					/>
					<Button label='Remove' onClick={() => setSelectedImage(null)} />
				</div>
			)}

			<input type='file' name='myImage' onChange={onUpload} />
		</div>
	);
};

export default UploadAndDisplayImage;
