import React from 'react';
import styles from './index.module.scss';

const SearchForm = () => {
	const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('searching...');
	};

	return (
		<form onSubmit={onSearch} className={styles.form}>
			<label className={styles.form__label}>
				<span className="visually-hidden">Ваши интересы через запятую</span>
				<input className={styles.form__input} type="text" name={'tags'} placeholder={'Ваши интересы через запятую'}/>
			</label>
			<label className={styles.form__label}>
				<span className="visually-hidden">Город поступления</span>
				<input className={styles.form__input} type="text" name={'tags'} placeholder={'Город поступления'}/>
			</label>
			<button className={styles.form__button}>Поиск вуза</button>
		</form>
	);
};

export default SearchForm;
