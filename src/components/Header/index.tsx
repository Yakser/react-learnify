import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';
import LoginButton from '../LoginButton';
import RegisterButton from '../RegisterButton';
import Navigation from '../Navigation';


const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__wrapper}>
				<Logo/>
				<Navigation/>
				<LoginButton/>
				<RegisterButton/>
			</div>
		</header>
	);
};

export default Header;
