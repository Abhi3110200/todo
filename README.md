# ToDo App in React.js

This project is a simple task management application built using React.js, Redux for state management, and Material-UI for UI components. The application allows users to add, edit, and delete tasks, with tasks persisted using localStorage to ensure data persistence across page reloads.

# Features

Add new tasks with a text input field.
Edit existing tasks using a modal dialog.
Delete tasks from the list.
Tasks are stored locally using localStorage for persistence.

# Technologies Used

React.js
Redux
Material-UI

# Installation

npx create-react-app my-app

# Navigate into the project directory

cd my-app

# Install dependencies using npm

npm install

# Run the Application in server 

npm start

Open your browser and navigate to http://localhost:3000 to view the application.

# Components Details

# TaskInput Components

Provides an input field to add new tasks.
Uses Material-UI components for UI elements.

# TaskList Components

Displays a list of tasks fetched from Redux store.
Allows editing and deleting tasks.
Uses Material-UI components for UI elements.

# Handling State with Redux

Redux is used for managing application state.
Actions (addTask, deleteTask, editTask, initTask) are dispatched to modify tasks in Redux store.
State changes trigger re-rendering of components to reflect updates.
Store.js file is to handle the taskReducer when the task is been load in the tasklist.

# To Run Application in LocalStorage

Tasks are stored locally using localStorage.
Tasks are loaded from localStorage on application startup and saved whenever they change.