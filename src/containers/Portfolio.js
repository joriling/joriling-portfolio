import React, { Component } from 'react';
import { Section, SectionsSpy } from "react-smart-sections";
import ScrollAnimation from 'react-animate-on-scroll';

import Rainbow from '../components/Rainbow';
import Clouds from '../components/Clouds';
import Bubbles from '../components/Bubbles';
import Headline from '../components/Header/Headline';
import Nav from '../components/Header/Nav';
import SocialIcons from '../components/SocialIcons/';
import Image from '../assets/images/pizza.jpg'
import classes from './Portfolio.css';
class Portfolio extends Component {
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
            </Section>
            <Section className={classes.Section} style={{backgroundColor: '#fff', zIndex: '2000'}}name="about">
              <ScrollAnimation animateIn="fadeIn">
                 <h2>Second section</h2>
              </ScrollAnimation>
            </Section>
            <Section className={classes.Section} name="works">
               <ScrollAnimation animateIn="fadeIn">
                 <h2>Third section</h2>
               </ScrollAnimation>
            </Section>
            <Section className={classes.Section} name="contacts">
              <h2>Fourth section</h2>
               <ScrollAnimation animateIn="slideInLeft" delay="3">
                 <img src={Image} alt=""/>
               </ScrollAnimation>
            </Section>
            <SectionsSpy
              render={sections => (
                <ul  className={classes.navigation}>
                  {sections.map(section => (
                   <ScrollAnimation animateIn='slideInLeft'
                    delay="500"
                    initiallyVisible={true}
                    animateOnce={true}>
                      <li>
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
      </div>
    );
	}
}

export default Portfolio;