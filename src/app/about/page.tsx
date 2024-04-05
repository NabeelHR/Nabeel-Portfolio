import React from 'react';
import Link from 'next/link';

const About = () => {
	return (
		<div className='prose mx-4 lg:w-200 sm:mx-auto'>
			<h3>About this website</h3>
			<p>
				{`I built this website using TypeScript, React and NextJS. All styling has been done
				with Tailwind CSS. Hosting and continuous deployment is on Vercel. Code for this website is linked`}{' '}
				<Link
					className='text-blue-500'
					href={`https://github.com/NabeelHR/Nabeel-Portfolio`}>
					here.
				</Link>
			</p>
			<p>
				At the moment this website serves as merely a personal online portfolio
				and a blog for my running journey.
			</p>
			<p>
				I wanted to build something for myself without a specific goal in mind.
				Visualizing my running stats in a table from the Strava API seemed like
				a fun way to interact with them.
			</p>
			<h4>{`Going forward, I plan to add the following features here:`}</h4>
			<ul>
				<li>{`More fun features tinkering around with the Strava API.`}</li>
				<li>{`Analytics and viewer count; I want more tools for visitors to interact with`}</li>
				<li>{`Improving code quality and file structure.`}</li>
				<li>{`Enhancing frontend and the overall User Experience (work in progresss).`}</li>
				<li>{`Improving code quality and file structure.`}</li>
				<li>{`Adding testing.`}</li>
			</ul>
		</div>
	);
};
export default About;
