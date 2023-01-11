import React, {useEffect, useState} from 'react';
import {API_URL} from '../utils/constants';
import {IUniversityList} from '../utils/types';
import axios from 'axios';
import UniversityList from '../components/UniversityList';
import Hero from '../components/Hero';

const Universities = () => {
	const [universities, setUniversities] = useState<IUniversityList[]>([]);
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
		<>
			<Hero
				city={city}
				interests={interests}
				onCityChange={onCityChange}
				onInterestChange={onInterestChange}
				onSearch={onSearch}
			/>
			<UniversityList universities={universities}/>
		</>
	);
};

export default Universities;
