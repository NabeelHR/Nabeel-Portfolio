import Link from '../../../node_modules/next/link';

const SocialLink = ({ className, href, children, icon: Icon }: any) => {
	return (
		<li className='flex'>
			<Link
				href={href}
				className='group flex text-sm font-medium text-zinc-300 transition hover:text-zinc-100 dark:text-zinc-200 dark:hover:text-teal-500'>
				<Icon className='h-6 w-6 flex-none fill-zinc-300 transition group-hover:fill-zinc-100' />
				<span className='ml-4'>{children}</span>
			</Link>
		</li>
	);
};
export default SocialLink;
