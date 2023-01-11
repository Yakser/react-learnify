import React, {useEffect, useState} from 'react';
import {API_URL} from '../utils/constants';
import {ISpecializationList} from '../utils/types';
import axios from 'axios';
import Hero from '../components/Hero';
import SpecializationList from '../components/SpecializationList';

const Specializations = () => {
	const [specializations, setSpecializations] = useState<ISpecializationList[]>([]);
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

		axios.get(`${API_URL}/universities/specializations/`, config).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setSpecializations(data);
			}
		}).catch((error) => {
			console.error(error);
		});
	};

	useEffect(() => {
		axios.get(`${API_URL}/universities/specializations/`).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setSpecializations(data);
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
				hero_text={'Введите ваши интересы и город, и узнайте, какая специализация вам подходит'}
				hero_title={'Поиск специализации'}
				search_button_text={'Найти'}
			/>
			<SpecializationList specializations={specializations}/>
		</>
	);
};

export default Specializations;
