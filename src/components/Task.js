import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({id,title,isComplete,updateComplete}) => {
  // const [complete, setComplete] = useState(isComplete);
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  
  // }
  // function Task(props) {
    // const deletetask = props.deletetask;
  
    // function changetaskComplete(arg) {
    //   //arg is a boolean flag representing if we complete it or not
    //   if (arg) {
    //     updateComplete(taskId, taskisComplete='True');
    //   } else {
    //     updateComplete(taskId, taskisComplete='False');
    //   }
    // }

  return (
    <li className="tasks__item">
      <button
        // className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => updateComplete(id, !isComplete)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
};

export default Task;
