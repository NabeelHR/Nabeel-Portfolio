import React from 'react';
import colorsJson from '../../data/tbd.json'; // This import style requires "esModuleInterop", see "side notes"

const Blog = () => {
	console.log(colorsJson);
	return (
		<div className='prose lg:w-2/3 mx-auto'>
			<h3>Some personal random interests about me:</h3>
			{colorsJson[0].sport_type}
			<p>i like to run</p>
		</div>
	);
};

export default Blog;
