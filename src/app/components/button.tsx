import React from 'react';
import { useRef } from 'react';
interface Props {
	children?: React.ReactNode;
	onClick: () => void;
	variant?: string; // default, primary, info, success, warning, danger, dark
	size?: string; // sm, md, lg
	disabled?: boolean;
	custom?: string;
	label: string;
}

const Button: React.FC<Props> = ({
	children,
	onClick,
	variant = 'default',
	size,
	disabled,
	label,
	custom,
	...rest
}) => (
	<button
		className={`m-0 btn ${variant ? 'bg-primary' : 'bg-teal-600'} ${
			disabled ? 'disabled' : ''
		} ${custom ? custom : ''}  ${
			size ? size : 'w-full'
		} rounded-md hover:bg-primaryHov sm:max-w-standardBtn`}
		onClick={() => {
			onClick();
			console.log('insert foo callback here');
		}}>
		<div className='text-primaryText'>{label}</div>
		{children ? children : null}
	</button>
);
export default Button;
