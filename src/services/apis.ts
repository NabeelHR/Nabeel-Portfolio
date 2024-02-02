import { userRegistration, userLogin } from '@/types/interfaces';
import FormData from 'form-data';

const axios = require('axios').default;
const url = 'http://localhost:8080';

const register = async (userDetails: userRegistration) => {
	const response = await axios.post(url + '/register', {
		name: userDetails.name,
		email: userDetails.email,
		password: userDetails.password,
	});
	return response;
};

const login = async (userDetails: userLogin) => {
	const response = await axios.post(url + '/login', {
		email: userDetails.email,
		password: userDetails.password,
	});
	console.log('no error');
	return response;
};

const uploadImage = async (file: any, email: string) => {
	let data = new FormData();
	console.log('data init?');
	data.append('cute-file', file, file.name);
	console.log(data);
	console.log('data changin?');

	data.append('email', email);
	console.log(data);

	const response = await axios.post(url + '/upload', data, {
		headers: {
			accept: 'application/json',
			'Accept-Language': 'en-US,en;q=0.8',
			'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
		},
	});
	console.log('no error');
	return response;
};

export { register, login, uploadImage };
