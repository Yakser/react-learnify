import React from 'react';
import styles from './index.module.scss';
import {IUniversityList} from '../../utils/types';
const UniversityCard = React.lazy(() => import('../UniversityCard'));

interface UniversityListProps {
	universities: IUniversityList[];
}

const UniversityList: React.FC<UniversityListProps> = ({universities}) => {
	return (
		<div className={styles.universities}>
			<div className={styles.universities__wrapper}>
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
		</div>

	);
};

export default UniversityList;
