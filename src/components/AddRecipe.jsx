import React, { Component } from 'react';
import Data from './Data'
import { Form, NavItem, NavDropdown, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead';
import IngredientService from '../services/IngredientService.js'
import RecipeService from '../services/RecipeService';
import './Login.css'
import './AdminRecipe.css'

class AddRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [

            ],
            data: [],
            name: '',
            cookingTime: '',
            serves: '',
            mealType: '',
            dishType: '',
            directions: '',
            ingredientsList: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleOtherChanges = this.handleOtherChanges.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }
    submitEvent = (e) => {
        e.preventDefault();
        console.log('ingredients => ' + JSON.stringify(this.state.ingredients));

        RecipeService.getRecipes(this.state.ingredients).then(res => {
            console.log('recipes response => ' + JSON.stringify(res));

            localStorage.setItem('emailId', res.data.emailId);
            localStorage.setItem('id', res.data.id);
            this.props.history.push({
                pathname: "/recipes",
                state: res.data
            });
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
    handleOtherChanges = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }


    componentDidMount() {
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
                    Selected Values: {JSON.stringify(this.state)}
                    Meal Type: {JSON.stringify(this.state.mealType)}
                    Dish Type: {JSON.stringify(this.state.dishType)}
                    Directions: {JSON.stringify(this.state.directions)}
                    IngredientsList: {JSON.stringify(this.state.ingredientsList)}
                </div>

                <Form>
                    <Form.Group style={{ marginTop: '20px' }}>
                        <Form.Label>Ingredients To Find Recipes</Form.Label>
                        <Typeahead
                            id="basic-typeahead-multiple"
                            labelKey="name"
                            multiple
                            onChange={this.handleChange}
                            options={this.state.data}
                            placeholder="Choose ingredients ...."
                            selected={this.state.ingredients}
                            style={{ borderColor: 'black', width:'50%'}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleOtherChanges} style={{width:'70%'}}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{width:'50%', float:'left'}}>
                        <Form.Label>Cooking Time</Form.Label>
                        <Form.Control type="text" name="cookingTime" onChange={this.handleOtherChanges} style={{width:'70%'}}></Form.Control>
                        
                    </Form.Group>
                    <Form.Group style={{width:'50%', float:'left'}}>
                        <Form.Label>Serves</Form.Label>
                        <Form.Control type="text" name="serves" onChange={this.handleOtherChanges} style={{width:'70%'}}></Form.Control>
                    
                    </Form.Group>
                    <Form.Group style={{width:'50%', float:'left'}}>
                        <Form.Label>Meal Type</Form.Label>
                        
                        <Form.Control as="select" placeholder="Choose dish type ..." name="mealType" onChange={this.handleOtherChanges} style={{width:'70%'}}>
                            <option value="Snacks">Snacks</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option>


                        </Form.Control>
                    </Form.Group>
                    <Form.Group style={{width:'50%', float:'left'}}>
                    <Form.Label>Dish Type</Form.Label>
                        <Form.Control as="select" placeholder="Choose dish type ..." name="dishType" onChange={this.handleOtherChanges} style={{width:'70%'}}>
                            <option value="Salad">Salad</option>
                            <option value="Cake">Cake</option>
                            <option value="IceCream">IceCream</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cookies">Cookies</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Momos">Momos</option>
                            <option value="Burger">Burger</option>
                            <option value="Drink">Drink</option>
                            <option value="Soup">Soup</option>

                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Directions</Form.Label>
                        <Form.Control as="textarea" rows={3} name="directions" onChange={this.handleOtherChanges} style={{width:'80%'}}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                        <Form.Label>Ingredients With Quantity</Form.Label>
                        <Form.Control as="textarea" rows={3} name="ingredientsList" value={this.state.ingredientsList} onChange={this.handleOtherChanges} style={{width:'80%'}}/>
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={this.submitEvent} style={{ backgroungColor: '#343a40 !important' }}>
                        Submit
                    </Button>
                </Form>
            </div >
        );
    }
}

export default AddRecipe;