import { useState } from 'react';
import './NewTaskForm.css';
import PropTypes  from 'prop-types';
import React from 'react';

const INITIAL_FORM_DATA = {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    };


const NewTaskFrom = (props)=>{
  const [formData, setFormData] = useState(INITIAL_FORM_DATA
    );
  const handleChange =(e) =>{
    console.log('handle change called');

    console.log(`Target name:${e.target.name} Target value : ${e.target.value}`);

    const newFormData ={
      ...formData,
      [e.target.name]: [e.target.value]
    };
    setFormData(newFormData);
  };
  const handleNewTaskSubmit = (e) =>{
    e.preventDefault();
    //formData contains the new Bike info that we want to create
    props.addTaskCallbackFunc(formData);
  };

  return (
    <form onSubmit = {handleNewTaskSubmit}>
      <label htmlFor='id'>ID</label>
      <input type='number' id ='id'name = 'id' value = {formData.id} onChange={handleChange}/>

      <label htmlFor='title'>Title</label>
      <input type='text' id ='title' name = 'title' value = {formData.title} onChange={handleChange}/>  
      
      <label htmlFor='isComplete'>IsComplete </label>
      <input type='text' id ='iscomplete' name = 'iscomplete' value = {formData.isComplete} onChange={handleChange}/>   
      
      <input type='submit' value='Add Task'/>
    </form>
);
};
  NewTaskFrom.propTypes = {addTaskCallbackFunc : PropTypes.func.isRequired};
export default NewTaskFrom;