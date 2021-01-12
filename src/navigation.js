import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import IntroPage from './pages/intro-page';

const Navigation = () => {

  return (
    <Switch>
      <Route path="/" exact component={IntroPage} />
    </Switch>
  );
};

export default Navigation