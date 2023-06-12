import React, {FormEvent, useEffect, useState} from 'react';
import styles from '../RegisterForm/index.module.scss';
import {getToken, login} from '../../utils/helpers';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const token = getToken();

	const navigate = useNavigate();
	useEffect(() => {
		if (token) {
			navigate('/');
		}
	}, []);


	const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		await login({username, password});
		navigate('/');
		setIsLoading(false);
	};
	return (
		<form onSubmit={handleLogin} className={`form ${styles.signUpForm}`}>
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
			{isLoading ? <div className="loading"><span>Loading...</span></div> :
				<button className={'form__submit'} type="submit">Войти</button>}


		</form>
	);
};

export default LoginForm;
