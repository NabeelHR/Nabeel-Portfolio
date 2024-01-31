const axios = require('axios').default;
const url = 'http://localhost:8080/';
const fetchData = async () => {
	try {
		const response = await axios.get(url);
		console.log(response.data);
		console.log(response.status);
		console.log(response.statusText);
		console.log(response.headers);
		console.log(response.config);
		return response;
	} catch (error) {
		// Handle error
		console.error(error);
		return error;
	}
};

fetchData();

export { fetchData };
