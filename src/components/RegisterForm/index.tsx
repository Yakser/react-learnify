import React from 'react';
import styles from './index.module.scss';


const RegisterForm = () => {
	return (
		<form className={`form ${styles.signUpForm}`}>
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
				<label className={'form__label'}>
					<span className={'form__hint'}>Повторите пароль</span>
					<input
						className={'form__input'}
						type="password"
						name="password2"
						placeholder="password"
						minLength={8}
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
					>
					</textarea>
				</label>
				<label className={'form__label'}>
					<span className={'form__hint'}>Что-то ещё? Не стесняйтесь рассказать о себе</span>
					<textarea
						className={'form__input form__textarea'}
						name="about"
						placeholder="Я люблю решать задачи и помогать другим людям, увлекаюсь программированием и спортом!"
						rows={10}
					>
					</textarea>
				</label>
			</fieldset>
			<button className={'form__submit'} type="submit">Зарегистрироваться</button>
		</form>
	);
};

export default RegisterForm;
