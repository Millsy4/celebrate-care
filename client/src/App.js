import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SignUpPage from "./pages/Signup";
import LoginInPage from "./pages/Login";
import EventPage from "./pages/Event";
import DashboardPage from "./pages/Dashboard";
import CalendarPage from './pages/Calendar';

export default function App() {
  return (
    <Router>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/" component={LoginInPage} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/calendar" component={CalendarPage} />
    </Router>
  )
};
