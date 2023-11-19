import React from 'react';
import logo from './logo.svg';
import './form.css';

function form() {
  return (
    <div className="form">
      <header className="form-header">
        <label>
          Write your review: 
          <textarea id="comment" name = "comment" rows = {3} cols = {30}></textarea>
        </label>
      </header>
    </div>
  );
}

export default form;
