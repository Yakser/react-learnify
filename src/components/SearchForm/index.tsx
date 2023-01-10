import React, {useRef} from 'react';
import styles from './index.module.scss';

interface SearchFormProps {
	onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
	onInterestChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	interests: string[];
	city: string;
}

const SearchForm: React.FC<SearchFormProps> = ({onSearch, onInterestChange, interests, onCityChange, city}) => {

	const ROTATION_COEFFICIENT_X = 10;
	const ROTATION_COEFFICIENT_Y = 20;

	const card = useRef<HTMLFormElement>(null);

	const handleMove = (e: React.MouseEvent<HTMLFormElement>) => {
		const {clientX, clientY, currentTarget} = e;
		const {
			clientWidth,
			clientHeight,
			offsetLeft,
			offsetTop,
		} = currentTarget;

		const horizontal = (clientX - offsetLeft) / clientWidth;
		const vertical = (clientY - offsetTop) / clientHeight;
		const rotateX = (horizontal * ROTATION_COEFFICIENT_X - ROTATION_COEFFICIENT_X / 2).toFixed(2);
		const rotateY = (ROTATION_COEFFICIENT_Y / 2 - vertical * ROTATION_COEFFICIENT_Y).toFixed(2);
		if (card.current) {
			card.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
		}
	};

	const handleLeave = () => {
		if (card.current) {
			card.current.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
		}
	};


	return (
		<form
			ref={card}
			onSubmit={onSearch}
			className={styles.searchForm}
			onMouseMove={handleMove}
			onMouseOut={handleLeave}>

			<label className={styles.searchForm__label}>
				<span className="visually-hidden">Ваши интересы через запятую</span>
				<input className={styles.searchForm__input}
					type="text" name={'interests'}
					value={interests}
					onChange={onInterestChange}
					placeholder={'Ваши интересы через запятую'}/>
			</label>
			<label className={styles.searchForm__label}>
				<span className="visually-hidden">Город поступления</span>
				<input className={styles.searchForm__input}
					type="text" name={'city'}
					value={city}
					onChange={onCityChange}
					placeholder={'Город поступления'}/>
			</label>
			<button className={styles.searchForm__button}>Поиск вуза</button>
		</form>
	);
};

export default SearchForm;
