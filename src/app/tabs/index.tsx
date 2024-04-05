'use client'; // This is a client component 👈🏽
import React, { useState } from 'react';
import { Tab } from '../components/tab';
import { useRouter } from '../../../node_modules/next/navigation';

export const Tabs = () => {
	const router = useRouter();
	const [active, setActive] = useState('');
	const [visible, setVisible] = useState(false);
	const tabNames: { [name: string]: string } = {
		'Personal Blog': '/blog',
		Professional: '/professional',
		About: '/about',
	};
	const toggle = () => {
		setVisible(!visible);
		console.log('boop', visible);
	};
	return (
		<div className='flex flex-col sm:flex-row bg-primary sm:h-32 py-4 pl-2 justify-between w-full fixed'>
			<div className='flex w-full'>
				<div
					className='font-bold h-20 pl-4 pt-4 text-4xl text-white hover:cursor-pointer'
					onClick={() => {
						setActive('');
						router.push('/home');
					}}>
					Nabeel Rizvi
				</div>
				<div
					className='sm:hidden rounded-md bg-primaryHov hover:bg-primaryDark w-12 h-12 ml-16 mt-4 hover:cursor-pointer'
					onClick={() => toggle()}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-8 h-8 mt-2 mx-auto'
						viewBox='0,0,256,256'>
						<g
							fill='#ffffff'
							fill-rule='nonzero'
							stroke='none'
							stroke-width='1'
							stroke-linecap='butt'
							stroke-linejoin='miter'
							stroke-miterlimit='10'
							stroke-dasharray=''
							stroke-dashoffset='0'
							font-family='none'
							font-weight='none'
							font-size='none'
							text-anchor='none'>
							<g transform='scale(5.12,5.12)'>
								<path d='M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z'></path>
							</g>
						</g>
					</svg>{' '}
				</div>
			</div>
			{visible ? (
				<div className='flex flex-col md:pr-32 delay-200 sm:hidden'>
					{Object.keys(tabNames).map((title: string, id) => (
						<Tab
							key={id}
							active={active}
							title={title}
							onClick={() => {
								setActive(title);
								router.push(tabNames[title]);
								setVisible(!visible);
							}}
						/>
					))}
				</div>
			) : (
				<></>
			)}
			<div className='hidden sm:flex md:pr-32'>
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
