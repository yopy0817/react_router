import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';

const App = () => {
    return (
        <Router>
          <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/topics">topics</Link></li>
              </ul>
              <Route path="/" exact={true} component={Home}></Route>
              <Route path="/about" exact={true} component={About}></Route>
              <Route path="/topics" exact={true} component={Topics}></Route>
          </div>
        </Router>
    );
};


export default App;