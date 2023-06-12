import React from 'react';
import styles from './index.module.scss';
import {IUniversityList} from '../../utils/types';
import {Transition} from 'react-transition-group';
import {DEFAULT_TRANSITION_STYLES, LIST_CONTENT_LOADERS, TRANSITION_STYLES} from '../../utils/constants';


const UniversityCard = React.lazy(() => import('../UniversityCard'));

interface UniversityListProps {
	universities: IUniversityList[];
	isLoading: boolean;
}


const UniversityList: React.FC<UniversityListProps> = ({
	universities,
	isLoading
}) => {
	return (
		<div className={styles.universities}>
			<Transition in={isLoading} timeout={200}>
				{
					(state) => (
						<div className={styles.universities__contentLoaders}
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
						<div className={styles.universities__wrapper}
							 style={{
								 ...DEFAULT_TRANSITION_STYLES,
								 ...TRANSITION_STYLES[state]
							 }}
						>
							{
								universities.length > 0 ? (
									<ul className={styles.universities__list}>
										{universities.map(item =>
											<li key={item.id} className={styles.universities__item}>
												<UniversityCard university={item}/>
											</li>
										)}
									</ul>
								) : (
									<p className={styles['universities__not-found']}>Ничего не найдено 😔</p>
								)

							}
						</div>
					)
				}
			</Transition>
		</div>
	);
};

export default UniversityList;
