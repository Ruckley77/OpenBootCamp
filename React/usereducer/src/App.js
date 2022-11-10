import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1> useReducer Examples </h1>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
