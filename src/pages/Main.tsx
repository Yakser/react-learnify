import React from 'react';
import SearchForm from '../components/SearchForm';
import UniversityList from '../components/UniversityList';


const Main = () => {
	return (
		<main>
			<h2 className={'title'}>Главная</h2>

			<SearchForm />
			<UniversityList />

		</main>
	);
};

export default Main;
