
import './App.css';




import Home from './Home'
import EmployeeFrom from './component/employee/EmployeeFrom';
import { BrowserRouter as Router,Routes
 ,
  Route
} from "react-router-dom";

function App() {

 
return (
  
  <Router>
  
    <Routes>
  
          <Route exact path="/" element={<Home/>}>
            
          </Route>
          <Route path="/EmployeeDetails" element={<EmployeeFrom/>}>
            
          </Route>
          
          </Routes>
    </Router>
)

  

  





}

export default App;
