
import './form.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStar);



function form() {
  return (
    <div className="form">
      <header className="form-header">
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
        <label>
          Write  review: 
          <textarea id="comment" name = "comment" rows = {3} cols = {30}></textarea>
        </label>
        <input type= "submit" value= "submit"/>
      </header>
    </div>
  );
}

export default form;
