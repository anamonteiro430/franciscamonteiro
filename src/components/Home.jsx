import React from 'react';
import Nav from './Nav';
import github from './../images/gh.svg';
import linkedin from './../images/li.png';

const Home = () => {
	return (
		<div>
			<Nav />
			<div class='border'>
				<h1>Ana Francisca Monteiro</h1>
				<h2>FullStack Web Developer</h2>
			</div>
			<section>
				<img src={github} alt='sss' />
				<img src={linkedin} alt='' />
			</section>
		</div>
	);
};

export default Home;
