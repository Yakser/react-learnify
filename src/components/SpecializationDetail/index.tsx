import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';
import {ISpecializationDetail} from '../../utils/types';
import styles from './index.module.scss';
import EmptyImage from '../EmptyImage';
import BackButton from '../BackButton';
import api from '../../utils/api';

const SpecializationDetail = () => {
	const {specializationId} = useParams();
	const [specialization, setSpecialization] = useState<ISpecializationDetail>({
		city: '', id: 0, logo_url: '', name: '', description: '', tags: [], university_name: ''
	});

	useEffect(() => {
		api.get(`/universities/specializations/${specializationId}/`)
			.then((response) => {
				const {status, data} = response;
				if (status === 200) {
					setSpecialization(data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<>
			<BackButton text={'Назад к списку специализаций'}/>
			<article className={styles.specialization}>
				{
					specialization.logo_url ? (
						<img src={specialization.logo_url}
								 className={styles.specialization__logo}
								 alt={`Логотип ${specialization.name}`}/>) :
						(
							<EmptyImage/>
						)

				}
				<h2 className={styles.specialization__name}>{specialization.name}</h2>
				<p className={styles.specialization__universityName}>{specialization.university_name}</p>
				<p className={styles.specialization__description}>{specialization.description}</p>

				<div className={styles.specialization__tags}>
					{specialization.tags.map(item =>
						<span key={item} className={styles.specialization__tag}>{item}</span>
					)}
				</div>
			</article>
		</>
	);
};

export default SpecializationDetail;

