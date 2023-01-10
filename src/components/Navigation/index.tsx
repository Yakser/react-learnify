import React from 'react';
import styles from './index.module.scss';


const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<p className={styles.navigation__link}>Поиск вуза</p>
			<p className={styles.navigation__link}>Поиск специальности</p>
			<p className={styles.navigation__link}>Калькулятор</p>
		</nav>
	);
};

export default Navigation;
