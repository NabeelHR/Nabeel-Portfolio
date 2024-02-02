'use client'; // This is a client component 👈🏽

import React, { useState } from 'react';
import Button from '../components/button';
import UploadAndDisplayImage from '../components/image';
import Gallery from '../components/gallery';

function Profile() {
	const [view, setView] = useState('upload');
	const [label, setLabel] = useState('Saved Photos');
	// console.log(props);
	const toggle = (e) => {
		if (view == 'display') {
			setView('upload');
			setLabel('Saved Photos');
		} else {
			setView('display');
			setLabel('Upload more photos');
		}
	};
	return (
		<div className='flex flex-col mx-auto'>
			<div className='flex space-x-8 w-2/3 mx-auto'>
				<div>Welcome to you your photo management app!</div>
				<div>
					Or Click here to view your past uploads!
					<Button label={label} onClick={toggle} />
				</div>
			</div>

			<div>{view === 'upload' ? <UploadAndDisplayImage /> : <Gallery />}</div>
		</div>
	);
}

export default Profile;
