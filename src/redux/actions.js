export const addTask = (taskName) => ({
  type: 'ADD_TASK',
  payload: {
    id: new Date().getTime(),
    name: taskName,
  },
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId,
});

export const editTask = (taskId, newName) => ({
  type: 'EDIT_TASK',
  payload: {
    id: taskId,
    newName: newName,
  },
});

export const initTasks = (tasks) => ({
  type: 'INIT_TASKS',
  payload: tasks,
});
