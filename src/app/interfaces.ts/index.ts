import { StaticImageData } from '../../../node_modules/next/image';

interface Experience {
	companyName: string;
	jobTitle: string;
	startDate: string;
	endDate: string;
	frontend: string[];
	backend: string[];
	technologies: string[];
	url: string;
	imgLink: StaticImageData;
}
interface Education {
	uniName: string;
	degree: string;
	major: string;
	startDate: string;
	endDate: string;
	imgLink: StaticImageData;
}

export type { Experience, Education };
