import { userRegistration, userLogin } from '@/types/interfaces';
import FormData from 'form-data';

const axios = require('axios').default;
// const url = 'http://localhost:8080';
// const url = 'https://nabster-d2c4a.web.app/';
const url = 'https://nabster-backend-server.onrender.com';

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

const uploadImgData = async (uid: any, imgUrl: string) => {
	console.log('sending request for urlsss');
	const response = await axios.post(url + '/imageData', {
		uid: parseInt(uid),
		url: imgUrl,
	});
	return response;
};

const fetchImgData = async (uid: any, cb: any) => {
	console.log('sending request for urlsss');
	const response = await axios.get(url + '/fetchImgData', {
		params: {
			uid: parseInt(uid),
		},
	});
	cb(response);
	return response;
};

export { register, login, uploadImgData, fetchImgData };
