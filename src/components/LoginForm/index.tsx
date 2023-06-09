import React, {FormEvent, useEffect, useState} from 'react';
import styles from '../RegisterForm/index.module.scss';
import {getToken} from '../../utils/helpers';
import {useNavigate} from 'react-router-dom';
import {login} from '../../utils/authThunk';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useAppDispatch();
	const {token, loading} = useAppSelector((state) => state.auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (token || getToken()) {
			navigate('/');
		}
	}, []);


	const handleLogin = (event: FormEvent<SubmitEvent>) => {
		event.preventDefault();
		dispatch(login({username, password}));
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
			{loading ? <div className="loading"><span>Loading...</span></div> :
				<button className={'form__submit'} type="submit">Войти</button>}


		</form>
	);
};

export default LoginForm;
