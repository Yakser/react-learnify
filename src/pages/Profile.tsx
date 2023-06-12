import React from 'react';

import Button from '../components/Button';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {removeToken} from '../utils/helpers';
import {useNavigate} from 'react-router-dom';
import {logout} from '../utils/authThunk';

const Profile = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {user} = useAppSelector((state) => state.auth);
	const onLogout = () => {
		dispatch(logout()).then(() => {
			navigate('/');
		});
	};
	return (
		<div>
			<h2>Профиль</h2>
			<p>ID: {user.id}</p>
			<p>Имя: {user.first_name}</p>
			<p>Фамилия: {user.last_name}</p>
			<p>Почта: {user.email}</p>

			<Button onClick={onLogout} text="Выйти"/>
		</div>
	);
};

export default Profile;
