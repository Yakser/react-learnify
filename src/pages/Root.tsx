import React from 'react';
import Header from '../components/Header';
import {Outlet} from 'react-router-dom';

const Root = () => {
	return (
		<div className={'app'}>
			<Header/>
			<div className="app__wrapper">
				<Outlet/>
			</div>
		</div>
	);
};

export default Root;
