import React from 'react';

import classes from './clouds.css';

const clouds =  (props) => (
	<div className={classes.Clouds}>
	  <div className={`${classes["part-of-cloud"]} ${classes.part1}`}></div>
	  <div className={`${classes["part-of-cloud"]} ${classes.part2}`}></div>
	  <div className={`${classes["part-of-cloud"]} ${classes.part3}`}></div>
	  <div className={`${classes["part-of-cloud"]} ${classes.part4}`}></div>
	  <div className={`${classes["part-of-cloud"]} ${classes.part5}`}></div>
	</div>
);

export default clouds;