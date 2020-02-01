import React from 'react';
import Bar from './components/Bar';
import Home from './components/Home';
import { Code } from './components/Code';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Bar />
			<Code />
			<Home />
		</div>
	);
}

export default App;
