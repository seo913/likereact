import logo from './logo.svg';
import ClassComponents from './components/ClassComponents';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <ClassComponents/>
      <FunctionComponent/>
    </div>
  );
}

export default App;





{/* <div className="App">
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
    </div> */}