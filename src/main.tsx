import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './App';

import {store} from './utils/store';
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<Provider store={store}>
		<App/>
	</Provider>
	// </React.StrictMode>,
);
