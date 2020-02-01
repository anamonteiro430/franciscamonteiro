import React from 'react';
import js from './../images/js.svg';
import react from './../images/react.svg';

const Bar = () => {
	return (
		<section className='bar'>
			<h3>Skills</h3>
			<div className='skills'>
				<img src={js} />
				<br />
				<img src={react} />
			</div>
		</section>
	);
};

export default Bar;
