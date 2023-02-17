// the high level idea is to use a hashset to store
// all visited points, and once visiting the visited point then it means 
// there's a hard stop(forming a circle)


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          test
        </a>
      </header>
    </div>
  );
}

export default App;
