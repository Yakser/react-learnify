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
		<Button className={styles.backButton} text={text} onClick={() => navigate(-1)}/>
	);
};

export default BackButton;
