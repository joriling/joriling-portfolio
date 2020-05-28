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
		<div style={{position: 'fixed'}}>
			<Nav/>
			<SocialIcons/>
			<Clouds />
			<Rainbow />
			<Banner />
		</div>
        <FullPageSections>
          <FullpageSection className={classes.Main}>
			<h1>1</h1>
			<Headline />
          </FullpageSection>
          <FullpageSection style={{
          	// background: 'linear-gradient(to bottom left, #fff -1%, #fefefe 100%)',
            padding: '1em',
            height: '780px',
          }}>
          	<h1>2</h1>
          	<p>Hello</p>
          </FullpageSection>
          <FullpageSection style={{
            // background: 'linear-gradient(to bottom left, #c2e9fb -1%, #a1c4fd 100%)',
            padding: '1em',
          }}>
          	<h1>3</h1>
          	<p>hi</p>
          </FullpageSection>

        </FullPageSections>

      </Fullpage>);
	}
}

export default Portfolio;