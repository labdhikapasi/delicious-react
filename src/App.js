
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import UserHome from './components/UserHome';
import CustomNavbar from './components/CustomNavbar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
      
       <CustomNavbar />
        <Route exact path="/" component={UserHome}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/user" component={UserHome}/> 

        
      </div>
    </Router>
  );
}

export default App;
