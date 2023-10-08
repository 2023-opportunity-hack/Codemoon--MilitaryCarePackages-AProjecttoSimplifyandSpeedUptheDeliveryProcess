import { CustomerForm, CustomNavbar, Donations, InventoryView, LoginForm } from "./Components";
import MilitaryCarePackageRequests from './Components/MilitaryCarePackageRequests/MilitaryCarePackageRequests'
import Customs from './Components/Customs/Customs'
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
            <Route path="/military-care-package-requests" element={<MilitaryCarePackageRequests />} />
            <Route path="/customs" element={<Customs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
