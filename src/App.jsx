import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Interface from './Interface';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interface" element={<Interface />} />
      </Routes>
    </Router>
  )
}

export default App
