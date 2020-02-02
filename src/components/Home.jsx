import React from 'react';
import Nav from './Nav';
import Reactcode from './React';
import github from './../images/gh.svg';
import linkedin from './../images/li.png';

const Home = () => {
	return (
		<div className='body'>
			<Nav />
			<div class='border'>
				<h1>Ana Francisca Monteiro</h1>
				<h2>FullStack Web Developer</h2>
			</div>
			<section className='social'>
				<img src={github} alt='sss' />
				<img src={linkedin} alt='' />
			</section>
			<section className='reactcode'>
				<Reactcode />
			</section>
		</div>
	);
};

export default Home;
