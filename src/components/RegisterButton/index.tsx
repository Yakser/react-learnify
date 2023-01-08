import React from 'react';
import Button from '../Button';
import styles from './index.module.scss';

const RegisterButton = () => {
	const onClick = () => {
		console.warn('Register button clicked');
	};

	return (
		<Button className={styles['register-button']} onClick={onClick} text={'Зарегистрироваться'} link={'/register'}/>
	);
};

export default RegisterButton;
