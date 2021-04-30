import React, { Component } from 'react';
import Data from './Data'
import { Form, NavItem, NavDropdown, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead';
import IngredientService from '../services/IngredientService.js'
import RecipeService from '../services/RecipeService';

class IngredientsDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients : [
                {
                    name : 'Milk'
                }
            ],
            data : []
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }
    submitEvent = (e) => {
        e.preventDefault();
        console.log('ingredients => ' + JSON.stringify(this.state.ingredients));

        RecipeService.getRecipes(this.state.ingredients).then(res => {
            console.log('recipes response => ' + JSON.stringify(res));
            
                localStorage.setItem('emailId', res.data.emailId);
                localStorage.setItem('id', res.data.id);
                this.props.history.push({pathname: "/recipe",
                state: res.data});
            })
            .catch(error => {
                
                console.error('There was an error!', error);
                //this.setState({ errorMessage: 'Invalid EmailId or Password !' })
            });
    }
    handleChange = (selectedOptions) => {
        this.setState({
            ingredients: selectedOptions
        });
    }
    componentDidMount(){
        IngredientService.getIngredients().then((res) => {
            this.setState({
                data: res.data
            });
            console.log(res);
            console.log(this.state.data);
        })
        .catch(error => {
                
            console.error('There was an error!', error);
            
        });
    }
    render() {
        return (
            <div>
                <div>
                    Selected Values: {JSON.stringify(this.state.ingredients)}
                </div>

                <Form>
                    <Form.Group style={{ marginTop: '20px' }}>
                        <Form.Label>Multiple Selections</Form.Label>
                        <Typeahead
                            id="basic-typeahead-multiple"
                            labelKey="name"
                            multiple
                            onChange={this.handleChange}
                            options={this.state.data}
                            placeholder="Choose several states..."
                            selected={this.state.ingredients}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.submitEvent} >
                        Submit
                    </Button> 
                </Form>
            </div>
        );
    }
}

export default IngredientsDropdown;