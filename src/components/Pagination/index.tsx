import React, {useEffect, useState} from 'react';
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
	const [indexesToShow, setIndexesToShow] = useState<number[]>([]);

	useEffect(() => {
		const pagesToShow = 7;

		if (pagesCount <= pagesToShow) {
			const tmp = Array(pagesCount).fill(null).map((_, i) => i);
			setIndexesToShow(tmp);
		} else {
			const inds = [];
			let l = Math.max(0, currentPageIndex - Math.floor(pagesToShow / 2));
			let rest = pagesToShow - (currentPageIndex - l);
			const r = Math.min(pagesCount, currentPageIndex + rest);
			rest = pagesToShow - (r - l);
			l = Math.max(0, l - rest);
			for (let i = l; i < r; i++) {
				inds.push(i);
			}
			setIndexesToShow(inds);
		}
	}, [pagesCount, currentPageIndex]);


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
				←
			</li>
			{
				indexesToShow.map(item => (
						<li
							key={item}
							onClick={() => onPageChange(item)}
							className={`${styles.pagination__item} ${item == currentPageIndex && styles.pagination__item_active}`}
						>
							{item + 1}
						</li>
					)
				)
			}
			<li
				key={-2}
				onClick={() => onPageChange(currentPageIndex + 1)}
				className={`${styles.pagination__item} ${currentPageIndex + 1 === pagesCount && styles.pagination__item_disabled}`}
			>
				→
			</li>
		</ul>
	);
};

export default Pagination;
