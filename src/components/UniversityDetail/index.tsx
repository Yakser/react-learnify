import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';
import {IUniversityDetail} from '../../utils/types';
import axios from 'axios';
import {API_URL} from '../../utils/constants';
import styles from './index.module.scss';
import EmptyImage from '../EmptyImage';
import BackButton from '../BackButton';
import DepartmentCard from '../DepartmentCard';

const UniversityDetail = () => {
	const {universityId} = useParams();
	const [university, setUniversity] = useState<IUniversityDetail>({
		city: '', id: 0, logo_url: '', name: '', description: '', tags: [], departments: []
	});

	useEffect(() => {
		axios.get(`${API_URL}/universities/${universityId}/`).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setUniversity(data);
			}
		}).catch((error) => {
			console.error(error);
		});
	}, []);
	return (
		<>
			<BackButton text={'Назад к списку вузов'}/>

			<article className={styles.university}>
				{
					university.logo_url ? (
						<img src={university.logo_url}
								 className={styles.university__logo}
								 alt={`Логотип ${university.name}`}/>) :
						(
							<EmptyImage/>
						)

				}
				<h2 className={styles.university__name}>{university.name}</h2>
				<p className={styles.university__description}>{university.description}</p>

				<div className={styles.university__tags}>
					{university.tags.map(item =>
						<span key={item} className={styles.university__tag}>{item}</span>
					)}
				</div>

				{
					university.departments.length > 0 && (
						<>
							<h3 className={styles.university__subtitle}>
								Направления подготовки
							</h3>
							<ul className={styles.university__departments}>
								{
									university.departments.map((item) => (
										<li key={item.id} className={styles.university__department}>
											<DepartmentCard department={item}/>
										</li>
									))
								}
							</ul>
						</>
					)
				}
			</article>
		</>
	);
};

export default UniversityDetail;
