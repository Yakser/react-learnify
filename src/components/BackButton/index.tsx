import React from 'react';
import styles from './index.module.scss';
import Button from '../Button';
import {useNavigate} from 'react-router-dom';

interface BackButtonProps {
	text: string;
}

const BackButton: React.FC<BackButtonProps> = ({text}) => {
	const navigate = useNavigate();


	return (
		<div className={styles.backButton}>
			<Button className={styles.backButton__button} text={text} onClick={() => navigate(-1)}/>
		</div>
	);
};

export default BackButton;
