import React from 'react';
import Card from './card';
import { Experience } from '../interfaces.ts/index';
import educativePic from '../../../public/educative.jpg';
import oraclePic from '../../../public/oracle-netsuite.jpg';
import radiclePic from '../../../public/radical.png';

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
		imgLink: radiclePic,
	},
];

const Projects = () => {
	return (
		<div className='flex flex-col p-4 divide-y-1 w-full'>
			<div className='text-secondary  sm:w-2/3 mx-4 sm:mx-auto font-bold text-2xl my-4'>
				Professional Overview
			</div>
			{/* <div className='text-secondary prose w-2/3 mx-auto font-bold text-2xl my-4'> */}
			<div className='text-secondary sm:w-2/3 mx-4 sm:mx-auto font-bold text-xl my-4'>
				Industry experience in Software Engineering
			</div>
			<div className='flex flex-wrap justify-between mx-auto w-full md:w-3/4'>
				{experiences.map((el, id) => (
					<Card key={id} xp={el} />
				))}
			</div>
			<div className='text-secondary sm:w-2/3 mx-4 sm:mx-auto font-bold text-xl my-4'>
				Education
			</div>
			<div className='flex flex-wrap justify-between mx-auto w-full md:w-3/4'>
				{experiences.map((el, id) => (
					<Card key={id} xp={el} />
				))}
			</div>
		</div>
	);
};
export default Projects;
