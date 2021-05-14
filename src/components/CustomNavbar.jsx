import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class CustomNavbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            signinButton : <Nav.Link eventKey={2} href="/login">
            Sign In</Nav.Link>
        }
    }
    componentDidMount(){
        //if(localStorage.getItem('isLoggedIn')){
        if(this.props.loginStatus){
            console.log('logged in : '+localStorage.getItem('isLoggedIn'))
            this.setState({
                signinButton : <Nav.Link onClick={this.signOut}>
            Sign Out</Nav.Link>
            })
            
        }else{
            this.setState({
            signinButton : <Nav.Link eventKey={2} href="/login">
            Sign In</Nav.Link>
            })
        }
    }
    signOut = (e) => {
        //e.preventDefault();
        //localStorage.setItem('isLoggedIn',false);
        //const { history } = this.props;
        //history.push("/user")
        //this.props.history.push('/user')
        localStorage.clear();
        window.location.href = '/user';
    }
    render() {
        console.log('props loginStatus = '+this.props.loginStatus);
        console.log('props user = '+this.props.user);
        let signinButton;
        //if(localStorage.getItem('isLoggedIn')){
        //if(this.props.loginStatus){
        if(localStorage.getItem('id')){
            console.log('logged in : '+localStorage.getItem('isLoggedIn'))
            signinButton = <Nav.Link onClick={this.signOut}>
            Sign Out</Nav.Link>
        }else{
            signinButton = <Nav.Link eventKey={2} href="/login">
            Sign In</Nav.Link>
        }
        return (
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">RecipeBook</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {this.props.user === 'ADMIN' ? <Nav.Link href="/">Ingredients</Nav.Link> : <Nav.Link href="/">Home</Nav.Link>}
                    {this.props.user === 'ADMIN' ? <Nav.Link href="/">Recipes</Nav.Link> : null}
                        {
                            localStorage.getItem('id') ?
                            <NavDropdown title="Actions" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/adminAddRecipe">Add Recipe</NavDropdown.Item>
                            {localStorage.getItem('userRole') === 'ADMIN' ? <NavDropdown.Item href="/adminAddIngredient">Add Ingredient</NavDropdown.Item> : null}
                            {
                                //<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                //<NavDropdown.Divider />
                                //<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            }
                            
                        </NavDropdown>
                            : null
                        }
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        {signinButton}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
}

export default CustomNavbar;