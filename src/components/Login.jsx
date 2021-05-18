import React, { Component } from 'react';
import LoginService from '../services/LoginService.js'

import './Login.css'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailId: '',
            password: '',
            id: '',
            errorMessage: ''
        }
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.loginEvent = this.loginEvent.bind(this);
    }
    loginEvent = (e) => {
        e.preventDefault();
        let user = { emailId: this.state.emailId, password: this.state.password };
        console.log('user => ' + JSON.stringify(user));

        LoginService.loginUser(user).then(res => {
            console.log('response => ' + JSON.stringify(res));
            if(res.data.emailId){
                if (res.data.emailId === 'admin') {
                    localStorage.setItem('emailId', 'admin');
                    localStorage.setItem('id', 1);
                    localStorage.setItem('userRole','ADMIN');
                    this.props.onHandleLoginChange(true,'ADMIN');
                    this.props.history.push('/user');
                    
                } else {
                    localStorage.setItem('emailId', res.data.emailId);
                    localStorage.setItem('id', res.data.id);
                    localStorage.setItem('userRole','USER');
                    this.props.onHandleLoginChange(true,'USER');
                    this.props.history.push('/user');
                    
    
                }
                //localStorage.setItem('isLoggedIn', true);
                
            }else{

            }
            
            this.setState({ errorMessage: 'Invalid EmailId or Password !' })

        })
            .catch(error => {
                
                console.error('There was an error!', error);
                this.setState({ errorMessage: 'Invalid EmailId or Password !' })
            });
    }
    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    render() {
        const { errorMessage } = this.state
        return (
            <>
            
                
                <div className="outer">
                    <div className="inner">
                        <form>

                            <h3>Log in</h3>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.changePasswordHandler} />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.loginEvent}>Sign in</button>
                            <div>
                                <div className="forgot-password text-left" style={{width:'15%', float: 'right', textAlign:'right'}}><a href="/register">Register</a></div>
                                
                                {
                                    //<div className="forgot-password text-right" style={{width:'150px', float: 'left', top : '10px'}}>
                                
                                    //Forgot <a href="#">password?</a></div>
                                
                                }
                                
                                
                                {errorMessage ? <p className="forgot-password text-left" style={{ color: 'red'}}>
                                    {errorMessage}
                                </p> : null}
                            </div>



                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;