export interface IDepartmentList {
	'id': number;
	'name': string;
	'code': string;
	'tags': string[];
}

export interface IUser {
	id: number | undefined;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	about: string;
	favorite_subjects: string;
	achievements: string;
}

export interface IDepartmentDetail {
	'id': number;
	'name': string;
	'code': string;
	'logo_url': string;
	'university_name': string;
	'city': string;
	'tags': string[];
	specializations: ISpecializationList[];
}

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
	departments: IDepartmentList[];
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

export interface LoginData {
	username: string;
	password: string;
}
