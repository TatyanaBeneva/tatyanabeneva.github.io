import React from 'react';
import {
  Switch,
  Route
<<<<<<< Updated upstream
} from 'react-router-dom';
import IntroPage from './pages/intro-page';
=======
} from 'react-router-dom'
import IntroPage from './pages/intro-page'
import AboutPage from './pages/about-page'
import ContactPage from './pages/contact-page'
>>>>>>> Stashed changes

const Navigation = () => {

  return (
    <Switch>
      <Route path="/" exact component={IntroPage} />
<<<<<<< Updated upstream
=======
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
>>>>>>> Stashed changes
    </Switch>
  );
};

export default Navigation