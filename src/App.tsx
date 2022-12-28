import styles from './App.module.scss';
import Header from './components/Header';
import React  from 'react';

function App() {
	return (
		<div className={styles.App}>
			<h1>Hello Learnify</h1>
			<Header />
		</div>
	);
}

export default App;
