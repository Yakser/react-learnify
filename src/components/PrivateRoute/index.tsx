import {Navigate} from 'react-router-dom';
import React, {useEffect} from 'react';
import {useAppSelector} from '../../utils/hooks';
import {getAccessToken} from '../../utils/helpers';

interface PrivateRouteProps {
	children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
	// const {user} = useAppSelector((state) => state.auth);
	// useEffect(() => {
	// 	console.log(user.id);
	// }, []);
	return (
		<>
			{getAccessToken() ? children : <Navigate to="/login"/>}
		</>
	);
};

export default PrivateRoute;
