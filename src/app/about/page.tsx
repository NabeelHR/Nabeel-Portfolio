import React from 'react';

const About = () => {
	return (
		<div className='prose lg:w-200 mx-auto'>
			<h3>About this website</h3>
			<p>
				I built this website using React and NextJS. All styling has been done
				with Tailwind CSS, without a UI library.
			</p>
			<h4>
				Going forward, I am planning to add the following features to this
				website:
			</h4>
			<div>- Visitor stats showing view count</div>
			<div>
				- Integrating the Strava API to showcase some of my half-marathon
				training.
			</div>
		</div>
	);
};
export default About;
