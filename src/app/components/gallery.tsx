import React, { useEffect, useState } from 'react';
import { fetchImgData } from '@/services/apis';
import { useSearchParams } from '../../../node_modules/next/navigation';

function Gallery() {
	const searchParams = useSearchParams();
	const [images, setImages] = useState([] as any[]);
	const [placeholderMsg, setPlaceholderMsg] = useState('loading');
	console.log(images);

	/* eslint no-use-before-define: 0 */ // --> OFF
	useEffect(() => {
		/* eslint-disable */
		fetchImgData(searchParams.get('uid'), (resp) => {
			/* eslint-enable */
			setImages(resp.data.map((el: any) => el.url));
			setPlaceholderMsg('You have no images uploaded, go back to upload more.');
		});
	}, [images]);
	/* eslint no-use-before-define: 2 */ // --> ON

	return (
		<div className='flex flex-col w-full'>
			<div className='font-bold font-5xl'>Welcome to the Gallery</div>
			{images.length > 0 ? (
				<div className='flex space-x-2 flex-wrap mx-auto'>
					{images.map((url, i) => (
						<div className='w-64' key={`${i}`}>
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
