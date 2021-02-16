import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/analytics'
import firebaseConfig from './firebaseConfig.js'

firebase.initializeApp(firebaseConfig)

function logCurrentPage() {
    firebase.analytics().setCurrentScreen(window.location.pathname);
    firebase.analytics().logEvent('screen_view')
}
  
const AnalyticsComponent = () => {
    const history = useHistory();
    useEffect(() => {
    logCurrentPage(); // log the first page visit
    history.listen(() => {
        logCurrentPage();
    });
    }, [history]);
    return (<div></div>);
};

export default AnalyticsComponent