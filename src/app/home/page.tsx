import React from 'react';
import Image from '../../../node_modules/next/image';
import profilePic from '../../../public/landing-image.png';

const Home = () => {
	return (
		<div className='flex flex-col mx-auto my-4 px-4 lg:w-1/2 prose md:prose-lg text-justify '>
			<div className=' flex flex-col justify-items-center md:justify-between md:flex-row md:space-x-4'>
				<Image
					className='rounded-md self-center max-h-80'
					src={profilePic}
					alt={'link broken'}
					height={300}
					width={300}
				/>
				<p className='m-0'>
					Welcome to my personal website/portfolio. I'm a software engineer
					living based in Vancouver, BC. I like enjoy gaming, running and being
					nerd. I started my profesisonal career in 2020 when I completed my BS
					degree in Computer Science from LUMS and worked in full stack software
					developer roles for over 2 years at RadicalX, Educative, and Oracle.
					Recently, I finished my Master's Degree in Comp-Sci from Northeastern
					University Vancouver.
				</p>
			</div>
			<p>
				I am a software developer and a Master of Science in Computer Science
				graduate from Northeastern University - Vancouver, with over 2 years of
				experience in full-stack software engineering. My expertise lies in
				Full-Stack Web Development, Distributed Systems and Systems Design
				Engineering, and I'm proficient with Python, Java, TypeScript/JS and Go.
			</p>
			<p>
				Currently I work as a Product Educator at Lululemon, where I share my
				passion for fitness and wellness with customers and colleagues.
				Previously, I worked as Software Developer at Oracle, where I shipped
				features for Oracle Netsuite's HCM solution and developed an internal
				service to automate API requests' validation. I have also worked with
				teams of different sizes and stages, from early-stage startups to large
				corporations, and have contributed to multiple projects and products
				that have enhanced user experience, performance, and security.
			</p>
		</div>
	);
};

export default Home;
