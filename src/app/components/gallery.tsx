import React, { useEffect, useState } from 'react';
import { fetchImgData } from '@/services/apis';
import { useSearchParams } from '../../../node_modules/next/navigation';

function Gallery() {
	const searchParams = useSearchParams();
	const [images, setImages] = useState([] as any[]);
	const [placeholderMsg, setPlaceholderMsg] = useState('loading');
	console.log(images);

	useEffect(() => {
		fetchImgData(searchParams.get('uid'), (resp) => {
			setImages(resp.data.map((el) => el.url));
			setPlaceholderMsg('You have no images uploaded, go back to upload more.');
		});
	}, [images]);

	return (
		<div className='flex flex-col w-full'>
			<div className='font-bold font-5xl'>Welcome to the Gallery</div>
			{images.length > 0 ? (
				<div className='flex space-x-2 flex-wrap mx-auto'>
					{images.map((url) => (
						<div className='w-64'>
							<img className='w-full rounded-lg' src={url} alt='new' />
						</div>
					))}
				</div>
			) : (
				<div className='font-bold'>{placeholderMsg}</div>
			)}
		</div>
	);
}

export default Gallery;
