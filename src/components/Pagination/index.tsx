import React from 'react';
import styles from './index.module.scss';

interface PaginationProps {
	limit: number,
	totalCount: number,
	currentPageIndex: number,
	showPage: CallableFunction,
}

const Pagination: React.FC<PaginationProps> = ({
	limit,
	totalCount,
	currentPageIndex,
	showPage
}) => {
	const pagesCount = Math.ceil(totalCount / limit);

	const onPageChange = (index: number) => {
		if (0 <= index && index < pagesCount) {
			showPage(index);
		}
	};

	return (
		<ul className={styles.pagination}>
			<li
				key={-1}
				onClick={() => onPageChange(currentPageIndex - 1)}
				className={`${styles.pagination__item} ${currentPageIndex <= 0 && styles.pagination__item_disabled}`}
			>
				Предыдущая
			</li>
			{
				Array(pagesCount).fill(null).map((_, index) => (
						<li
							key={index}
							onClick={() => onPageChange(index)}
							className={`${styles.pagination__item} ${index == currentPageIndex && styles.pagination__item_active}`}
						>
							{index + 1}
						</li>
					)
				)
			}
			<li
				key={-2}
				onClick={() => onPageChange(currentPageIndex + 1)}
				className={`${styles.pagination__item} ${currentPageIndex + 1 === pagesCount && styles.pagination__item_disabled}`}
			>
				Следующая
			</li>
		</ul>
	);
};

export default Pagination;
