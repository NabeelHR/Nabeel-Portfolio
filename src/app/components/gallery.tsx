import React, { useEffect, useState, Suspense } from 'react';
import { fetchImgData } from '@/services/apis';
import { useSearchParams } from '../../../node_modules/next/navigation';

function Gallery() {
	const searchParams = useSearchParams();
	const [images, setImages] = useState([] as any[]);
	const [placeholderMsg, setPlaceholderMsg] = useState('loading');
	console.log(images);

	useEffect(() => {
		fetchImgData(searchParams.get('uid'), (resp: any) => {
			setImages(resp.data.map((el: any) => el.url));
			setPlaceholderMsg('You have no images uploaded, go back to upload more.');
		});
	}, []);

	return (
		<div className='flex flex-col w-full mt-4'>
			<div className='font-bold font-5xl'>Welcome to the Gallery</div>
			{images.length > 0 ? (
				<div className='flex flex-wrap mx-auto'>
					{images.map((url, i) => (
						<div className='w-64 m-2' key={`${i}`}>
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
const Wrapper = () => (
	<Suspense fallback={<div>Loading data... You may not be logged</div>}>
		<Gallery />
	</Suspense>
);
export default Wrapper;
