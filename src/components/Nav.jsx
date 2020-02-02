import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import react from './../images/react.svg';
import Resume from './Resume';
import Home from './Home';

const Nav = () => {
	return (
		<Router>
			<div className='made'>
				Made with
				<img src={react} />
			</div>
			<div className='nav'>
				<Link to='/resume' className='nav-item'>
					Resume
				</Link>
				<Link className='nav-item'>My Projects</Link>
				<Link className='nav-item'>Contact</Link>
			</div>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/resume'>
					<Resume />
				</Route>
			</Switch>
		</Router>
	);
};

export default Nav;
