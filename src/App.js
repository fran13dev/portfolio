import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home.js'
import { About } from './components/About.js'
import { Projects } from './components/Projects.js'
import './App.css'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
