import React from 'react';
import styles from './index.module.scss';
import TagList from '../TagList';

interface SearchFormProps {
	onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
	onSearchClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onTagChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	tag: string;
	tags: string[];
	city: string;
	search_button_text: string;
	onAddTag: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onDeleteTagByIndex: (index: number) => void;
	name: string;
	onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
	onSearch,
	onSearchClick,
	onTagChange,
	tag,
	tags,
	onCityChange,
	city,
	search_button_text,
	onAddTag,
	onDeleteTagByIndex,
	name,
	onNameChange
}) => {
	return (
		<form
			onSubmit={onSearch}
			className={styles.searchForm}
		>

			<label className={`${styles.searchForm__label} ${styles.searchForm__label_name}`}>
				<span className="visually-hidden">Название</span>
				<input className={styles.searchForm__input}
					   type="text"
					   name="name"
					   value={name}
					   onChange={onNameChange}
					   placeholder={'Название'}
				/>
			</label>
			{
				tags.length > 0 && <div className={styles.searchForm__tags}>
					<TagList tags={tags}
							 onDeleteTagByIndex={onDeleteTagByIndex}
					/>
				</div>
			}

			<label className={styles.searchForm__label}>
				<span className="visually-hidden">Введите ваши интересы по одному</span>
				<input className={styles.searchForm__input}
					   type="text"
					   name={'tags'}
					   value={tag}
					   onKeyDown={onAddTag}
					   onChange={onTagChange}
					   placeholder={'Ваши интересы'}
				/>
				<span className={styles.searchForm__text}>
						Нажмите Enter, чтобы добавить
					</span>
			</label>
			<label className={styles.searchForm__label}>
				<span className="visually-hidden">Город поступления</span>
				<input className={styles.searchForm__input}
					   type="text"
					   name={'city'}
					   value={city}
					   onChange={onCityChange}
					   placeholder={'Город поступления'}/>
			</label>
			<button onClick={onSearchClick} className={styles.searchForm__button}>{search_button_text}</button>
		</form>
	);
};

export default SearchForm;
