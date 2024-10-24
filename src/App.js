// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavComp/Navbar';
import EventPage from './EventsComp/EventPage';
import Login from './RegLoginComp/login'; // Import Login component
import Register from './RegLoginComp/register'; // Import Register component
import News from './NewsComp/news';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/news" element={<News />} />
        <Route path="/coaches" element={<EventPage initialSection="coaches" />} /> {/* Route for Coaches */}
        {/* Add other routes like news, events, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
