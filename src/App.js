import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import Registration from "./pages/Registration";
// import { useState, useEffect } from "react";


function App() {

//   const [data, setData]= useState('');

//   useEffect (()=>{
//   fetch('/api/registration')
//   .then(response => response.json())
//   .then(response => setData(response.message))
// },[]) 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </Router>

{/* <p>
  {!data ? "Loading..." : data}
</p> */}
        
    </div>
  );
}

export default App;

