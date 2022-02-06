import React from "react";
import CreateEvent from "../Components/CreateEvent";

function Create() {
  return (
    <div className='page'>
      <div className='page-header'>
        <h1>Create</h1>
        <div className='stretcher'></div>
      </div>
      <CreateEvent />
    </div>
  );
}

export default Create;
