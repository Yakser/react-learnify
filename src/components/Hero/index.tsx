import React from 'react';
import styles from './index.module.scss';
import boyImage from '../../assets/images/boy.png';
import SearchForm from '../SearchForm';

interface IHeroProps {
	onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
	onInterestChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	interests: string[];
	city: string;

}

const Hero: React.FC<IHeroProps> = ({
	onSearch,
	onInterestChange,
	onCityChange,
	interests,
	city
}) => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<img className={styles.hero__image} src={boyImage} alt={'мальчик бизнесмен'}/>
				<div className={styles.hero__content}>
					<h2 className={styles.hero__title}>Поиск вуза</h2>
					<p className={styles.hero__text}>Введите ваши интересы и город, и узнайте, какой вуз вам
						подходит</p>
					<SearchForm onSearch={onSearch}
						onInterestChange={onInterestChange}
						onCityChange={onCityChange}
						interests={interests}
						city={city}/>
				</div>
			</div>
		</section>
	);
};

export default Hero;