import React from 'react';
import styles from './index.module.scss';
import {IUniversityList} from '../../utils/types';
import UniversityCard from '../UniversityCard';

interface UniversityListProps {
	universities: IUniversityList[];
}

const UniversityList: React.FC<UniversityListProps> = ({universities}) => {
	return (
		<div className={styles.universities}>
			{universities.length > 0 ? (
				<ul className={styles.universities__list}>
					{universities.map(item =>
						<li key={item.id} className={styles.universities__item}>
							<UniversityCard university={item}/>
						</li>
					)}
				</ul>
			) : (
				<p className={styles['universities__not-found']}>Ничего не найдено 😔</p>
			)}
		</div>

	);
};

export default UniversityList;
