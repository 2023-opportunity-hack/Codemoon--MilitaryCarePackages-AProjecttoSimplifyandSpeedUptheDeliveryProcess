import { CustomerForm, CustomNavbar, Donations, InventoryView, LoginForm } from "./Components";
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
            <Route path="/inventoryView" element={ < InventoryView />} />
            <Route path='/login' element={ <LoginForm /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
