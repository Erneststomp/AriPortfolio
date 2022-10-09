import './App.css';
import NavBar from './Components/NabBar/NavBar';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>



      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;