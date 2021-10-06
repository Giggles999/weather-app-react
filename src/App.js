import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Overview from "./Overview";

function App() {
  return (

<div className="App">
  <header className="App-header">
    <h1> Weather App Week 4 Homework </h1>
        <Search />

<div class="row mt-5" >
  <div class="col-md-6" >
    <h2>Seattle</h2>
    <p><ul>
      <li>Tuesday October 5, 2021 </li>
      <li>Description: Partly Cloudy </li>
      <li>Humidity: 60% </li>
      <li>Wind: 4 km/h </li>
    </ul></p>
</div>
     
<div class="col-md-6">
  <h2>Seattle</h2>
    <p><ul>
      <li><Overview temperature={5} />{" "} </li>
      <li>Description: Partly Cloudy</li>
      <li>Humidity: 60% </li>
      <li>Wind: 4 km/h</li>
    </ul> </p>
</div>
</div>
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