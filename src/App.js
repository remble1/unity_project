// A express server, which will handle api request coming in and respond back with a json object, it will use body parser as well as corse
import React, { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'

function App() {
    return(
        <div className="App">
            <div>
            <Navbar/>
            </div>
            <Home />
        </div>
    );
}

export default App 