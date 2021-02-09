import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import IntroPage from './pages/intro-page'
import AboutPage from './pages/about-page'
import ContactPage from './pages/contact-page'
import MyWorkPage from './pages/my-work-page'

const Navigation = () => {

  return (
    <Switch>
      <Route path="/" exact component={IntroPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/work" component={MyWorkPage} />
    </Switch>
  );
};

export default Navigation