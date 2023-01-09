import React from 'react';
import styles from './index.module.scss';


const SectionHero = () => {
	return (
		<section className={styles.sectionHero}>
			<div className={styles.container}>
				<div className={styles.sectionHero__content}>
					<h1 className={styles.sectionHero__title}>Поиск вуза</h1>
					<p className={styles.sectionHero__text}>Введите ваши интересы и город, и узнайте, какой вуз вам подходит</p>
				</div>
				<form className={styles.sectionHero__form}>
					<label htmlFor="interests"><span className={styles.visuallyHidden}>Ваши интересы:</span></label>
					<input id="interests" placeholder="Ваши интересы"></input>
					<label htmlFor="city"><span className={styles.visuallyHidden}>Город поступления:</span></label>
					<input id="city" placeholder="Город поступления"></input>
					<button type="submit">Поиск вузов</button>
				</form>
			</div>
		</section>
	);
};

export default SectionHero;