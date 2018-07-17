import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Nav from './Nav'
import App from './App'
import Articles from './Article'
import Saved from './Saved'

const Home = (props) => (
<Router>
	<div>
		<Nav />
		<Route exact path="/" component={App} />
		<Route path="/articles" component={Articles} />
		<Route path="/saved" component={Saved} />
	</div>
</Router>
)

export default Home;