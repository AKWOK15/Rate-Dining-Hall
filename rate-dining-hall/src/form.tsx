import './form.css';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import FormSubmission from './formsubmission';
import {Link} from 'react-router-dom';
function Form() {
  //Rating is current state, setrating allows us to update current state (rating)
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  //Used to handle changes in text boxes for form
  //Controlled components
  //title and review in UseState relate to name attribute in input and textarea names
  const [formData, setFormData] = useState({ title: "", review: "" });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    //use spread operator because want to create a copy not update original value
    //need prevFormData to determine if form data needs to be updated
    //compares prevFormData to name:value using boolean 
    //spread operator ensures that the whole state object is maintained, for example, the other names and values remain a part of the state object
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  //Will take in data from form and add it to webpage
  const [data, setData] = useState<string[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //Use brackets here to signfy adding 1 to array
    setData((prevData) => [...prevData, `star: ${rating}`, formData.title, formData.review]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Link to="/roberts">Back to Roberts</Link>
      </div>
      <div className="star-rating">
        {/*Spread operator, needed because we want actual elements (undefined) in each index, just having array(5) creates an array of length 5 but does not have any actual items*/}
        {[...Array(5)].map((star, index) => {
          {/*Creates array of five buttons*/ }
          index += 1
          {/*index +=1*/ }
          return (
            //each button is mapped to a star 
            <button
              type="button"
              //gives unique identifier to each button
              key={index}
              //goes through each button to see if it should be on or off, if rating is >= index, then it should be on 
              className={(rating || hover) >= index ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          );
        })}
      </div>
      {/*htmlFor links to id in input so when you click on title, it takes user to textbox*/}
      <label htmlFor="title">
        Title:
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label htmlFor="review">
        Write a review:
        <textarea id="review" name="review" rows={3} cols={30} value={formData.review} onChange={handleChange}></textarea>
      </label>
      <input type="submit">
      </input>
      <div>
        {/* <FormSubmission/> */}
        {/* {data} */}
        {/* {data.length} */}
        {[...Array(data.length)].map((child, index) => {
          return (<FormSubmission contents = {data[index]} key={index} />);
        })}
      </div>
    </form>
  );
}

export default Form;
  