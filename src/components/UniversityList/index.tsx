import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import axios from 'axios';
import {University} from '../../types';
import UniversityCard from '../UniversityCard';


const UniversityList = () => {
	const [universities, setUniversities] = useState<University[]>([]);

	useEffect(() => {
		const API_URL: string = import.meta.env.VITE_API_URL;
		axios.get(`${API_URL}/universities/`).then((response) => {
			const {status, data} = response;
			if (status === 200) {
				setUniversities(data);
			}
		}).catch((error) => {
			console.error(error);
		});
	}, []);


	return (
		<div className={styles.universities}>
			{universities.length > 0 ? (
				<ul className={styles.universities__list}>
					{universities.map(item =>
						<li key={item.id} className={styles.universities__item}>
							<UniversityCard university={item}/>
						</li>
					)}
				</ul>
			) : (
				<p>Ничего не найдено 😔</p>
			)}
		</div>

	);
};

export default UniversityList;
