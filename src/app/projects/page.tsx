import React from 'react';
import Card from './card';
import { Experience } from '../interfaces.ts/index';
import educativePic from '../../../public/educative.jpg';
import oraclePic from '../../../public/oracle-netsuite.jpg';

const experiences: Experience[] = [
	{
		companyName: 'Oracle',
		jobTitle: 'Software Developer Co-op',
		startDate: 'May 2022',
		endDate: 'August 2022',
		frontend: ['TypeScript', 'Oracle JET', 'Preact', 'Jest'],
		backend: ['Java', 'Maven', 'Oracle Cloud Infra', 'JUnit testing'],
		technologies: ['TeamCity', 'GitLab', 'Perforce'],
		imgLink: oraclePic,
	},
	{
		companyName: 'Educative',
		jobTitle: 'Software Engineer',
		startDate: 'October 2020',
		endDate: 'August 2021',
		frontend: ['TypeScript', 'NextJS', 'Tailwind CSS', 'Jest'],
		backend: [
			'Python',
			'Google App Engine',
			'Google Cloud NDB',
			'PyUnit testing',
		],
		technologies: ['Sentry', 'Jenkins', 'GitHub'],
		imgLink: educativePic,
	},
	{
		companyName: 'RadicalX',
		jobTitle: 'Full Stack Development Engineer',
		startDate: 'March 2020',
		endDate: 'August 2020',
		frontend: ['JS/TypeScript', 'Material UI'],
		backend: ['Node', 'Express', 'Firebase', 'Firestore'],
		technologies: ['Figma', 'GitLab'],
		imgLink: oraclePic,
	},
];

const Projects = () => {
	return (
		<div className='flex flex-col p-4 divide-y-1 w-full border border-solid'>
			<div className='text-secondary prose w-2/3 mx-auto font-bold text-2xl my-4'>
				Here is some cool stuff I have worked on
			</div>
			{/* <div className='flex flex-col space-y-2 flex-wrap sm:space-y-0 mx-auto sm:flex-row border w-full md:w-3/4 border-violet-900'> */}
			<div className='flex flex-wrap justify-between mx-auto border w-full md:w-3/4'>
				{experiences.map((el) => (
					<Card xp={el} />
				))}
			</div>
		</div>
	);
};
export default Projects;
