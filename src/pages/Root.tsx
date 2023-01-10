import React from 'react';
import Header from '../components/Header';
import {Outlet} from 'react-router-dom';
import appBackground from '../assets/images/background.png';

const Root = () => {
	return (
		<div className={'app'}>
			<div className={'app__bg-container'}>
				<img src={appBackground} alt="Фон" className="app__bg"/>
			</div>
			<Header/>
			<Outlet/>
		</div>
	);
};

export default Root;
