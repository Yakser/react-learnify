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
	const [name, setName] = React.useState<string>('');
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

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		search();
	};
	const onSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (currentPageIndex !== 0) {
			setCurrentPageIndex(0);
		} else {
			search();
		}
	};

	useEffect(() => {
		search();
	}, [tags]);

	useEffect(() => {
		fetchPaginationLimit();
		const page = +(localStorage.getItem('universities_page') || 0);
		setCurrentPageIndex(page);
	}, []);

	const fetchPaginationLimit = () => {
		axios.get(`${API_URL}/universities/limit`).then(
			(response) => {
				setPaginationLimit(response.data['limit']);
			}
		).catch((error) => {
			console.log(error);
		});
	};

	useEffect(() => {
		search();
		localStorage.setItem('universities_page', currentPageIndex.toString());
	}, [currentPageIndex]);

	const search = () => {
		setIsLoading(true);

		const config = {
			params: {
				city: city,
				tags: tags.join(','),
				name__icontains: name,
			}
		};
		axios.get(`${API_URL}/universities/?limit=${paginationLimit}&offset=${currentPageIndex * paginationLimit}`, config).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setUniversities(data['results']);
				setTotalCount(data['count']);
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
				name={name}
				onNameChange={onNameChange}
			/>
			{
				Math.ceil(totalCount / paginationLimit) > 1 && <Pagination limit={paginationLimit}
																		   totalCount={totalCount}
																		   currentPageIndex={currentPageIndex}
																		   showPage={setCurrentPageIndex}/>
			}

			<UniversityList universities={universities} isLoading={isLoading}/>
			{
				Math.ceil(totalCount / paginationLimit) > 1 && <Pagination limit={paginationLimit}
																		   totalCount={totalCount}
																		   currentPageIndex={currentPageIndex}
																		   showPage={setCurrentPageIndex}/>
			}
		</>
	);
};

export default Universities;
