import React from 'react';
import styles from './index.module.scss';

interface SearchFormProps {
	onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
	onInterestChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	interests: string[];
	city: string;
}

const SearchForm: React.FC<SearchFormProps> = ({onSearch, onInterestChange, interests, onCityChange, city}) => {
	return (
		<form onSubmit={onSearch} className={styles.form}>
			<label className={styles.form__label}>
				<span className="visually-hidden">Ваши интересы через запятую</span>
				<input className={styles.form__input} type="text" name={'interests'} value={interests}
					onChange={onInterestChange}
					placeholder={'Ваши интересы через запятую'}/>
			</label>
			<label className={styles.form__label}>
				<span className="visually-hidden">Город поступления</span>
				<input className={styles.form__input} type="text" name={'city'} value={city}
					onChange={onCityChange} placeholder={'Город поступления'}/>
			</label>
			<button className={styles.form__button}>Поиск вуза</button>
		</form>
	);
};

export default SearchForm;
