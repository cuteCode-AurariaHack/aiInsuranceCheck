
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Interface from './Interface';
import './App.css'

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
