import React from 'react';
import Logo from '../Logo';
import styles from './index.module.scss';
import LoginButton from '../LoginButton';
import RegisterButton from '../RegisterButton';
import Navigation from '../Navigation';
import Button from '../Button';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';


const Header = () => {
	const {token, loading} = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	return (
		<header className={styles.header}>
			<div className={styles.header__wrapper}>
				<Logo/>
				<Navigation/>

				{token ? <div className={styles.header__buttons}>
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
