import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from '/workspace/Blog/app/src/pages/Home.js';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
