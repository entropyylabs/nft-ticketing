import React from "react";
import Category from "./CategoryButton";
import AddTicketsButton from "./AddTicketsButton";
import { Link } from "react-router-dom";

function CreateEvent() {
  return (
    <div className='create-holder'>
      <div className='create-event-box'>
        <label className='event-upload' htmlFor='event'>
          Upload <i class='fas fa-upload'></i>
        </label>
        <input type='file' className='custom-file-input' name='' id='event' />
        <input type='text' className='party-name' placeholder='Party name' />
        <div className='category-holder'>
          <Category name='Online' />
          <Category name='Party' />
          <Category name='Exhibition' />
        </div>
      </div>
      <Link to='/mint'>
        <AddTicketsButton />
      </Link>
    </div>
  );
}

export default CreateEvent;
