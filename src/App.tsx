import './App.scss';
import React from 'react';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import Universities from './pages/Universities';
import Specializations from './pages/Specializations';
import Register from './pages/Register';
import Login from './pages/Login';
import Root from './pages/Root';
import UniversityDetail from './components/UniversityDetail';
import Error from './pages/Error';
import SpecializationDetail from './components/SpecializationDetail';
import Calculator from './pages/Calculator';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		errorElement: <Error/>,
		children: [
			{
				path: '/',
				element: <Universities/>,
			},
			{
				path: '/universities/:universityId',
				element: <UniversityDetail/>,
			},
			{
				path: '/specializations',
				element: <Specializations/>,
			},
			{
				path: '/specializations/:specializationId',
				element: <SpecializationDetail/>,
			},
			{
				path: '/calculator',
				element: <Calculator/>,
			},
			{
				path: 'login',
				element: <Login/>,
			},
			{
				path: 'register',
				element: <Register/>,
			},
		],
	},

]);
const App = () => {
	return (
		<RouterProvider router={router}/>
	);
};

export default App;
