import React from 'react';
import styles from './index.module.scss';
import {ISpecializationList} from '../../utils/types';

const SpecializationCard = React.lazy(() => import('../SpecializationCard'));

interface SpecializationListProps {
	specializations: ISpecializationList[];
}

const SpecializationList: React.FC<SpecializationListProps> = ({specializations}) => {
	return (
		<div className={styles.specializations}>
			<div className={styles.specializations__wrapper}>
				{specializations.length > 0 ? (
					<ul className={styles.specializations__list}>
						{specializations.map(item =>
							<li key={item.id} className={styles.specializations__item}>
								<SpecializationCard specialization={item}/>
							</li>
						)}
					</ul>
				) : (
					<p className={styles['specializations__not-found']}>Ничего не найдено 😔</p>
				)}

			</div>
		</div>

	);
};

export default SpecializationList;
