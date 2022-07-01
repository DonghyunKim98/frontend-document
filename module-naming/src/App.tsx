import logo from "./logo.svg";
import "./App.css";
import { numberWithCommas } from "./utils";
import { MainScreen } from "./screen";

function App() {
  console.log(numberWithCommas(1000));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <MainScreen />
      </header>
    </div>
  );
}

export default App;
