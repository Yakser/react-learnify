import React from 'react';
import {IUniversityList} from '../../utils/types';
import styles from './index.module.scss';
// TODO
import {Link} from 'react-router-dom';

interface UniversityCardProps {
	university: IUniversityList;
}

const UniversityCard: React.FC<UniversityCardProps> = ({university}) => {
	const LINK_TO_DETAILED = `/universities/${university.id}/`;
	return (
		<div className={styles['university-card']}>
			<Link to={LINK_TO_DETAILED}>
				<img src={university.logo_url}
					className={styles['university-card__logo']}
					alt={`Логотип ${university.name}`}/>
			</Link>
			<p className={styles['university-card__name']}>
				<Link to={LINK_TO_DETAILED}>
					{university.name}
				</Link>
			</p>
			<p className={styles['university-card__description']}>{university.short_description}</p>

			<div className={styles['university-card__tags']}>
				{university.tags.map(item =>
					<span key={item} className={styles['university-card__tag']}>{item}</span>
				)}
			</div>
		</div>
	);
};

export default UniversityCard;
