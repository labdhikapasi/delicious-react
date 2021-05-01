
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import UserHome from './components/UserHome';
import CustomNavbar from './components/CustomNavbar';
import Login from './components/Login';
import Recipe from './components/Recipe';
import FullRecipe from './components/FullRecipe';


function App() {
  return (
    <Router>
      <div>
      
       <CustomNavbar />
        <Route exact path="/" component={UserHome}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/user" component={UserHome}/> 
        <Route  path="/recipes" render={(props) => <Recipe {...props}/>}/>
        <Route  path="/recipe"  render={(props) => <FullRecipe {...props}/>}/>
        
      </div>
    </Router>
  );
}

export default App;
