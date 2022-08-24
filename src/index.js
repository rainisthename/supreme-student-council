import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Transparency from '../src/components/Routes/Transparency'
import Virtual from '../src/components/Routes/VirtualTour'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/transparency' element={<Transparency />} />
    <Route path='/virtual' element={<Virtual />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
