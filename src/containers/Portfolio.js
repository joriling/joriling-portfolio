import React, { Component } from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

import Banner from '../components/Banner';
import Rainbow from '../components/Rainbow';
import Clouds from '../components/Clouds';
import Headline from '../components/Header/Headline';
import Nav from '../components/Header/Nav';
import SocialIcons from '../components/SocialIcons/';

import './Portfolio.css';
class Portfolio extends Component {
	render() {

    return (
      <div>
        <Nav />
        <Headline />
        <Clouds />
        <Rainbow />
        <SocialIcons />
      </div>
    );
	}
}

export default Portfolio;