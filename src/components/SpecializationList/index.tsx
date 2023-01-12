import React from 'react';
import styles from './index.module.scss';
import {ISpecializationList} from '../../utils/types';
import {DEFAULT_TRANSITION_STYLES, LIST_CONTENT_LOADERS, TRANSITION_STYLES} from '../../utils/constants';
import {Transition} from 'react-transition-group';

const SpecializationCard = React.lazy(() => import('../SpecializationCard'));

interface SpecializationListProps {
	isLoading: boolean;
	specializations: ISpecializationList[];
}

const SpecializationList: React.FC<SpecializationListProps> = ({
	specializations,
	isLoading
}) => {
	return (
		<div className={styles.specializations}>
			<Transition in={isLoading} timeout={200}>
				{
					(state) => (
						<div className={styles.specializations__contentLoaders}
							 style={{
								 ...DEFAULT_TRANSITION_STYLES,
								 ...TRANSITION_STYLES[state]
							 }}>
							{LIST_CONTENT_LOADERS}
						</div>
					)
				}
			</Transition>

			<Transition in={!isLoading} timeout={200}>
				{
					(state) => (
						<div className={styles.specializations__wrapper}
							 style={{
								 ...DEFAULT_TRANSITION_STYLES,
								 ...TRANSITION_STYLES[state]
							 }}>
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
					)
				}

			</Transition>

		</div>

	);
};

export default SpecializationList;
