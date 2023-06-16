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
		<div className={styles.specializationCard}>
			<Link to={LINK_TO_DETAILED} title={specialization.name}>
				{
					specialization.logo_url ? (
						<img src={specialization.logo_url}
								 className={styles.specializationCard__logo}
								 alt={`Логотип ${specialization.name}`}/>) :
						(
							<EmptyImage/>
						)
				}
			</Link>
			<p className={styles.specializationCard__name}>
				<Link to={LINK_TO_DETAILED}>
					{specialization.name}
				</Link>
			</p>
			<p className={styles.specializationCard__universityName}>
				<Link to={LINK_TO_DETAILED}>
					{specialization.university_name}
				</Link>
			</p>
			<p className={styles.specializationCard__description}>{specialization.short_description}</p>

			<div className={styles.specializationCard__tags}>
				{specialization.tags.map(item =>
					<span key={item} className={styles.specializationCard__tag}>{item}</span>
				)}
			</div>
		</div>
	);
};

export default SpecializationCard;
