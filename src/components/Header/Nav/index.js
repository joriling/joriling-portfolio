import React from 'react';

import classes from './Nav.css';

const nav =  (props) => (
	<div className={classes.Nav}>
		<a href="">Joriling</a>
		<div className={classes.Menu}>
		    <input type="checkbox" id="checkbox" className={classes.Checkbox} />
		    <label for="checkbox" className={classes.Label} ></label>
		</div>	

	</div>
);

export default nav;