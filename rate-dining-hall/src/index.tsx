import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './index.css';
import Form from './form';
import Roberts from './roberts';
import NavBar from './navbar';
import SearchBar from './searchbar';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar/>
    <Router>
      {/*Routes ensure that only one route gets loaded*/}
      <Routes>
        {/* "/" signfies start path when react first gets loaded*/}
        <Route path = "/" element = {<SearchBar />}/>
        /* <Route path = "/roberts" element = {<Roberts />}/>
        <Route path = "/form" element = {<Form />}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
