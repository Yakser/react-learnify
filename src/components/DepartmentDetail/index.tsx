import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {IDepartmentDetail} from '../../utils/types';
import axios from 'axios';
import BackButton from '../BackButton';
import styles from './index.module.scss';
import EmptyImage from '../EmptyImage';
import SpecializationList from '../SpecializationList';
import api from '../../utils/api';

const DepartmentDetail = () => {
	const {departmentId} = useParams();
	const [department, setDepartment] = useState<IDepartmentDetail>({
		city: '', logo_url: '', university_name: '',
		code: '', id: 0, name: '', specializations: [], tags: []
	});

	useEffect(() => {
		api.get(`/universities/departments/${departmentId}/`)
			.then((response) => {
				const {status, data} = response;
				if (status === 200) {
					setDepartment(data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<>
			<BackButton text={'Назад к университету'}/>
			<article className={styles.department}>
				{
					department.logo_url ? (
						<img src={department.logo_url}
								 className={styles.department__logo}
								 alt={`Логотип ${department.name}`}/>) :
						(
							<EmptyImage/>
						)

				}
				<h2 className={styles.department__name}>{department.name}</h2>
				<p className={styles.department__universityName}>{department.university_name}</p>
				{/* TODO */}
				{/*<p className={styles.department__description}>{department.description}</p>*/}

				<div className={styles.department__tags}>
					{department.tags.map(item =>
						<span key={item} className={styles.department__tag}>{item}</span>
					)}
				</div>

				{
					department.specializations.length > 0 ? (
						<>
							<h3 className={styles.department__subtitle}>Специализации</h3>
							<SpecializationList specializations={department.specializations} isLoading={false}/>
							{/*<ul className={styles.department__specializations}>*/}
							{/*	{department.specializations.map(item =>*/}
							{/*		<li key={item.id} className={styles.department__specialization}>*/}
							{/*			<SpecializationCard specialization={item}/>*/}
							{/*		</li>*/}
							{/*	)}*/}
							{/*</ul>*/}
						</>
					) : null
				}

			</article>
		</>
	);
};

export default DepartmentDetail;
