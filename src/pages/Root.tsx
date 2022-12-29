import React from 'react';
import Header from '../components/Header';
import {Outlet} from 'react-router-dom';

const Root = () => {
	return (
		<div className={'app'}>
			<Header/>
			<h1 className={'visually-hidden'}>Learnify - рекомендательная система для поиска вуза</h1>
			<div className="app__wrapper">
				<Outlet/>
			</div>
		</div>
	);
};

export default Root;
