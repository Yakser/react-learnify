import React, {useEffect} from 'react';

import Button from '../components/Button';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {useNavigate} from 'react-router-dom';
import {fetchUserData, logout} from '../utils/authThunk';

const Profile = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {user} = useAppSelector((state) => state.auth);
	const onLogout = () => {
		dispatch(logout()).then(() => {
			navigate('/');
		});
	};

	useEffect(() => {
		if (!user.id) {
			dispatch(fetchUserData());
		}
	}, []);

	return (
		<main className={'main'}>
			<div className={'main__wrapper'}>

				<h2 className={'main__title'}>Профиль</h2>
				<p>Имя: {user.first_name}</p>
				<p>Фамилия: {user.last_name}</p>
				<p>Почта: {user.email}</p>

				<Button onClick={onLogout} text="Выйти"/>
			</div>
		</main>
	);
};

export default Profile;
