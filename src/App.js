import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";



function App() {
  return (

<div className="App">
  <header className="App-header">
    <h1> Weather App Week 5 Homework </h1>
        
    <Weather defaultCity="Seattle" />
    
</header>

<body className="App-body">
  <h2>Forecast</h2>



</body>
      <Footer />
    </div>
  );
}

export default App;