import React, { Component } from 'react';
import { Section, SectionsSpy } from "react-smart-sections";
import ScrollAnimation from 'react-animate-on-scroll';

import Rainbow from '../components/Rainbow';
import Clouds from '../components/Clouds';
import Bubbles from '../components/Bubbles';
import Headline from '../components/Header/Headline';
import Nav from '../components/Header/Nav';
import AsideScrollDown from '../components/Header/Nav/AsideScrollDown';
import SocialIcons from '../components/SocialIcons/';
import AboutMe from '../components/AboutMe';
import Works from '../components/Works';
import classes from './Portfolio.css';

class Portfolio extends Component {
  constuctor(props) {
    state = {
      activeSection: '',
    }
  }
	render() {

    return (
      <div>
        <Nav />
        <Clouds />
        <Bubbles />
        <Rainbow />
        <SocialIcons />
         <div>
            <Section className={classes.Section} name="main">
              <Headline />
              <AsideScrollDown />
            </Section>
            <Section className={classes.Section} name="about">
              <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut">
                <AboutMe/>
              </ScrollAnimation>
            </Section>
            {/* <Section className={classes.Section} name="works">
               <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                  <Works/>
               </ScrollAnimation>
            </Section> */}
            {/* <Section className={classes.Section} name="contacts">
              <h2>Fourth section</h2>
               <ScrollAnimation animateIn="slideInLeft" delay="3">
               
               </ScrollAnimation>
            </Section> */}
            <SectionsSpy
              render={sections => (
                <ul  className={classes.navigation}>
                  {sections.map(section => (
                   <ScrollAnimation animateIn='slideInLeft'
                    initiallyVisible={true}
                    animateOnce={true}>
                      <li key={section.name}>
                        <a href=""
                           onClick={section.scroll}
                           className={section.active ? classes.isActive : ""}
                           > 
                        </a>
                      </li>
                  </ScrollAnimation>     
                  ))}
                </ul>
              )}
            />
          </div>
      </div>    );
	}
}

export default Portfolio;