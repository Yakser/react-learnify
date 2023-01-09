import React from 'react';
// import styles from './index.module.scss';


const RegisterForm = () => {
	return (
		<form className={'form'}>
			<fieldset className={'form__fieldset'}>
				<legend className={'form__legend'}>Личная информация</legend>
				<label className={'form__label'}>
					<span className={'form__hint'}>Псевдоним</span>
					<input
						className={'form__input'}
						type="text"
						name="username"
						placeholder="learnify_enjoyer"
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
						required
					/>
				</label>
			</fieldset>
			<fieldset className={'form__fieldset'}>
				<legend className={'form__legend'}>Contact info</legend>
				<label className={'form__label'}>
					<span className={'form__hint'}>Enter your email address</span>
					<input
						className={'form__input'}
						type="email"
						name="email"
						placeholder="example@domain.com"
						required
					/>
				</label>
				<label className={'form__label'}>
					<span className={'form__hint'}>Enter your password</span>
					<input
						className={'form__input'}
						type="password"
						name="password"
						placeholder="password"
						required
					/>
				</label>
			</fieldset>

			<button className={'form__submit'} type="submit">Зарегистрироваться</button>
		</form>
	);
};

export default RegisterForm;
