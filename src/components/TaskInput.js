import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTask } from '../redux/actions';
import {
    Button,
    TextField,
  } from '@material-ui/core';
const TaskInput = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(taskName.trim()==='') return;
        dispatch(addTask(taskName));
        setTaskName('');
    }

    const handleInputChange=(e)=>{
        setTaskName(e.target.value);
    }
  return (
    <div>    
    <TextField
        margin="normal"
        label="Enter Task"
        value={taskName}
        onChange={handleInputChange}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Task
      </Button>
    </div>

    
  )
}

export default TaskInput
