'use client'; // This is a client component 👈🏽

import React from 'react';
import runData from '../../data/tbd.json';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { convertPace, convertDistance } from './formats';
import Button from '../components/button';

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
	// columnHelper.accessor(row => row.lastName, {
	//   id: 'lastName',
	//   cell: props => <i>{props.getValue()}</i>,
	//   header: () => <span>Last Name</span>,
	//   footer: props => props.column.id,
	// }),
	columnHelper.accessor('sport_type', {
		header: () => 'Sport Type',
		cell: (props: any) => {
			// console.log('props');
			// console.log(props.row.original.id);
			return props.renderValue();
		},
		// footer: (props) => props.column.id,
	}),
	// columnHelper.accessor('visits', {
	//   header: () => <span>Visits</span>,
	//   footer: props => props.column.id,
	// }),
	columnHelper.accessor('distance', {
		header: 'Distance Covered',
		cell: (props: any) => <div>{convertDistance(props.getValue())}</div>,
	}),
	columnHelper.accessor('average_speed', {
		header: 'Average Pace in mins/km',
		cell: (props: any) => <div>{convertPace(props.getValue())}</div>,
	}),
	columnHelper.accessor('total_elevation_gain', {
		header: 'Elavation Climbed (m)',
		cell: (props: any) => (
			<div>{props.getValue() > 1 ? props.getValue() : '-'}</div>
		),
	}),
];

// const columns: string[] = [name, sport_type, distance, average_speed];

const Blog = () => {
	const [data, setData] = React.useState(() => [...runData]);
	const rerender = React.useReducer(() => ({}), {})[1];
	// console.log(colorsJson);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	const filterRuns = () => {
		setData(data.filter((el) => el.type === 'Run' && el.distance > 9500));
	};
	const filterFastRuns = () => {
		setData(
			data.filter((el) => {
				// console.log(el, el.type, el.distance);
				// console.log(el, el.type, el.distance);
				return el.type === 'Run' && el.average_speed > 1 / ((5.5 * 60) / 1000);
			})
		);
	};
	console.log('data.length', data.length);

	return (
		<div className='prose lg:w-2/3 mx-auto'>
			<h3>Some personal random interests about me:</h3>
			<p>i like to run</p>
			{/* <Button /> */}
			<div className='flex flex-row space-x-2'>
				<Button label='filter only 10k runs or longer' onClick={filterRuns} />
				<Button
					label='filter only runs with 5.5 pace or faster'
					onClick={filterFastRuns}
				/>
			</div>

			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup: any) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header: any) => (
								<th key={header.id}>
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
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Blog;
