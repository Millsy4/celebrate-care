import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Event from "./pages/Event";
import Dashboard from "./pages/Dashboard";
import Calendar from './pages/Calendar';
import CodeModal from "./components/CodeModal";
import SimpleContainer from "./components/SimpleContainer";
import SignUpStepper from "./components/SignUpStepper";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <EventCard name={"TEST NAME"} bio={"TEST BIO"}/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Login} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/calendar" component={Calendar} />
      <Footer />
    </Router>
  )
};
