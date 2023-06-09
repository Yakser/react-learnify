import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
	return (
		<main className={'main'}>
			<div className={'main__wrapper'}></div>
			<h2 className={'title main__title'}>Регистрация</h2>
			<RegisterForm/>
		</main>
	);
};

export default Register;
