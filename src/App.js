
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarcomp from './components/Navbarcomp'
import { Routes, Route, } from "react-router-dom";
import Alldata from './components/Alldata';
import Home from './components/Home';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Createaccount from './components/Createaccount';
import { BrowserRouter } from 'react-router-dom';






function App() {
  return (

    <BrowserRouter>
    <div className="App">
      
    <Navbarcomp/>


    </div>

    <Routes>
    <Route path="/" element={<Home />} exact />
      <Route path="/Alldata/" element={<Alldata />} />
      <Route path="/Deposit/" element={<Deposit />} />
      <Route path="/Withdraw/" element={<Withdraw />} />
      <Route path="/Createaccount/" element={<Createaccount />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
