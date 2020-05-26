import React from 'react';

import classes from './Headline.css';

const headline =  (props) => (
	<div className={classes.Headline}>
		<h1 className={classes.title}>Hi! I'm Jolly Ann</h1>
		<p classes={classes.subTitle}>Front-end Developer/Designer</p>
	</div>
);

export default headline;