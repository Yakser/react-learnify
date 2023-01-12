import React, {useEffect, useState} from 'react';
import {API_URL} from '../utils/constants';
import {IUniversityList} from '../utils/types';
import axios from 'axios';
import UniversityList from '../components/UniversityList';
import Hero from '../components/Hero';
import {capitalize} from '../utils/helpers';

const Universities = () => {
	const [universities, setUniversities] = useState<IUniversityList[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [tags, setTags] = React.useState<string[]>([]);
	const [tag, setTag] = React.useState<string>('');
	const [city, setCity] = React.useState<string>('');

	const onDeleteTagByIndex = (index: number) => {
		const newTags = [...tags];
		newTags.splice(index, 1);
		setTags(newTags);
	};

	const onTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTag(event.target.value.toLowerCase());
	};

	const onAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && tag !== '') {
			setTags([...tags, tag.trim()]);
			setTag('');
		}
	};
	const onCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCity(capitalize(event.target.value));
	};


	const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		search();
	};
	const onSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		search();
	};

	useEffect(() => {
		search();
	}, []);

	const search = () => {
		setIsLoading(true);

		const config = {
			params: {
				city: city,
				tags: tags.join(',')
			}
		};

		axios.get(`${API_URL}/universities/`, config).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setUniversities(data);
			}
			setIsLoading(false);
		}).catch((error) => {
			console.error(error);
			setIsLoading(false);
		});
	};

	return (
		<>
			<Hero
				city={city}
				tags={tags}
				tag={tag}
				onCityChange={onCityChange}
				onTagChange={onTagChange}
				onSearch={onSearch}
				onSearchClick={onSearchClick}
				onAddTag={onAddTag}
				hero_text={'Введите ваши интересы и город, и узнайте, какой вуз вам подходит'}
				hero_title={'Поиск вуза'}
				search_button_text={'Найти вуз'}
				onDeleteTagByIndex={onDeleteTagByIndex}
			/>
			<UniversityList universities={universities} isLoading={isLoading}/>
		</>
	);
};

export default Universities;
