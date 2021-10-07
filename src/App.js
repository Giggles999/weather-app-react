import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Overview from "./Overview";

function App() {
  return (

<div className="App">
  <header className="App-header">
    <h1> Weather App Week 5 Homework </h1>
        
    <Search />
    

     

</header>

<body className="App-body">
  <h2>Forecast</h2>

<div class="row mt-5">
  <div class="col-md-2">
    <p><ul>
      <li>Day 1</li>
      <li>Image</li>
      <li>Temp F|C</li>
    </ul></p>
  </div>

  <div class="col-md-2">
    <p><ul>
      <li>Day 2</li>
      <li>Image</li>
      <li>Temp F|C</li>
    </ul></p>
  </div>

  <div class="col-md-2">
    <p><ul>
      <li>Day 3</li>
      <li>Image</li>
      <li>Temp F|C</li>
    </ul></p>
  </div>

  <div class="col-md-2">
    <p><ul>
      <li>Day 4</li>
      <li>Image</li>
      <li>Temp F|C</li>
    </ul></p>
  </div>

  <div class="col-md-2">
    <p><ul>
      <li>Day 5</li>
      <li>Image</li>
      <li>Temp F|C</li>
    </ul></p>
  </div>

  <div class="col-md-2">
    <p><ul>
      <li>Day 6</li>
      <li>Image</li>
      <li>Temp F|C</li>
    </ul></p>
  </div>

</div>
</body>
      <Footer />
    </div>
  );
}

export default App;