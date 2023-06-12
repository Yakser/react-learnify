import React, {useEffect} from 'react';

import Button from '../components/Button';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {useNavigate} from 'react-router-dom';
import {fetchUserData, logout} from '../utils/authThunk';
import ProfileCard from '../components/ProfileCard';

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
				<ProfileCard user={user} onLogout={onLogout}/>

			</div>
		</main>
	);
};

export default Profile;
