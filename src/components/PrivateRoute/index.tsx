import {Navigate} from 'react-router-dom';
import React from 'react';
import {useAppSelector} from '../../utils/hooks';

interface PrivateRouteProps {
	children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
	const {user} = useAppSelector((state) => state.auth);

	return (
		<>
			{user.id ? children : <Navigate to="/login"/>}
		</>
	);
};

export default PrivateRoute;
