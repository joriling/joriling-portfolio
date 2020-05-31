import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';

import Portfolio from './containers/Portfolio';

class App extends Component {
	render () {
		return (
			<Portfolio />
		);
	}
}

export default App;