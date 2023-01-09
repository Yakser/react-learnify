import React from 'react';
import {University} from '../../types';
import styles from './index.module.scss';
// TODO
import logo from '../../assets/images/mpu-logo.jpg';

interface UniversityCardProps {
	university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({university}) => {
	return (
		<div className={styles['university-card']}>
			<img src={logo} className={styles['university-card__logo']} alt="Логотип университета"/>
			<p className={styles['university-card__name']}>{university.name}</p>
			<div className={styles['university-card__tags']}>
				{university.tags.map(item =>
					<span key={item} className={styles['university-card__tag']}>{item}</span>
				)}
			</div>
		</div>
	);
};

export default UniversityCard;
