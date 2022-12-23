import "./App.css";
import Counter from "./Counter";
import Example from "./Example";
import { UserProfile } from "./UserProfile";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter text="1st row" />
        <Example />
        <UserProfile />
      </header>
    </div>
  );
}

export default App;
