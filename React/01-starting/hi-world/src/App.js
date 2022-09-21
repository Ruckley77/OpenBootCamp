import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Below is the greeting done with classes */}
        {/* our component Greeting.jsx */}
        {/* <Greeting name="Martin"></Greeting> */}

        {/* Below is the greeting done with function */}
        {/* <GreetingF name="Martin"></GreetingF> */}

        {/* Below is the component that has all the tasks lists.*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
