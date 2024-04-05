'use client'; // This is a client component 👈🏽
import React, { useState } from 'react';
import { Tab } from '../components/tab';
import { useRouter } from '../../../node_modules/next/navigation';

export const Tabs = () => {
	const router = useRouter();
	const [active, setActive] = useState('');
	const tabNames: { [name: string]: string } = {
		'Personal Blog': '/blog',
		Professional: '/professional',
		About: '/about',
	};
	return (
		<div className='flex flex-col sm:flex-row bg-primary sm:h-32 py-4 pl-2 justify-between w-full fixed'>
			<div
				className='font-bold h-20 pl-4 pt-4 text-4xl text-white hover:cursor-pointer'
				onClick={() => {
					setActive('');
					router.push('/home');
				}}>
				Nabeel Rizvi
			</div>
			<div className='flex md:pr-32'>
				{Object.keys(tabNames).map((title: string, id) => (
					<Tab
						key={id}
						active={active}
						title={title}
						onClick={() => {
							setActive(title);
							router.push(tabNames[title]);
						}}
					/>
				))}
			</div>
		</div>
	);
};
export default Tabs;
