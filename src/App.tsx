import './App.scss';
import React from 'react';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import Register from './pages/Register';
import Root from './pages/Root';
import UniversityDetail from './components/UniversityDetail';
import Error from './pages/Error';
import Profile from './pages/Profile';
import Universities from './pages/Universities';
import Feed from './pages/Feed';
import Specializations from './pages/Specializations';
import SpecializationDetail from './components/SpecializationDetail';
import DepartmentDetail from './components/DepartmentDetail';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';



export const router = createBrowserRouter([
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
				path: '/feed',
				element: <Feed/>,
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
				path: '/departments/:departmentId',
				element: <DepartmentDetail/>,
			},
			{
				path: '/login',
				element: <LoginPage/>,
			}, {
				path: '/register',
				element: <Register/>,
			},
			{
				path: '/profile',
				element: <PrivateRoute>
					<Profile/>
				</PrivateRoute>,
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
