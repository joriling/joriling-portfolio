import React from 'react';
import Lottie from 'react-lottie'
import CloudLottie from '../../assets/lottie/cloudsv2.json';

import classes from './clouds.css';

const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: CloudLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

const clouds =  (props) => (
	 <div className={classes.Clouds}>
        <Lottie options={defaultOptions}
              height={700}
              width={700}
        />
      </div>
);

export default clouds;