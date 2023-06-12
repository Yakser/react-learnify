import React from 'react';
import styles from './index.module.scss';
import {IUser} from '../../utils/types';
import Button from '../Button';


interface ProfileCardProps {
	user: IUser,
	onLogout: () => void
}

const ProfileCard: React.FC<ProfileCardProps> = ({user, onLogout}) => {

	return (
		<div className={styles.profileCard}>
			<div className={styles.profileCard__img}>
				<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"
						strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>

			<div className={styles.profileCard__info}>
				<p className={styles.profileCard__text}>{user.first_name}</p>
				<p className={styles.profileCard__text}>{user.last_name}</p>
				<p className={styles.profileCard__text}>{user.email}</p>
			</div>
			<Button onClick={onLogout} text="Выйти"/>
		</div>
	);
};

export default ProfileCard;
