import "./App.css";
import Card from "./components/Card";
import formatToString from "./utils/formatToString";

function App() {
  formatToString(123);
  return (
    <div className="App">
      <Card title="Some card" description="Some description" />
    </div>
  );
}

export default App;
