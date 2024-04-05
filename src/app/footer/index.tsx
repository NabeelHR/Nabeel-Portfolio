import React from 'react';
import SocialLink from '../components/socialLink';
import { LinkedInIcon, GitHubIcon, MailIcon } from '../../../public/icons';
import { GitHubUrl, LinkedInUrl, EmailAddr } from '@/data/personalInfo';

const Footer = () => {
	return (
		<div className='flex bg-primary w-full mt-auto'>
			<div className='h-24 p-4'>
				<ul>
					<SocialLink href={LinkedInUrl} icon={LinkedInIcon} className='mt-4'>
						Connect with Linkedin
					</SocialLink>
					<SocialLink href={GitHubUrl} icon={GitHubIcon} className='mt-4'>
						GitHub
					</SocialLink>
					<SocialLink
						href={`mailto:${EmailAddr}`}
						icon={MailIcon}
						className='mt-4'>
						Contact via email
					</SocialLink>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
