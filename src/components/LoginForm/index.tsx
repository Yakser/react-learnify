import React, {FormEvent, useEffect, useState} from 'react';
import styles from '../RegisterForm/index.module.scss';
import {getAccessToken} from '../../utils/helpers';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../utils/hooks';
import {login} from '../../utils/authThunk';

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const token = getAccessToken();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (token) {
			navigate('/');
		}
	}, []);


	const onLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		setError('');
		dispatch(login({username, password})).then((response) => {
			if (response.meta.requestStatus === 'fulfilled') {
				navigate('/');
			} else {
				setError('Неверный псевдоним или пароль!'); // or server error xD fixme
			}
		}).catch(() => {
			setError('Произошла неизвестная ошибка!');
		}).finally(() => {
			setIsLoading(false);
		});
	};
	return (
		<form onSubmit={onLogin} className={`form ${styles.signUpForm}`}>
			<label className={'form__label'}>
				<span className={'form__hint'}>Псевдоним</span>
				<input
					className={'form__input'}
					type="text"
					name="username"
					placeholder="learnify_enjoyer"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
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
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			<div className="form__error">
				{error}
			</div>
			<button className={'form__submit'} type="submit">
				{
					isLoading ? 'Загрузка...' : 'Войти'
				}
			</button>
		</form>
	);
};

export default LoginForm;
