import React from 'react';
import appBackground from '../../../next-learnify/public/images/background.png';
import Header from '../components/Header';

const Error = () => {
	return (
		<div className={'app'}>
			<div className={'app__bg-container'}>
				<img src={appBackground} alt="Фон" className="app__bg"/>
			</div>
			<Header/>
			<h2 className={'title'}>Ошибка!</h2>
			<p>
				Такой страницы не существует!
			</p>
		</div>
	);
};

export default Error;
