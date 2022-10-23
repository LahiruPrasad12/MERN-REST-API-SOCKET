import Navbar from './components/Navbar';
import RegisterSup from './components/RegisterSup';
import ViewSup from './components/ViewSup';
import AddStockO from './components/AddStockO';
import ViewStockO from './components/ViewStockO';
import UpdateSup from'./components/UpdateSup';
import UpdateStockO from'./components/UpdateStockO';
import Dashboard from './components/Dashboard';
import '../src/Css/formStyles.css';
import'../src/Css/dashboard.css'


import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
   <Router>
    <div> {/* className='App'> */}

      <Navbar/>
      <Routes>
      <Route path="/" element={<ViewSup/>}/>
      <Route path="/add" element={<RegisterSup/>}/>
      <Route path="/addOrder" element={<AddStockO/>}/>
      <Route path="/viewOrder" element={<ViewStockO/>}/>
      <Route path="/updateSup/:id" element={<UpdateSup/>}/>
      <Route path="/updateStock/:id" element={<UpdateStockO/>}/>
      <Route path="/home" element={<Dashboard/>}/>
    
      </Routes>
    </div>


   </Router>
 
  

  



  

  
      
  


      
   
  
  );
}

export default App;
