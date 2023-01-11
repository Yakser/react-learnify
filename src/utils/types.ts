export interface IUniversityList {
	id: number;
	name: string;
	tags: string[];
	city: string;
	logo_url: string;
	short_description: string;
}


export interface IUniversityDetail {
	id: number;
	name: string;
	tags: string[];
	city: string;
	logo_url: string;
	description: string;
}

export interface ISpecializationList {
	id: number;
	name: string;
	university_name: string;
	city: string;
	short_description: string;
	logo_url: string;
	tags: string[];
}

export interface ISpecializationDetail {
	id: number;
	name: string;
	description: string;
	city: string;
	logo_url: string;
	tags: string[];
	university_name: string;
}