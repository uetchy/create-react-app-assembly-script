import React from "react";
import logo from "./logo.svg";
import API from "./as-api";
import "./App.css";

function useAsyncEffect(
  fn: () => Promise<void | (() => void)>,
  dependencies?: React.DependencyList
) {
  return React.useEffect(() => {
    const destructorPromise = fn();
    return () => {
      destructorPromise.then((destructor) => destructor && destructor());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  useAsyncEffect(async () => {
    const result = (await API).exports.add(100, 100);
    setValue(result);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{value}</p>
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
};

export default App;
