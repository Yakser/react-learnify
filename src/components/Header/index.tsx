import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';
import LoginButton from '../LoginButton';
import RegisterButton from '../RegisterButton';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__wrapper}>
				<Logo/>
				<LoginButton/>
				<RegisterButton/>
			</div>
		</header>
	);
};

export default Header;
