'use client'; // This is a client component 👈🏽
import Input from '../components/input';
import { useEffect, useRef, useState } from 'react';
import { register } from '@/services/apis';
import Button from '../components/button';
import Link from '../../../node_modules/next/link';
import Router, { useRouter } from '../../../node_modules/next/navigation';
import { userRegistration } from '@/types/interfaces';
import { validateEmail } from '../validators/index';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [errormsg, setErrormsg] = useState('');
	const router = useRouter();

	useEffect(() => {}, []);

	const onSubmit = async () => {
		if (email === '' || password === '' || name === '') {
			setErrormsg('please enter name, email and password');
			return;
		}
		if (validateEmail(email) === false) {
			setErrormsg('please enter valid email');
			return;
		}
		console.log(validateEmail(email));
		const body: userRegistration = {
			name: name,
			email: email,
			password: password,
		};
		try {
			console.log('making register request');
			const response = await register(body);
			console.log(response);
			router.push('/login');
		} catch (error) {
			setErrormsg(error.response.data);
			console.log('oopsie somethiig failed');
		}
	};

	return (
		<div className='flex flex-col  bg-themeBg2 space-y-2 p-4 flex:6 w-screen sm:w-mid mx-auto mt-16 sm:mt-32 rounded-lg'>
			Let's create a Nabster account!
			<Input
				label='email'
				type='email'
				required
				onChange={(e: Event | any) => {
					setErrormsg('');
					setEmail(e.target.value);
				}}
			/>
			<Input
				label='name'
				required
				onChange={(e: Event | any) => {
					setErrormsg('');
					setName(e.target.value);
				}}
			/>
			<Input
				label='Set password'
				type='password'
				required
				onChange={(e: Event | any) => {
					setErrormsg('');
					setPassword(e.target.value);
				}}
			/>
			{errormsg ? (
				<div className='text-purple-900 font-bold'>{errormsg}</div>
			) : (
				<></>
			)}
			<Button onClick={onSubmit} label='Register' />
			{/* <Link className='w-full mx-auto sm:max-w-standardBtn' href='/profile'>
			</Link> */}
			<Link className='w-full mx-auto sm:max-w-standardBtn' href='/login'>
				<Button onClick={() => {}} label='Login with existing account' />
			</Link>
		</div>
	);
}
