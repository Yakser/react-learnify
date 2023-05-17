import React from 'react';
import styles from './index.module.scss';
import boyImage from '../../../../next-learnify/public/images/boy.png';
import SearchForm from '../SearchForm';

interface IHeroProps {
	onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
	onSearchClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onTagChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	tags: string[];
	tag: string;
	city: string;
	hero_title: string;
	hero_text: string;
	search_button_text: string;
	onAddTag: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onDeleteTagByIndex: (index: number) => void;

}

const Hero: React.FC<IHeroProps> = ({
	onSearch,
	onSearchClick,
	onTagChange,
	onCityChange,
	tags,
	tag,
	city,
	hero_title,
	hero_text,
	search_button_text,
	onAddTag,
	onDeleteTagByIndex
}) => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<img className={styles.hero__image} src={boyImage} alt={'мальчик бизнесмен'}/>
				<div className={styles.hero__content}>
					<h2 className={styles.hero__title}>{hero_title}</h2>
					<p className={styles.hero__text}>{hero_text}</p>
					<SearchForm
						onSearch={onSearch}
						onSearchClick={onSearchClick}
						onAddTag={onAddTag}
						onTagChange={onTagChange}
						onCityChange={onCityChange}
						tags={tags}
						tag={tag}
						city={city}
						search_button_text={search_button_text}
						onDeleteTagByIndex={onDeleteTagByIndex}/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
