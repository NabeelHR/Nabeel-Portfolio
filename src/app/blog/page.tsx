'use client'; // This is a client component 👈🏽

import React from 'react';
import runData from '../../data/tbd.json';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
	PaginationState,
	getPaginationRowModel,
} from '@tanstack/react-table';
import { convertPace, convertDistance } from './formats';

const columnHelper = createColumnHelper();

const columns: any[] = [
	columnHelper.accessor('name', {
		header: () => 'Activity Title',
		cell: (props: any) => (
			<div
				className='underline text-blue-400 hover:cursor-pointer'
				onClick={() =>
					window.open(
						`https://www.strava.com/activities/${props.row.original.id}`,
						'_blank'
					)
				}>
				{props.getValue()}
			</div>
		),
	}),
	columnHelper.accessor('sport_type', {
		header: () => 'Sport Type',
		cell: (props: any) => {
			return props.renderValue();
		},
	}),
	columnHelper.accessor('distance', {
		header: 'Distance Covered',
		cell: (props: any) => <div>{convertDistance(props.getValue())}</div>,
	}),
	columnHelper.accessor('average_speed', {
		header: 'Average Pace (mins/km)',
		cell: (props: any) => <div>{convertPace(props.getValue())}</div>,
	}),
	columnHelper.accessor('total_elevation_gain', {
		header: 'Elevation Climbed (m)',
		cell: (props: any) => (
			<div>{props.getValue() > 1 ? Math.round(props.getValue()) : '-'}</div>
		),
	}),
	columnHelper.accessor('start_date', {
		header: 'Date',
		cell: (props: any) => {
			const date: Date = new Date(props.getValue());
			return <div>{date.toDateString()}</div>;
		},
	}),
];

const Blog = () => {
	const [data, setData] = React.useState(() => [...runData]);
	const rerender = React.useReducer(() => ({}), {})[1];

	const [pagination, setPagination] = React.useState<PaginationState>({
		pageIndex: 0,
		pageSize: 15,
	});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(), //load client-side pagination code
		onPaginationChange: setPagination,
		state: {
			pagination,
		},
	});

	const filterRuns = () => {
		setData(data.filter((el) => el.type === 'Run' && el.distance > 9500));
	};
	const filterFastRuns = () => {
		setData(
			data.filter((el) => {
				return el.type === 'Run' && el.average_speed > 1 / ((5.5 * 60) / 1000);
			})
		);
	};
	console.log('data.length', data.length);

	return (
		<div className='mx-4 md:w-2/3 md:mx-auto py-4'>
			<div className='prose pb-4'>
				<h2>Running Journal</h2>
				<p>
					{`I am currently training for my 3rd half marathon and I'm going to use
					this app to track my training and progress.`}
				</p>
				<p>
					{`I used the Strava API to pull all my data recorded over the last 30
					months. It includes activity details for some memorable runs, hikes
					and other activites.`}
				</p>
			</div>
			{/* <div className='flex flex-row space-x-2'>
				<Button label='filter only 10k runs or longer' onClick={filterRuns} />
				<Button
					label='filter only runs with 5.5 pace or faster'
					onClick={filterFastRuns}
				/>
			</div> */}

			<table className='prose w-full mx-auto'>
				<thead>
					{table.getHeaderGroups().map((headerGroup: any) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header: any) => (
								<th key={header.id} className='text-sm'>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row: any) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell: any) => (
								<td key={cell.id} className='text-sm'>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<button
				className='border rounded p-1'
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}>
				{'<'}
			</button>
			<button
				className='border rounded p-1'
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}>
				{'>'}
			</button>
			<span className='flex items-center gap-1'>
				<div>Page</div>
				<strong>
					{table.getState().pagination.pageIndex + 1} of{' '}
					{table.getPageCount().toLocaleString()}
				</strong>
			</span>
		</div>
	);
};

export default Blog;
