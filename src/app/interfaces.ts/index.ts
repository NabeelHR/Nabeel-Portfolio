import { StaticImageData } from '../../../node_modules/next/image';

interface Experience {
	companyName: string;
	jobTitle: string;
	startDate: string;
	endDate: string;
	frontend: string[];
	backend: string[];
	technologies: string[];
	imgLink: StaticImageData;
}

export type { Experience };
