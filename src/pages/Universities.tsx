import React, {useEffect, useState} from 'react';
import {API_URL} from '../utils/constants';
import {IUniversityList} from '../utils/types';
import axios from 'axios';
import UniversityList from '../components/UniversityList';
import Hero from '../components/Hero';
import {capitalize} from '../utils/helpers';
import Pagination from '../components/Pagination';

const Universities = () => {
	const [universities, setUniversities] = useState<IUniversityList[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [tags, setTags] = React.useState<string[]>([]);
	const [tag, setTag] = React.useState<string>('');
	const [city, setCity] = React.useState<string>('');
	const [paginationLimit, setPaginationLimit] = React.useState<number>(6);
	const [totalCount, setTotalCount] = React.useState<number>(0);
	const [currentPageIndex, setCurrentPageIndex] = React.useState<number>(0);

	const onDeleteTagByIndex = (index: number) => {
		const newTags = [...tags];
		newTags.splice(index, 1);
		setTags(newTags);
	};

	const onTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTag(event.target.value.toLowerCase());
	};

	const onAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const cleanedTag = tag.trim();
		if (event.key === 'Enter' && cleanedTag !== '') {
			setTags([...tags, cleanedTag]);
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
		fetchPaginationInfo();
	}, []);

	const fetchPaginationInfo = () => {
		fetchPaginationLimit();
		fetchUniversitiesCount();
	};

	const fetchPaginationLimit = () => {
		axios.get(`${API_URL}/universities/limit`).then(
			(response) => {
				setPaginationLimit(response.data['limit']);
			}
		).catch((error) => {
			console.log(error);
		});
	};
	const fetchUniversitiesCount = () => {
		axios.get(`${API_URL}/universities/count`).then(
			(response) => {
				setTotalCount(response.data['count']);
			}
		).catch((error) => {
			console.log(error);
		});
	};

	useEffect(() => {
		search();
	}, [currentPageIndex]);

	const search = () => {
		setIsLoading(true);

		const config = {
			params: {
				city: city,
				tags: tags.join(',')
			}
		};
		console.log(`limit=${paginationLimit}&offset=${currentPageIndex * paginationLimit}`);
		axios.get(`${API_URL}/universities/?limit=${paginationLimit}&offset=${currentPageIndex * paginationLimit}`, config).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setUniversities(data['results']);
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
			<Pagination limit={paginationLimit}
						totalCount={totalCount}
						currentPageIndex={currentPageIndex}
						showPage={setCurrentPageIndex}/>
			<UniversityList universities={universities} isLoading={isLoading}/>
			<Pagination limit={paginationLimit}
						totalCount={totalCount}
						currentPageIndex={currentPageIndex}
						showPage={setCurrentPageIndex}/>
		</>
	);
};

export default Universities;
