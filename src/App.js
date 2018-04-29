import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCSbSljgV9nCUfR4v6kIfOYzy_IKOQRPcI',
      authDomain: 'manager-8e4ec.firebaseapp.com',
      databaseURL: 'https://manager-8e4ec.firebaseio.com',
      projectId: 'manager-8e4ec',
      storageBucket: 'manager-8e4ec.appspot.com',
      messagingSenderId: '563270030796'
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
