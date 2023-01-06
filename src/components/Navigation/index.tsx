import React from 'react';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';

const Logo = () => {
	return (
		<Link to={'/'} className={styles.logo}>
			<p className={styles.logo__text}>learnify</p>
		</Link>
	);
};

export default Logo;
