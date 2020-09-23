import React from 'react';
import classes from './Aboutme.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";

const aboutMe =  (props) => {
	console.log('Props', props);
	return (
		<ScrollAnimation animateIn="fadeIn" animateOut="zoomOut">
		    <div className={classes.AboutmeContainer}>
		    <h1 className={classes["section-title"]}>About Jolly</h1>
			    <div className={classes.AboutContent}>
			    	<div className={classes.AboutDesigner}>
			    		<h1>Designer</h1>
			    		<p>I love to create simple design and functional user experience.</p>
			    		<p>Creating solutions to help users experienced a good application are one of my goals as a designer.</p>
			    	</div>
			    	<div className={classes.AboutImage}>
			    	  <div className={classes.JorilingImage}>
			    	</div>
				    </div>
				    <div className={classes.AboutCoder}>
				    	<h1>{"<Coder />"}</h1>
				    	<p>I'm not just a designer by heart I also love coding with experience in developing applications running in Laravel api and React JS front-end.</p>
				    </div>
				</div>
			</div>
		</ScrollAnimation>
	);
}

export default aboutMe;