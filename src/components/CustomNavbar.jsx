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
        if(localStorage.getItem('isLoggedIn')){
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
        
        let signinButton;
        if(localStorage.getItem('isLoggedIn')){
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        {this.state.signinButton}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    
}

export default CustomNavbar;