import React from 'react';
import Lottie from 'react-lottie'

import BubblesLottie from '../../assets/lottie/bubbles.json';
import classes from './Bubbles.css';

const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: BubblesLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

const bubbles =  (props) => (
	<div className={classes.Bubbles}>
		<Lottie options={defaultOptions}
              height={400}
              width={400}
        />
	</div>
);

export default bubbles;