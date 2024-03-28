'use client'; // This is a client component 👈🏽
import React from 'react';
import { Tab } from '../components/tab';
import { useRouter } from '../../../node_modules/next/navigation';

export const Tabs = () => {
	const router = useRouter();
	// const tabNames: String[] = ['Personal blog', 'Projects', 'About'];
	const tabNames: { [name: string]: string } = {
		'Personal Blog': '/blog',
		Projects: '/projects',
		About: '/about',
	};
	return (
		<div className='flex bg-primary  w-full h-32'>
			<div className='flex bg-primary  w-full h-32 py-4 pl-2 justify-between md:w-3/4'>
				<div
					className='font-bold h-20 pt-4 text-2xl text-white hover:cursor-pointer'
					onClick={() => {
						router.push('/home');
					}}>
					Nabeel Rizvi
				</div>
				<div className='flex '>
					{Object.keys(tabNames).map((title: string, id) => (
						<Tab
							id={id}
							title={title}
							onClick={() => {
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
