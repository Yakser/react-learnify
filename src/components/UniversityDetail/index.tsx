import React, {useEffect, useState} from 'react';

import {useParams, useNavigate} from 'react-router-dom';
import {IUniversityDetail} from '../../utils/types';
import axios from 'axios';
import {API_URL} from '../../utils/constants';
import styles from './index.module.scss';
import Button from '../Button';

const UniversityDetail = () => {
	const navigate = useNavigate();
	const {universityId} = useParams();
	const [university, setUniversity] = useState<IUniversityDetail>({
		city: '', id: 0, logo_url: '', name: '', description: '', tags: []
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
			<Button className={styles['university__go-back-button']} text={'Назад к списку вузов'} onClick={() => navigate(-1)}/>
			<article className={styles.university}>
				<img src={university.logo_url} className={styles.university__logo} alt="Логотип университета"/>
				<h2 className={styles.university__name}>{university.name}</h2>
				<p className={styles.university__description}>{university.description}</p>

				<div className={styles.university__tags}>
					{university.tags.map(item =>
						<span key={item} className={styles.university__tag}>{item}</span>
					)}
				</div>
			</article>
		</>
	);
};

export default UniversityDetail;
