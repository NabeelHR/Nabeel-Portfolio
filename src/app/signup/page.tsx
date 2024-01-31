'use client'; // This is a client component 👈🏽
import Input from '../components/input';
import { useEffect, useRef, useState } from 'react';
import { fetchData } from '@/services/login';
import Button from '../components/button';

export default function Signup() {
	const [message, setMessage] = useState('Loading');

	useEffect(() => {
		fetch('http://localhost:8080/api/home')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMessage(data.message);
			});
	}, []);

	return (
		<div className='flex h-screen bg-red-300 p-4'>
			<div className='flex:6 w-screen sm:w-1/2 mx-auto mt-16 sm:mt-32 border border-blue-800'>
				Demo works
				<Input label='email' />
				<Input label='login password' />
				{message}
				<Button onClick={() => {}} label='Register new account' />
			</div>
		</div>
	);
}
