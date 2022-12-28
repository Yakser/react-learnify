import React from 'react';
import Button from '../Button';

const RegisterButton = () => {
	const onClick = () => {
		console.warn('Register button clicked');
	};

	return (
		<Button onClick={onClick} text={'Зарегистрироваться'}/>
	);
};

export default RegisterButton;
