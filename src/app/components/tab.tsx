import React, { useEffect, useState, Suspense } from 'react';

export const Tab = (props: any) => {
	return (
		<div
			onClick={() => props.onClick()}
			className={`p-4 h-16 sm:h-20 w-52 sm:w-32 mx-2 text-base text-white rounded-t-md ${
				props.active === props.title ? 'bg-primaryDark' : 'bg-primary'
			}
     hover:bg-primaryHov hover:cursor-pointer border-b border-solid border-b-teal-400`}>
			{props.title}
		</div>
	);
};
