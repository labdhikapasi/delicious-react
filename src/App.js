import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './components/Home';
import AdminAddRecipeHome from './components/AdminAddRecipeHome';
import AdminAddIngredient from './components/AdminAddIngredient';
import CustomNavbar from './components/CustomNavbar';
import Login from './components/Login';
import Register from './components/Register';
import Recipe from './components/Recipe';
import FullRecipe from './components/FullRecipe';
import UnApprovedRecipesHome from './components/UnApprovedRecipesHome';
import UnApprovedFullRecipe from './components/UnApprovedFullRecipe';
import RecipesByDishType from './components/RecipesByDishType';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoggedIn : false,
        loginUser : 'USER'

    }
    this.handleLoginChange = this.handleLoginChange.bind(this);
    
}
handleLoginChange(loginStatus,user){
  this.setState({
    isLoggedIn : loginStatus,
    loginUser : user
  });
}
  render(){
  return (
    
    <Router> 
      
      
        <CustomNavbar loginStatus={this.state.isLoggedIn} user={this.state.loginUser} onHandleLoginChange={this.handleLoginChange} />
        <Route exact path="/" component={Home}/>
        <Route  path="/login" render={(props) => <Login {...props} user={this.state.loginUser} loginStatus={this.isLoggedIn} onHandleLoginChange={this.handleLoginChange}/>}/>
        <Route  path="/register" component={Register}/>
        <Route  path="/user" component={Home}/> 
        <Route  path="/adminAddRecipe" render={(props) => <AdminAddRecipeHome {...props}/>}/> 
        <Route  path="/adminAddIngredient" component={AdminAddIngredient}/> 
        <Route  path="/recipes" render={(props) => <Recipe {...props}/>}/>
        <Route  path="/recipe"  render={(props) => <FullRecipe {...props}/>}/>
        <Route  path="/unApprovedRecipes" render={(props) => <UnApprovedRecipesHome {...props}/>}/>
        <Route  path="/unApprovedFullRecipe" render={(props) => <UnApprovedFullRecipe {...props}/>}/>
        <Route  path="/recipesByDishType" render={(props) => <RecipesByDishType {...props}/>}/>
        
    </Router>
  );}
}

export default App;
