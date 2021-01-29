import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import IntroPage from './pages/intro-page'
import AboutPage from './pages/about-page'

const Navigation = () => {

  return (
    <Switch>
      <Route path="/" exact component={IntroPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
};

export default Navigation