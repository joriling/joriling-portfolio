import React from 'react';

import classes from './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, 
		faFacebook,
		faGithub,
		faInstagram, 
		faBehance,
		faDribbble, 
		faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const socialIcons =  (props) => (
	<div className={classes.SocialIcons}>
		<div className={`${classes.Icons} ${classes.Linkedin}`}>
			<a href=""><FontAwesomeIcon icon={faLinkedin}/></a>
		</div>
		<div className={`${classes.Icons} ${classes.Github}`}>
			<a href=""><FontAwesomeIcon icon={faGithub}/></a>
		</div>
		<div className={`${classes.Icons} ${classes.FreeCodeCamp}`}>
			<a href=""><FontAwesomeIcon icon={faFreeCodeCamp}/></a>
		</div>
		<div className={`${classes.Icons} ${classes.Behance}`}>
			<a href=""><FontAwesomeIcon icon={faBehance}/></a>
		</div>
		<div className={`${classes.Icons} ${classes.Dribbble}`}>
			<a href=""><FontAwesomeIcon icon={faDribbble}/></a>
		</div>
		<div className={`${classes.Icons} ${classes.Instagram}`}>
			<a href=""><FontAwesomeIcon icon={faInstagram}/></a>
		</div>
		<div className={`${classes.Icons} ${classes.Facebook}`}>
			<a href=""><FontAwesomeIcon icon={faFacebook}/></a>
		</div>
	</div>
);

export default socialIcons;