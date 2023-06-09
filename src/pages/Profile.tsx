import React from 'react';
import {signOut} from '../utils/authThunk';
import Button from '../components/Button';
import {useAppDispatch} from '../utils/hooks';

const Profile = () => {
	const dispatch = useAppDispatch();

	return (
		<div>
			<Button onClick={() => dispatch(signOut())} text="Выйти"/>
		</div>
	);
};

export default Profile;
