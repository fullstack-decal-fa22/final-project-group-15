import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [events, setEvents] = useState([]);
  const makeEvent = (newEvent) => {
    setEvents([newEvent, ...events]);
  };
  const [expressCheck, setExpressCheck] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:9000/testAPI`)
      .then((res) => {
        setExpressCheck(res.data);
        console.log(res.data);
      })
      .catch(() => setExpressCheck("Currently down."));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Intro">
        <h1>CalTickets</h1>
        <button>Sign In</button>
        <div> 
          <p>Welcome to CalTickets</p>
          <p>A Student Ticket Reselling Platform for All Events at Cal</p>
        </div>
      </div>
      <div className="Events">
        <h1>Events</h1>
        <div className="eventList">
          <button className="eventObject" id="BigGame">Big Game</button>
          <button className="eventObject" id="Movement">[M]ovement</button>
          <button className="eventObject" id="YerinBaek">Yerin Baek</button>
        </div>
      </div>
      </header>

    </div>
  );
}

export default App;
