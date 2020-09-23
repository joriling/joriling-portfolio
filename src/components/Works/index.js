import React from 'react';
import classes from './Works.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";

const works =  (props) => {
	console.log('Props', props);
	return (
		<ScrollAnimation animateIn="fadeIn" animateOut="zoomOut">
		    <div className={classes.WorksContainer}>
		    <h1 className={classes["section-title"]}>Projects</h1>
			    
			</div>
		</ScrollAnimation>
	);
}

export default works;