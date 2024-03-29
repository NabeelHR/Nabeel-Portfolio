import React from 'react';
import Image from '../../../node_modules/next/image';
import profilePic from '../../../public/landing-image.png';

const Home = () => {
	return (
		<div className='flex flex-col mx-auto my-4 px-4 lg:w-2/3 prose md:prose-lg text-justify '>
			<div className=' flex flex-col justify-items-center md:justify-between md:flex-row md:space-x-4'>
				<Image
					className='rounded-md self-center max-h-80'
					src={profilePic}
					alt={'link broken'}
					height={300}
					width={300}
				/>
				<div>
					<h3 className='text-left'>
						Hi, I'm Nabeel and I like solving technical problems at all levels.
						I also enjoying running and coming up with dad jokes.
					</h3>
					<h4 className=''>
						I'm a software engineer living in Vancouver, BC. I have been
						programming since 2016 and have over 2 years of work experience in
						the industry. I recently completed a MS CS degree from from
						Northeastern University - Vancouver.
					</h4>
				</div>
			</div>
			<p>
				My expertise lies in Full-Stack Web Development, Distributed Systems and
				Systems Design Engineering, and I'm proficient with Python, Java,
				TypeScript/JS and Golang.
			</p>
			<p>
				I have worked with teams of different sizes and stages, from early-stage
				startups to large corporations like Oracle, and have contributed to
				multiple projects and products that have enhanced user experience,
				performance, and security.
			</p>
			<p>
				I consider myself equally adept in frontend and backend software
				development. At the moment I'm looking for my next role software
				development (when I'm not training for my next half-marathon).
			</p>
		</div>
	);
};

export default Home;
