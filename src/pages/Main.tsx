import React, {useEffect, useState} from 'react';
import SearchForm from '../components/SearchForm';
import UniversityList from '../components/UniversityList';
import {University} from '../types';
import axios from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL;

const Main = () => {
	const [universities, setUniversities] = useState<University[]>([]);
	const [interests, setInterests] = React.useState<string[]>([]);
	const [city, setCity] = React.useState<string>('');

	const onInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInterests(event.target.value.split(','));
	};
	const onCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
	};
	const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const config = {
			params: {
				city: city,
				tags: interests.join(',')
			}
		};

		axios.get(`${API_URL}/universities/`, config).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setUniversities(data);
			}
		}).catch((error) => {
			console.error(error);
		});
	};

	useEffect(() => {
		axios.get(`${API_URL}/universities/`).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setUniversities(data);
			}
		}).catch((error) => {
			console.error(error);
		});
	}, []);

	return (
		<main>
			<h2 className={'title'}>Главная</h2>

			<SearchForm onSearch={onSearch}
				onInterestChange={onInterestChange}
				onCityChange={onCityChange}
				interests={interests}
				city={city}/>
			<UniversityList universities={universities}/>

		</main>
	);
};

export default Main;
