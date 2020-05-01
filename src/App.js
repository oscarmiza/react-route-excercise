import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header'
import AllPost from './components/allpost'
import SinglePost from './components/singlepost'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={AllPost}/>
      <Route exact path='/singlePost'  component={SinglePost}/>
    </Router>
  );
}

export default App;
