import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import StyleGuide from './pages/style-guide';
import Homepage from './pages/homepage';
import NotFoundPage from './pages/404';

class App extends Component {
  render() { 
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/style-guide" component={StyleGuide}></Route>
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
