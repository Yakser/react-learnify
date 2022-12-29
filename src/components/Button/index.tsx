import React from 'react';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';

interface ButtonProps {
	text: string;
	onClick: () => void;
	className?: string;
	link?: string;
}

const Button: React.FC<ButtonProps> = ({text, onClick, className, link}) => {
	return (
		<Link to={link || '/'}>
			<button className={`${styles.button} ${className}`} type={'button'} onClick={onClick}>
				{text}
			</button>
		</Link>
	);
};

export default Button;
