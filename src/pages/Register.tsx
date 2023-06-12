import React, {useEffect} from 'react';
import RegisterForm from '../components/RegisterForm';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {useNavigate} from 'react-router-dom';
import {fetchUserData} from '../utils/authThunk';

const Register = () => {
	const {user} = useAppSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (user.id) {
			navigate('/');
		} else {
			dispatch(fetchUserData()).then((response) => {
				if (response.payload.id) {
					navigate('/');
				}
			});
		}
	}, []);

	return (
		<main className={'main'}>
			<div className={'main__wrapper'}></div>
			<h2 className={'title main__title'}>Регистрация</h2>
			<RegisterForm/>
		</main>
	);
};

export default Register;
