import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classes from './Headline.css';

const headline =  (props) => (
	<div className={classes.Headline}>
	 <ScrollAnimation animateIn="slideInRight" animateout="slideOutRight" delay="500">
            <h1 className={classes.Greetings}>こんにちは!</h1>
     </ScrollAnimation>
	 <ScrollAnimation animateIn="slideInLeft" animateout="slideOutLeft" delay="500">
            <h1 className={classes.title}>I'm Jolly Ann</h1>
     </ScrollAnimation>
      <ScrollAnimation animateIn="slideInRight" animateout="slideOutRight" delay="500">
            <p classes={classes.subTitle}>Front-end Developer/Designer</p>
     </ScrollAnimation>
	</div>
);

export default headline;