import React from "react";
import '../src/App.scss'
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
