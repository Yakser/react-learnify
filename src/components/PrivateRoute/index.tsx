import {Navigate} from 'react-router-dom';
import React from 'react';
import Loading from '../Loading';
import {useAppSelector} from '../../utils/hooks';

interface PrivateRouteProps {
	children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
	const {token, loading} = useAppSelector((state) => state.auth);


	return (
		loading ? <Loading/> :

			token ? children : <Navigate to="/login"/>
	);
};

export default PrivateRoute;
