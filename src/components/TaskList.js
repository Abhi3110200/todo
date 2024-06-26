import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      dispatch({ type: 'INIT_TASKS', payload: savedTasks });
    } else {
      localStorage.setItem('tasks', JSON.stringify([])); 
      dispatch({ type: 'INIT_TASKS', payload: [] }); 
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const openEditModal = (task) => {
    setEditMode(task.id);
    setEditedTaskName(task.name);
    setOpenModal(true);
  };

  const closeEditModal = () => {
    setEditMode(null);
    setEditedTaskName('');
    setOpenModal(false);
  };

  const handleSaveEdit = () => {
    if (editedTaskName.trim() === '') {
      alert('Please Enter the task')
      return;
    }
    dispatch(editTask(editMode, editedTaskName));
    closeEditModal();
  };

  const handleChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  return (
    <div>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <ListItemText primary={task.name} />
            <IconButton onClick={() => openEditModal(task)} aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(task.id)} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Dialog open={openModal} onClose={closeEditModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            type="text"
            fullWidth
            value={editedTaskName}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskList;
