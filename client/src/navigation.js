import React, {Component} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import IntroPage from './pages/intro-page'
import AboutPage from './pages/about-page'
import ContactPage from './pages/contact-page'
import MyWorkPage from './pages/my-work-page'

class Navigation extends Component {

  state = {
    data: ''
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/work" component={MyWorkPage} />
        <p>{this.state.data}</p>
      </Switch>
    );
  }
};

export default Navigation