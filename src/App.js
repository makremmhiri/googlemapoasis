import './App.css';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './component/Navbar';
import Gglmap from './component/googlemap';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Gglmap />
      </Router>
    </>
  );
}

export default App;
