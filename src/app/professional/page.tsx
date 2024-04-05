import React from 'react';
import Card from './card';
import { Experience, Education } from '../interfaces.ts/index';
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
		url: 'https://www.netsuite.com/portal/home.shtml',
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
		url: 'https://www.educative.io/learn/home',
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
		url: 'https://www.linkedin.com/company/radicalai-li/',
		imgLink: radiclePic,
	},
];
const academics: Education[] = [
	{
		uniName: 'Lahore University of Management Sciences',
		degree: 'Bachelors in Science',
		major: 'BSc Computer Science',
		startDate: 'August 2016',
		endDate: 'June 2020',
		imgLink: oraclePic,
	},
	{
		uniName: 'Northeastern University',
		degree: `Master's of Science Science`,
		major: 'MSc Computer Science',
		startDate: 'September 2021',
		endDate: 'May 2023',
		imgLink: oraclePic,
	},
];

const Projects = () => {
	return (
		<div className='flex flex-col p-4 divide-y-1 w-full'>
			<div className='text-secondary  sm:w-2/3 mx-4 sm:mx-auto font-bold text-2xl my-4'>
				Professional Overview
			</div>
			<div className='text-secondary sm:w-2/3 mx-4 sm:mx-auto font-bold text-xl my-4'>
				Industry experience in Software Engineering
			</div>
			<div className='flex flex-wrap justify-between mx-auto w-full md:w-3/4'>
				{experiences.map((el, id) => (
					<Card xp={el} key={id} />
				))}
			</div>
			<div className='text-secondary sm:w-2/3 mx-4 sm:mx-auto font-bold text-xl mt-4'>
				Education
			</div>

			<div className='mx-auto w-full md:w-3/4'>
				{academics.map((el, id) => (
					<div className='my-4' key={id}>
						<div className='flex flex-col sm:flex-row w-full justify-between'>
							<h2 className='text-xl font-medium'> {el.uniName}</h2>
							<div>
								{el.startDate} - {el.endDate}
							</div>
						</div>
						<div className='flex w-2/3 justify-between'>
							<span className='font-medium'> {el.major}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Projects;
