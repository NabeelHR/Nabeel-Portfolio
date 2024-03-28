import React, { useEffect, useState, Suspense } from 'react';

export const Tab = (props: Any) => {
	return (
		<div
			onClick={() => props.onClick()}
			className='p-4 h-20 w-32 mx-2 text-base text-white bg-primary
     hover:bg-primaryHov hover:cursor-pointer border-b border-solid border-b-teal-400'>
			{props.title} lol
		</div>
	);
};
