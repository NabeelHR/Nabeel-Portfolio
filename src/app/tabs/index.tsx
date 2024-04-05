'use client'; // This is a client component 👈🏽
import React, { useState } from 'react';
import { Tab } from '../components/tab';
import { useRouter } from '../../../node_modules/next/navigation';

export const Tabs = () => {
	const router = useRouter();
	const [active, setActive] = useState('');
	// const tabNames: String[] = ['Personal blog', 'Projects', 'About'];
	const tabNames: { [name: string]: string } = {
		'Personal Blog': '/blog',
		Projects: '/projects',
		About: '/about',
	};
	return (
		<div className='flex bg-primary  w-full h-32 fixed'>
			<div className='flex bg-primary h-32 py-4 pl-2 justify-between w-full'>
				<div
					className='font-bold h-20 pl-4 pt-4 text-2xl text-white hover:cursor-pointer'
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
		</div>
	);
};
export default Tabs;
