'use client'; // This is a client component 👈🏽

import React from 'react';
import { useRef } from 'react';

const Input = (props: any) => {
	const {
		id,
		containerClassName = '',
		labelClassName = '',
		inputClassName = '',
		placeholder = '',
		label = '',
		type = 'text',
		error = false,
		errorText = '',
		required = false,
		...rest
	} = props;

	const inputRef = useRef<HTMLElement>();

	return (
		<div
			className={containerClassName}
			onClick={() => (inputRef.current ? inputRef.current.focus() : null)}>
			<label
				htmlFor={id}
				className={`text-sm text-primary placeholder-gray-gray4 pt-1.5 ${labelClassName}`}>
				{label} {required && <span className='text-red'>*</span>}
			</label>
			<div
				className={`border transition duration-150 rounded-md ease-in-out ${
					error
						? 'focus-within:border-red border-red'
						: 'focus-within:border-primary border-gray-gray4'
				}`}>
				<input
					ref={inputRef}
					type={type}
					className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md ${inputClassName}`}
					id={id}
					placeholder={placeholder}
					{...rest}
				/>
			</div>
			{errorText && <p className='text-xs pl-2	text-red mb-4'>{errorText}</p>}
		</div>
	);
};
// Template taken from:
// https://dev.to/ms_yogii/form-inputs-with-react-and-tailwind-57o2
export default Input;
