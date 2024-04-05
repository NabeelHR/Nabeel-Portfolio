import React from 'react';
import { Education } from '../interfaces.ts/index';
import Image from '../../../node_modules/next/image';

interface Props {
	xp: Education;
}

const EducationCard: React.FC<Props> = ({ xp }) => {
	console.log(xp);
	return (
		<div className='rounded-md mt-2 mx-auto lg:mx-0 bg-card hover:bg-cardHov border border-solid border-gray-600 w-full md:w-120 sm:h-60 p-4'>
			<div className='flex'>
				<div className='pl-2 w-auto sm:w-100'>
					<div className='prose-lg font-bold'>{xp.uniName}</div>
					<div className='flex flex-col sm:flex-row sm:justify-between prose-sm justify-between'>
						<div className='font-bold'>{xp.degree}</div>
						<div>
							{xp.startDate} - {xp.endDate}
						</div>
					</div>
					<div className='prose-lg font-bold'>{xp.major}</div>
					<div className='rounded-full bg-themeBg h-16 w-16'>
						{/* <Image
						className='self-center max-h-80 rounded-full w-full h-full'
						src={xp.imgLink}
						alt={'link broken'}
						// height={300}
						// width={300}
					/> */}
					</div>
				</div>
			</div>
			{/* <div className='grid grid-cols-2 sm:grid-cols-3 justify-between flex-wrap prose-sm space-y-2 sm:space-y-0 mt-2'>
				<div>
					Backend:
					<div className='not-prose'>
						{xp.backend.map((el: string, id: number) => (
							<div key={id}>- {el}</div>
						))}
					</div>
				</div>
				<div>
					Frontend:
					<div className='not-prose'>
						{xp.frontend.map((el: string, id: number) => (
							<div key={id}>- {el}</div>
						))}
					</div>
				</div>
				<div>
					Technologies/devops:
					<div className='not-prose'>
						{xp.technologies.map((el: string, id: number) => (
							<div key={id}>- {el}</div>
						))}
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default EducationCard;
