import React from 'react';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';
import {IDepartmentList} from '../../utils/types';

interface DepartmentCardProps {
	department: IDepartmentList;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({department}) => {
	const LINK_TO_DETAILED = `/departments/${department.id}/`;
	return (
		<Link to={LINK_TO_DETAILED}>
			<div className={styles.departmentCard}>
				<p className={styles.departmentCard__name}>
					{department.name}
				</p>

				{/*TODO*/}
				{/*<p className={styles.departmentCard__description}>{department.short_description}</p>*/}

				{/* TODO */}
				{/*<div className={styles.departmentCard__tags}>*/}
				{/*	{department.tags.map(item =>*/}
				{/*		<span key={item} className={styles.departmentCard__tag}>{item}</span>*/}
				{/*	)}*/}
				{/*</div>*/}
			</div>
		</Link>
	);
};

export default DepartmentCard;
