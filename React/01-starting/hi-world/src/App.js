import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Example1 from './hooks/example1';
import Example2 from './hooks/example2';
import MyComponentWithContext from './hooks/example3';
import Example4 from './hooks/example4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Below is the greeting done with classes */}
        {/* our component Greeting.jsx */}
        {/* <Greeting name="Martin"></Greeting> */}

        {/* Below is the greeting done with function */}
        {/* <GreetingF name="Martin"></GreetingF> */}

        {/* Below is the component that has all the tasks lists.*/}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* Below is the examples of hook uses  */}
        {/* <Example1></Example1> */}
        {/* <Example2></Example2> */}

        {/* <MyComponentWithContext></MyComponentWithContext> */}

        {/* everything inside here(example4) its treated as prop.children */}
        {/* <Example4 name="Juan">
          <h3>
            prop.children Content
          </h3>
        </Example4> */}


        {/* <GreetingStyled name="Juan"></GreetingStyled> */}


        {/* Events */}
        <Father></Father>

      {/* </header> */}
    </div>
  );
}

export default App;
