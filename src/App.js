import logo from './logo.svg';
import { CustomerForm, CustomNavbar, Donations } from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNavbar />
        <Routes>
            <Route path='/' element={<CustomerForm />}/>
            <Route path='/donations' element={< Donations />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
