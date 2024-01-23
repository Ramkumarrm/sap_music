// src/App.js
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { Card } from '@mui/material';
import Baritem from './Components/Baritem';
import SongPage from './SongPage'; 
import ASlider from './Components/ASlider';

import './Components/Baritem';
import { Album } from '@material-ui/icons';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/song/:title" element={<SongPage/>} />
      {/*<Route path="/" element={<Home/>} />*/}
        {/* Other routes for different pages */}
      </Routes>
    </Router>
  );
};

export default App;
