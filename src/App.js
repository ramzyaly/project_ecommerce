import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './komponen/Header'
import Footer from './komponen/Footer'
import Home from './komponen/Home'
import Prod from './komponen/Prod'
import Proddetail from './komponen/Proddetail'


class App extends Component {
  render() {
    return (
			<React.Fragment>
		<Header/>
    <Route exact path="/Home" component={Home}/>
		<Route path="/Prod" component={Prod}/>
		<Route path="/Proddetail" component={Proddetail}/>
		<Footer/>
		</React.Fragment>
    )
  }
}

export default App;
