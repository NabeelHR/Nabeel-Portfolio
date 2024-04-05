import React from 'react';
import SocialLink from '../professional/socialLink';
import { LinkedInIcon, GitHubIcon } from '../../../public/icons';
import { GitHubUrl, LinkedInUrl } from '@/data/personalInfo';

const Footer = () => {
	return (
		<div className='flex bg-primary w-full mt-auto'>
			<div className='h-24 p-4'>
				<ul role='list'>
					<SocialLink href={LinkedInUrl} icon={LinkedInIcon} className='mt-4'>
						Connect with Linkedin
					</SocialLink>
					<SocialLink href={GitHubUrl} icon={LinkedInIcon} className='mt-4'>
						GitHub
					</SocialLink>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
