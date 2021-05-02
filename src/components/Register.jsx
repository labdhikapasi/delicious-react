import React, { Component } from 'react';
import RegisterService from '../services/RegisterService.js'
class Register extends Component {

    constructor(props){
        super(props)
         this.state = {
             firstName: '',
             lastName: '',
             emailId: '',
             mobileNumber: '',
             password: ''
         }
         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
         this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
         this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }
    register = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, mobileNumber: this.state.mobileNumber, password: this.state.password};
        console.log('user => '+JSON.stringify(user));

        RegisterService.createUser(user).then(res =>{
            console.log(JSON.stringify(res.data));
            this.props.history.push('/login'); 
        });
    }
    changeFirstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler = (event) =>{
        this.setState({emailId: event.target.value});
    }
    changeMobileNumberHandler = (event) =>{
        this.setState({mobileNumber: event.target.value});
    }
    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }
    render() {
        return (
        <>
            
              
              <div className="outer" style={{height: "700px"}}>
                    <div className="inner">
                        <form style={{height: "550px"}}>
                
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                </div>
                
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Enter mobile number" value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}/>
                </div>

                <div className="form-group">
                    <label>Email Id</label>
                    <input type="email" className="form-control" placeholder="Enter email id" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.changePasswordHandler}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.register}>Register</button>
                <p className="forgot-password text-right" style={{height: "10px"}}>
                    Already registered <a href="/login">log in?</a>
                </p>
                <div style={{height: "50px"}}></div>
            </form>
            </div>
            </div>
            </>
        );
    }
}

export default Register;