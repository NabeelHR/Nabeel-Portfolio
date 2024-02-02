'use client'; // This is a client component 👈🏽

import React, { useState } from 'react';
import Button from '../components/button';
import UploadAndDisplayImage from '../components/image';
import Gallery from '../components/gallery';
import { useRouter } from '../../../node_modules/next/navigation';

function Profile() {
	const [view, setView] = useState('upload');
	const [label, setLabel] = useState('View Saved Photos');
	const router = useRouter();

	const toggle = () => {
		if (view == 'display') {
			setView('upload');
			setLabel('View Saved Photos');
		} else {
			setView('display');
			setLabel('Upload more photos');
		}
	};
	return (
		<div className='flex px-4 flex-col mx-auto'>
			<div className='w-32 place-self-end	'>
				<Button
					label='logout'
					custom='bg-red-800'
					onClick={() => router.push(`/login`)}
				/>
			</div>
			<div className='flex space-x-8 w-2/3 mx-auto'>
				<div>Welcome to you your photo management app!</div>
				<div>
					Or click here to view your past uploads!
					<Button label={label} onClick={() => toggle()} />
				</div>
			</div>

			<div>{view === 'upload' ? <UploadAndDisplayImage /> : <Gallery />}</div>
		</div>
	);
}

export default Profile;
