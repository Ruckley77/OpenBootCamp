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
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/asyncExample';
import ObservableExample from './components/pure/observableExample';
import FetchExample from './components/pure/fetchExample';
import AxiosExample from './components/pure/axiosExample';
import AxiosCRUDExample from './components/pure/axiosCRUDExample';

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

        {/* Below is the component that has all the tasks lists.
        FINAL PROJECT */}
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
        {/* <Father></Father> */}

      {/* </header> */}

      {/* Examples conditional rendering */}
        {/* <OptionalRender></OptionalRender> */}

      {/* Formik and Yup */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}

      {/* Async examples */}
        {/* <AsyncExample></AsyncExample> */}
        {/* <ObservableExample></ObservableExample> */}

      {/* Fetch Examples  */}
        {/* <FetchExample></FetchExample> */}

      {/* Axios Examples */}
        {/* <AxiosExample/> */}
        <AxiosCRUDExample/>
    </div>
  );
}

export default App;
