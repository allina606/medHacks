import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import Data from './pages/data.js';
import Algo from './pages/algoinfo.js';
import About from './pages/about.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="data" exact path="/data" component={Data} />
          <Route name="algo" exact path="/algoinfo" component={Algo} />
          <Route name="about" exact path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;