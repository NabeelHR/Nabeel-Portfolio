const convertPace = (speed: number) => {
	if (speed <= 0) return `-`;
	const paceSeconds = 1000 / speed;
	const minutes = Math.floor(paceSeconds / 60);
	const seconds = Math.round(paceSeconds - minutes * 60);
	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};
const convertDistance = (distance: number) =>
	`${(Math.round(distance / 100) / 10).toFixed(1)} km`;

export { convertPace, convertDistance };
