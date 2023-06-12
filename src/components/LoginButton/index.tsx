import React from 'react';
import Button from '../Button';
import styles from './index.module.scss';

const LoginButton = () => {
	const onClick = () => {
		return;
	};

	return (
		<Button className={styles['login-button']} onClick={onClick} text={'Войти'} link={'/login'}/>
	);
};

export default LoginButton;
