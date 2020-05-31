import React, { Component } from 'react';
import { Section, SectionsSpy } from "react-smart-sections";

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
      <div>
        <Nav />
        <Clouds />
        <Rainbow />
        <SocialIcons />
         <div>
            <Section className={classes.Section} name="main">
              <Headline />
            </Section>
            <Section className={classes.Section} name="about">
              <h2>Second section</h2>
            </Section>
            <Section className={classes.Section} name="works">
              <h2>Third section</h2>
            </Section>
            <Section className={classes.Section} name="contacts">
              <h2>Fourth section</h2>
            </Section>
            <SectionsSpy
              render={sections => (
                <ul  className={classes.navigation}>
                  {sections.map(section => (
                      <li>
                        <a href=""
                           onClick={section.scroll}
                           className={section.active ? classes.isActive : ""}
                           > 
                        </a>
                      </li>
                  ))}
                </ul>
              )}
            />
          </div>
      </div>
    );
	}
}

export default Portfolio;