import React from 'react';
import {ISpecializationList} from '../../utils/types';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';
import EmptyImage from '../EmptyImage';

interface SpecializationCardProps {
	specialization: ISpecializationList;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({specialization}) => {
	const LINK_TO_DETAILED = `/specializations/${specialization.id}/`;
	return (
		<div className={styles['specialization-card']}>
			<Link to={LINK_TO_DETAILED}>
				{
					specialization.logo_url ? (
						<img src={specialization.logo_url}
								 className={styles['specialization-card__logo']}
								 alt={`Логотип ${specialization.name}`}/>) :
						(
							<EmptyImage/>
						)

				}
			</Link>
			<p className={styles['specialization-card__name']}>
				<Link to={LINK_TO_DETAILED}>
					{specialization.name}
				</Link>
			</p>
			<p className={styles['specialization-card__description']}>{specialization.short_description}</p>

			<div className={styles['specialization-card__tags']}>
				{specialization.tags.map(item =>
					<span key={item} className={styles['specialization-card__tag']}>{item}</span>
				)}
			</div>
		</div>
	);
};

export default SpecializationCard;
