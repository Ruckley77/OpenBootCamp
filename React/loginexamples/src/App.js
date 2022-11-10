import logo from './logo.svg';
import './App.css';
import LoginuseState from './components/loginuseState';
import LoginuseReducer from './components/loginuseReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LoginuseState></LoginuseState> */}
        <LoginuseReducer></LoginuseReducer>
      </header>
    </div>
  );
}

export default App;
