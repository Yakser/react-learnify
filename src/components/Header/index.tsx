import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';
import LoginButton from '../LoginButton';
import RegisterButton from '../RegisterButton';
import Navigation from '../Navigation';
import Button from '../Button';
import {useAppSelector} from '../../utils/hooks';


const Header = () => {
	const {user} = useAppSelector((state) => state.auth);

	return (
		<header className={styles.header}>
			<div className={styles.header__wrapper}>
				<Logo/>
				<Navigation/>

				{user.id ? <div className={styles.header__buttons}>
						<Button text="Профиль" link={'/profile'}/>
					</div> :
					<div className={styles.header__buttons}>
						<LoginButton/>
						<RegisterButton/>
					</div>
				}
			</div>
		</header>
	);
};

export default Header;
