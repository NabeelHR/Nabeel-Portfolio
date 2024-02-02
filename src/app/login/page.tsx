'use client'; // This is a client component 👈🏽
import Input from '../components/input';
import { useEffect, useRef, useState } from 'react';
import { login } from '@/services/apis';
import Button from '../components/button';
import Link from '../../../node_modules/next/link';
import { useRouter } from '../../../node_modules/next/navigation';
import { userLogin } from '@/types/interfaces';
import { validateEmail } from '../validators/index';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errormsg, setErrormsg] = useState('');
	const router = useRouter();

	const onSubmit = async () => {
		if (email === '' || password === '') {
			setErrormsg('please enter valid email and password');
			return;
		}
		if (validateEmail(email) === false) {
			setErrormsg('please enter valid email');
			return;
		}
		const body: userLogin = {
			email: email,
			password: password,
		};
		try {
			console.log('making register request');
			const response = await login(body);
			console.log(response);
			console.log('no erorr thrown');
			router.push(`/profile/?uid=${response.data.userId}`);
		} catch (error) {
			console.log(error);
			if (error?.response.data === 'USER_NOT_FOUND') {
				setErrormsg('This user does not exist');
			} else if (error?.response.data === 'INVALID_PASSWORD') {
				setErrormsg('Incorrect password, please try again');
			}
			console.log('oopsie somethiig failed');
		}
	};

	return (
		<div className='flex bg-themeBg2 eBg flex-col space-y-2 p-4 flex:6 w-screen sm:w-mid mx-auto mt-16 sm:mt-32 rounded-lg '>
			Login!
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
				label='login password'
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
			<Button onClick={onSubmit} label='Login' />
			<Link className='w-full mx-auto sm:max-w-standardBtn' href='/register'>
				<Button onClick={() => {}} label='Register new account' />
			</Link>
		</div>
	);
}
