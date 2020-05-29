import React, {Component} from 'react';

import Dropdown from './Dropdown';
import classes from './Nav.css';

class Nav extends Component {
	state = {
			open: false
		}
	toggleDropdown () {
		this.setState({open: !this.state.open})
	}
	render() {

    return (
      <div className={classes.Nav}>
		<a href="">Joriling</a>
		<div className={classes.Menu}>
		    <input type="checkbox" id="checkbox" className={classes.Checkbox} onClick={this.toggleDropdown.bind(this)}/>
		    <label for="checkbox" className={classes.Label} ></label>
		</div>
		<Dropdown open={this.state.open} />
	</div>
    );
	}
}

export default Nav;
