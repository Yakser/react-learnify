import React, {FormEvent, useEffect, useState} from 'react';
import styles from './index.module.scss';
import {useNavigate} from 'react-router-dom';
import {register} from '../../utils/authThunk';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';


const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('test');
	const [password, setPassword] = useState<string>('12345678');
	const [password2, setPassword2] = useState<string>('12345678');
	const [email, setEmail] = useState<string>('test@email.com');
	const [firstName, setFirstName] = useState<string>('firstname');
	const [lastName, setLastName] = useState<string>('lastname');
	const [errorText, setErrorText] = useState<string>('');
	const [subjects, setSubjects] = useState<string>('');
	const [achievements, setAchievements] = useState<string>('');
	const [about, setAbout] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onRegister = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== password2) {
			setErrorText('Пароли не совпадают');
			return;
		}
		setIsLoading(true);

		dispatch(register({username, password, email, first_name: firstName, last_name: lastName, subjects, achievements, about}))
			.then((response) => {

				const {payload} = response;

				if (payload.id) {
					navigate('/login');
					setErrorText('');
				} else {
					const text: Array<string> = [];
					for(const key in payload) {
						text.push(...payload[key]);
					}
					setErrorText(text.join('\n'));
				}
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setErrorText(error);
				setIsLoading(false);
			});
	};


	return (
		<form onSubmit={onRegister} className={`form ${styles.signUpForm}`}>
			<fieldset className={'form__fieldset'}>
				<legend className={'form__legend'}>Основная информация</legend>
				<label className={'form__label'}>
					<span className={'form__hint'}>Псевдоним</span>
					<input
						className={'form__input'}
						type="text"
						name="username"
						placeholder="learnify_enjoyer"
						minLength={2}
						maxLength={150}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label className={'form__label'}>
					<span className={'form__hint'}>Введите адрес эл. почты</span>
					<input
						className={'form__input'}
						type="email"
						name="email"
						placeholder="example@domain.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
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
				<label className={'form__label'}>
					<span className={'form__hint'}>Введите пароль</span>
					<input
						className={'form__input'}
						type="password"
						name="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						minLength={8}
						required
					/>
				</label>
				<label className={'form__label'}>
					<span className={'form__hint'}>Повторите пароль</span>
					<input
						className={'form__input'}
						type="password"
						name="password2"
						placeholder="password"
						minLength={8}
						value={password2}
						onChange={(e) => setPassword2(e.target.value)}
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
			<button className={'form__submit'} type="submit">Зарегистрироваться</button>
		</form>
	);
};

export default RegisterForm;
