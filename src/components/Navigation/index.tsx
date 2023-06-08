import React from 'react';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';


const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<Link to={'/'} className={styles.navigation__link}>
				Поиск вуза
			</Link>
			<Link to={'/specializations'} className={styles.navigation__link}>
				Поиск специальности
			</Link>
			{/*<Link to={'/calculator'} className={styles.navigation__link}>*/}
			{/*	Калькулятор*/}
			{/*</Link>*/}
		</nav>
	);
};

export default Navigation;
