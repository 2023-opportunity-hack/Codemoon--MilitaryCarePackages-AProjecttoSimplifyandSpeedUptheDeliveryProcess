import { CustomerForm, CustomNavbar } from "./Components";
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <div className="app-container">
        <div className="ui-box">
          <CustomerForm />
      </div>
      </div>
      
    </div>
  );
}

export default App;
