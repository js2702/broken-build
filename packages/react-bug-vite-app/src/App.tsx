import "./App.css";
import { SomeComponent, hello } from "react-lib-rollup";

function App() {
  hello();

  return (
    <div className="App">
      <SomeComponent />
    </div>
  );
}

export default App;
