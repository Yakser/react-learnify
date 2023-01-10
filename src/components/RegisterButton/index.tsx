import React from 'react';
import Button from '../Button';
import styles from './index.module.scss';

const RegisterButton = () => {
	const onClick = () => {
		console.warn('Register button clicked');
	};

	return (
		<Button className={styles['register-button']} onClick={onClick} text={'Регистрация'} link={'/register'}/>
	);
};

export default RegisterButton;
