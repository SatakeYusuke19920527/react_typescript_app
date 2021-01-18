import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PageA from './components/PageA';
import PageB from './components/PageB';
import Header from './components/Header';

const App: React.FC<{}> = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pagea" component={PageA} />
          <Route exact path="/pageb" component={PageB} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
