import React from 'react';
import styles from './index.module.scss';
import Tag from './Tag';

interface TagListProps {
	tags: string[];
	onDeleteTagByIndex: (index: number) => void;
}

const TagList: React.FC<TagListProps> = ({tags, onDeleteTagByIndex}) => {
	return (
		<ul className={styles.tagList}>
			{tags.map((tag, index) => (
				<li key={`${tag}${index}`}>
					<Tag tag={tag} index={index} onDeleteTagByIndex={onDeleteTagByIndex}/>
				</li>
			))}
		</ul>
	);
};

export default TagList;
