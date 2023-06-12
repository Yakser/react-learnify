import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {fetchUserData, logout} from '../utils/authThunk';
import ProfileCard from '../components/ProfileCard';

const Profile: React.FC = () => {
	const dispatch = useAppDispatch();
	const {user} = useAppSelector((state) => state.auth);
	const onLogout = () => {
		dispatch(logout());
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
