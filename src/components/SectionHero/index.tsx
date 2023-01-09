import React from 'react';
import styles from './index.module.scss';
import boy from '../../assets/images/boy.png';


const SectionHero = () => {
	return (
		<section className={styles.sectionHero}>
			<div className={styles.sectionHero__wrapper}>
				<div className={styles.sectionHero__content}>
					<img src={boy} alt="мальчик бизнесмен"/>
					<h2 className={styles.sectionHero__title}>Поиск вуза</h2>
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