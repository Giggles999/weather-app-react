import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";


function App() {
  return (

<div className="App">
  <header className="App-header">
    <h1> Weather App Week 5 Homework </h1>
        <p>React Weather Search Engine</p>
    <Weather defaultCity="Seattle" />
  </header>

      <Footer />
    </div>
  );
}

export default App;