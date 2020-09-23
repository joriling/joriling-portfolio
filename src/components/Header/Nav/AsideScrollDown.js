import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classes from './Nav.css';

const asideScrollDown =  (props) => (<div className={classes.Scrollwrapper}>
	 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <p className={classes.Aside}>scroll down</p>
		<span></span>
     </ScrollAnimation>
</div>
);

export default asideScrollDown;