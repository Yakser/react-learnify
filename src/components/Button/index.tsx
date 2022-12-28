import React from 'react';
import styles from './index.module.scss';
interface ButtonProps {
    text: string;
    onClick: () => void;
	className?: string;
}
const Button: React.FC<ButtonProps> = ({text, onClick, className}) => {
	return (
		<button className={`${styles.button} ${className}`} type={'button'} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
