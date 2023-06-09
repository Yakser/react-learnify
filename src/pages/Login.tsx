import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
	return (
		<main className={'main'}>
			<div className={'main__wrapper'}></div>
			<h2 className={'title main__title'}>Вход</h2>
			<LoginForm/>
		</main>
	);
};

export default Login;
