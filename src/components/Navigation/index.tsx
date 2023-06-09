import React from 'react';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';
import Button from '../Button';


const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<Link to={'/'} className={styles.navigation__link}>
				Главная
			</Link>
			<Link to={'/universities'} className={styles.navigation__link}>
				Поиск вуза
			</Link>
			<Link to={'/specializations'} className={styles.navigation__link}>
				Поиск специальности
			</Link>
		</nav>
	);
};

export default Navigation;
