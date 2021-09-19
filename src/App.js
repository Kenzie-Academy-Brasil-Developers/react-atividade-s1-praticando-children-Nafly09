import "./App.css";
import "./components/CenteredCard.css";

import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App-header">
      <div className="cardsContainer">
        <CenteredCard children={<h1>Children 1</h1>}></CenteredCard>
        <CenteredCard children={<h1>Children 2</h1>}></CenteredCard>
        <CenteredCard children={<h1>Children 3</h1>}></CenteredCard>
      </div>
    </div>
  );
}

export default App;
