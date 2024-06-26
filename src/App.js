import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>To-do App</h1>
      <TaskInput/>
      <TaskList/>
    </div>
  );
}

export default App;
