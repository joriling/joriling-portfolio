import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';

import Banner from '../components/Banner';
import Rainbow from '../components/Rainbow';
import Clouds from '../components/Clouds';
import Headline from '../components/Header/Headline';
import Nav from '../components/Header/Nav';
import SocialIcons from '../components/SocialIcons/';

import classes from './Portfolio.css';
class Portfolio extends Component {
	render() {
		return (
		<Fullpage>
		<Nav/>
        <FullPageSections>
          <FullpageSection className={classes.Main}>
			<SocialIcons/>
			<Clouds />
			<Rainbow />
			<Banner />
			<Headline />
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'coral',
            padding: '1em',
          }}>2</FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'firebrick',
            padding: '1em',
          }}>3</FullpageSection>

        </FullPageSections>

      </Fullpage>);
	}
}

export default Portfolio;