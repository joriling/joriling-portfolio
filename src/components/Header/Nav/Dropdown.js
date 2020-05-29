import React from 'react';

import classes from './Nav.css';

const dropdown =  (props) => (
	<div className={`${classes.DropdownContainer} ${props.open && classes["--open"]}`}>
		<ul>
			<li>
				<a href="" className={classes.underline}>home</a>
			</li>
			<li>
				<a href="" className={classes.underline}>works</a>
			</li>
			<li>
				<a href="" className={classes.underline}>about</a>
			</li>
			<li>
				<a href="" className={classes.underline}>contact</a>
			</li>
		</ul>
	</div>
);

export default dropdown;