import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Event from "./pages/Event";
import Dashboard from "./pages/Dashboard";
import Calendar from './pages/Calendar';
import Footer from "./components/Footer";
import { UserProvider } from './services/userContext';


export default function App() {


  return (

    <Router>
      <UserProvider>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Login} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/calendar" component={Calendar} />
          <Footer />
        </Switch>
      </UserProvider>
    </Router>

  )
};
