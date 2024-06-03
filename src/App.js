import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{}}>
    <h1 style={{textAlign:"center"}}>TODO APP</h1>
    <TaskInput/>
    <TaskList/>
    </div>
  );
}

export default App;
