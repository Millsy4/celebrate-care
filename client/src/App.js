import React from 'react';
import './App.css';
import SignUpPage from "./pages/Signup";
import LoginInPage from "./pages/Login";
import EventPage from "./pages/Event";
import DashboardPage from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginInPage} />
      <Route exact path="/event" component={EventPage} />
    </Router>
  )
};
