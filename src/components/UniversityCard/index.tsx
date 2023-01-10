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
				{
					university.logo_url ? (
						<img src={university.logo_url}
							className={styles['university-card__logo']}
							alt={`Логотип ${university.name}`}/>) :
						(
							<svg className={styles['university-card__empty-image-ico']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									d="M19.5,4H10a1,1,0,0,0,0,2H19.5a1,1,0,0,1,1,1v6.76l-1.88-1.88a3,3,0,0,0-1.14-.71,1,1,0,1,0-.64,1.9.82.82,0,0,1,.36.23l3.31,3.29a.66.66,0,0,0,0,.15.83.83,0,0,0,0,.15,1.18,1.18,0,0,0,.13.18.48.48,0,0,0,.09.11.9.9,0,0,0,.2.14.6.6,0,0,0,.11.06.91.91,0,0,0,.37.08,1,1,0,0,0,1-1V7A3,3,0,0,0,19.5,4ZM3.21,2.29A1,1,0,0,0,1.79,3.71L3.18,5.1A3,3,0,0,0,2.5,7V17a3,3,0,0,0,3,3H18.09l1.7,1.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM4.5,7a1,1,0,0,1,.12-.46L7.34,9.25a3,3,0,0,0-1,.63L4.5,11.76Zm1,11a1,1,0,0,1-1-1V14.58l3.3-3.29a1,1,0,0,1,1.4,0L15.91,18Z"/>
							</svg>
						)

				}
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
