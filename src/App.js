// import logo from './logo.svg';
import React from "react";
import {Routes,Route} from "react-router-dom"
import Logn from "./comp/logn";
import Register from "./comp/register";
import DataRep from "./comp/dataRep";
import Pg from './comp/pagination'
// import PieChart from './comp/pieChart'

// import './App.css';

function App() {
  return (
    
     <Routes>
      <Route path='/' element={<Logn/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dataRep' element={<DataRep/>}/>
      <Route path='/heyy' element={<Pg/>}/>
    </Routes>

    
  );
}

export default App;
