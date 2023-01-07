import './App.scss';
import React from 'react';
import Main from './pages/Main';


import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Root from './pages/Root';
import UniversityDetail from './components/UniversityDetail';
import Error from './pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		errorElement: <Error/>,
		children: [
			{
				path: '/',
				element: <Main/>,
			},
			{
				path: '/universities/:universityId',
				element: <UniversityDetail/>,
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
