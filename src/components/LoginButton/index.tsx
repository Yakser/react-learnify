import React from 'react';
import Button from '../Button';
import styles from './index.module.scss';

const LoginButton = () => {
	const onClick = () => {
		console.warn('Login button clicked');
	};

	return (
		<Button className={styles['login-button']} onClick={onClick} text={'Войти'}/>
	);
};

export default LoginButton;
