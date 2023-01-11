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
	hero_title: string;
	hero_text: string;
	search_button_text: string;

}

const Hero: React.FC<IHeroProps> = ({
	onSearch,
	onInterestChange,
	onCityChange,
	interests,
	city,
	hero_title,
	hero_text,
	search_button_text
}) => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<img className={styles.hero__image} src={boyImage} alt={'мальчик бизнесмен'}/>
				<div className={styles.hero__content}>
					<h2 className={styles.hero__title}>{hero_title}</h2>
					<p className={styles.hero__text}>{hero_text}</p>
					<SearchForm onSearch={onSearch}
						onInterestChange={onInterestChange}
						onCityChange={onCityChange}
						interests={interests}
						city={city}
						search_button_text={search_button_text}/>
				</div>
			</div>
		</section>
	);
};

export default Hero;