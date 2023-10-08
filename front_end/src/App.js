import { CustomerForm, CustomNavbar, Donations, InventoryView } from "./Components";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
