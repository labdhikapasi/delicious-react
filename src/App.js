import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import UserHome from './components/UserHome';
import CustomNavbar from './components/CustomNavbar';
import Login from './components/Login';
import Register from './components/Register';
import Recipe from './components/Recipe';
import FullRecipe from './components/FullRecipe';


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
      <div>
      
        <CustomNavbar loginStatus={this.state.isLoggedIn} user={this.state.loginUser} onHandleLoginChange={this.handleLoginChange} />
        <Route exact path="/" component={UserHome}/>
        <Route  path="/login" render={(props) => <Login {...props} user={this.state.loginUser} loginStatus={this.isLoggedIn} onHandleLoginChange={this.handleLoginChange}/>}/>
        <Route  path="/register" component={Register}/>
        <Route  path="/user" component={UserHome}/> 
        <Route  path="/recipes" render={(props) => <Recipe {...props}/>}/>
        <Route  path="/recipe"  render={(props) => <FullRecipe {...props}/>}/>
        
      </div>
    </Router>
  );}
}

export default App;
