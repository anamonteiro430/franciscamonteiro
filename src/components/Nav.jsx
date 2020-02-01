import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Nav = () => {
	return (
		<Router>
			<div>
				<Link>Resume</Link>
				<Link>My Projects</Link>
				<Link>Contact</Link>
			</div>
		</Router>
	);
};

export default Nav;
