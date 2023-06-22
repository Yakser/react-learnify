import React, {FormEvent, useEffect, useState} from 'react';
import styles from './index.module.scss';
import Button from '../Button';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {editUserData, fetchUserData, logout} from '../../utils/authThunk';
import {useNavigate} from 'react-router-dom';


const ProfileCard: React.FC = () => {
	const dispatch = useAppDispatch();
	const {user} = useAppSelector((state) => state.auth);
	const onLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		setFirstName(user.first_name || '');
		setLastName(user.last_name || '');
		setSubjects(user.favorite_subjects || '');
		setAchievements(user.achievements || '');
		setAbout(user.about || '');
	}, [user]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [firstName, setFirstName] = useState<string>(user.first_name || '');
	const [lastName, setLastName] = useState<string>(user.last_name || '');
	const [errorText, setErrorText] = useState<string>('');
	const [subjects, setSubjects] = useState<string>(user.favorite_subjects || '');
	const [achievements, setAchievements] = useState<string>(user.achievements || '');
	const [about, setAbout] = useState<string>(user.about || '');
	const navigate = useNavigate();
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		dispatch(editUserData({
			first_name: firstName,
			last_name: lastName,
			favorite_subjects: subjects,
			achievements,
			about,
		}))
			.then((response: any) => {
				const {payload} = response;

				if (payload.id) {
					setErrorText('');
				} else {
					const text: Array<string> = [];
					for (const key in payload) {
						text.push(...payload[key]);
					}
					setErrorText(text.join('\n'));
				}
			})
			.catch((error) => {
				console.log(error);
				setErrorText(error);
			}).finally(() => {
			setIsLoading(false);

		});
	};

	return (
		<div className={styles.profileCard}>
			<div className={styles.profileCard__img}>
				<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"
						strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
			<p>{user.username}</p>
			<p>{user.email}</p>
			<form onSubmit={onSubmit} className={`form ${styles.profileCard__form}`}>
				<fieldset className={'form__fieldset'}>
					<legend className={'form__legend'}>Основная информация</legend>

					<label className={'form__label'}>
						<span className={'form__hint'}>Имя</span>
						<input
							className={'form__input'}
							type="text"
							name="first_name"
							placeholder="Иван"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</label>
					<label className={'form__label'}>
						<span className={'form__hint'}>Фамилия</span>
						<input
							className={'form__input'}
							type="text"
							name="last_name"
							placeholder="Иванов"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</label>
				</fieldset>
				<fieldset className={'form__fieldset'}>
					<legend className={'form__legend'}>Расскажите о себе</legend>
					<label className={'form__label'}>
						<span className={'form__hint'}>Напишите через запятую свои любимые школьные предметы</span>
						<textarea
							className={'form__input form__textarea'}
							name="subjects"
							value={subjects}
							onChange={(e) => setSubjects(e.target.value)}
							placeholder="математика, физика, информатика"
							rows={10}
						>
					</textarea>
					</label>
					<label className={'form__label'}>
						<span className={'form__hint'}>Расскажите о своих академических достижениях</span>
						<textarea
							className={'form__input form__textarea'}
							name="achievements"
							placeholder="1-е место в олимпиаде по математике, 2-е место в олимпиаде по физике"
							rows={10}
							value={achievements}
							onChange={(e) => setAchievements(e.target.value)}
						>
					</textarea>
					</label>
					<label className={'form__label'}>
						<span className={'form__hint'}>Что-то ещё? Не стесняйтесь рассказать о себе</span>
						<textarea
							className={'form__input form__textarea'}
							name="about"
							value={about}
							onChange={(e) => setAbout(e.target.value)}
							placeholder="Я люблю решать задачи и помогать другим людям, увлекаюсь программированием и спортом!"
							rows={10}
						>
					</textarea>
					</label>
				</fieldset>
				<div className={'form__error'}>
					{errorText}
				</div>
				<button className={'form__submit'} type="submit" disabled={isLoading}>
					{isLoading ? 'Загрузка...' : 'Изменить'}
				</button>
			</form>
			<Button onClick={onLogout} text="Выйти"/>
		</div>
	);
};

export default ProfileCard;
