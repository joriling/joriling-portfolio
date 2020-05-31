import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import Favicon from './assets/images/favicon.svg';
import Portfolio from './containers/Portfolio';

class App extends Component {
	render () {
		return (
			<Portfolio />
		);
	}
}

export default App;