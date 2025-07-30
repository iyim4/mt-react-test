import logo from './logo.svg';
import './App.css';
import SampleData from './components/SampleData';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <SampleData />
      <h2>end test</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
