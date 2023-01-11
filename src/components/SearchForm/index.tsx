import React from 'react';
import styles from './index.module.scss';

interface SearchFormProps {
	onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
	onInterestChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	interests: string[];
	city: string;
	search_button_text: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
	onSearch,
	onInterestChange,
	interests,
	onCityChange,
	city,
	search_button_text
}) => {

	// const ROTATION_COEFFICIENT = 5;
	//
	// const card = useRef<HTMLFormElement>(null);

	// const handleMove = (e: React.MouseEvent<HTMLFormElement>) => {
	// 	const {clientX, clientY, currentTarget} = e;
	// 	const {
	// 		clientWidth,
	// 		clientHeight,
	// 		offsetLeft,
	// 		offsetTop,
	// 	} = currentTarget;
	//
	// 	const horizontal = (clientX - offsetLeft) / clientWidth;
	// 	const vertical = (clientY - offsetTop) / clientHeight;
	// 	const rotateX = (horizontal * ROTATION_COEFFICIENT - ROTATION_COEFFICIENT / 2).toFixed(2);
	// 	const rotateY = (ROTATION_COEFFICIENT / 2 - vertical * ROTATION_COEFFICIENT).toFixed(2);
	//
	// 	if (card.current) {
	// 		card.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
	// 	}
	// };
	//
	// const handleLeave = () => {
	// 	if (card.current) {
	// 		card.current.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
	// 	}
	// };

	return (
		<form
			// ref={card}
			onSubmit={onSearch}
			className={styles.searchForm}
			// onMouseMove={handleMove}
			// onMouseOut={handleLeave}
		>

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
			<button className={styles.searchForm__button}>{search_button_text}</button>
		</form>
	);
};

export default SearchForm;
