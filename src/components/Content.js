import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Content extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </Router>
    );
  }
}

export default Content;
