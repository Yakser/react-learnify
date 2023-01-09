import React from 'react';
import styles from './index.module.scss';


const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<p className={styles.navigation__text}>Поиск вуза</p>
			<p className={styles.navigation__text}>Поиск специальности</p>
			<p className={styles.navigation__text}>Калькулятор</p>
		</nav>
	);
};

export default Navigation;
