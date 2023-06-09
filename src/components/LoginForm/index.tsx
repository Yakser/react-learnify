import React from 'react';
import styles from '../RegisterForm/index.module.scss';

const LoginForm = () => {
	return (
		<form className={`form ${styles.signUpForm}`}>
			<label className={'form__label'}>
				<span className={'form__hint'}>Псевдоним</span>
				<input
					className={'form__input'}
					type="text"
					name="username"
					placeholder="learnify_enjoyer"
					minLength={2}
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
					minLength={8}
					required
				/>
			</label>
			<button className={'form__submit'} type="submit">Войти</button>
		</form>
	);
};

export default LoginForm;
