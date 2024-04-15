const convertPace = (speed: number) => {
	if (speed <= 0) return `-`;
	const paceSeconds = 1000 / speed;
	const minutes = Math.floor(paceSeconds / 60);
	const seconds = Math.round(paceSeconds - minutes * 60);
	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};
const convertDistance = (distance: number) =>
	`${(Math.round(distance / 100) / 10).toFixed(1)} km`;

const convertTime = (time: number) => {
	if (time <= 5) return `-`;
	let minutes = Math.floor(time / 60);
	const hours = Math.floor(minutes / 60);
	const seconds = Math.round(time % 60);
	minutes = minutes % 60;

	return `${hours > 0 ? `${hours}:` : ''}${
		minutes < 10 ? '0' + minutes : minutes
	}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const convertFilters = (val: number, id: string) => {
	const foo = {
		moving_time: (val: number) => val * 60,
		average_speed: (val: number) => (1 / val) * 60,
		distance: (val: number) => val * 1000,
	};

	return foo[id](val);
};
export { convertPace, convertDistance, convertTime, convertFilters };
