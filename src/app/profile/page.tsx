'use client'; // This is a client component 👈🏽

import React from 'react';
import UploadAndDisplayImage from '../components/image';
function Profile() {
	return (
		<div className='flex flex-col mx-auto'>
			<div>Welcome to you your photo management app!</div>
			<div>
				<UploadAndDisplayImage />
			</div>
		</div>
	);
}

export default Profile;
