// App.js

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing.jsx';
// import Restourant from '../src/pages/Restourant';
// import RestaurantDetails from './pages/RestourentDetails';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import Waiters from './Waiters';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      {/* <Router>
      <Switch>
        <Route path="/" component={Restourant} />
        <Route path="/restaurantDetails/:id" component={RestaurantDetails} />
      </Switch>
    </Router>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/waiters" component={Waiters} />
      </Switch>
    </Router> */}
      <Footer />
    </div>
  );
}

export default App;
