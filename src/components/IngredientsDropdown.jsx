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
            ingredientDtos: null,
            dishType: '',
            mealType: '',
            data: [],
            cookingTime: null,
            name: '',
            checked: false,
            checkedCookingTime: false,
            checkedDishType: false,
            checkedMealType: false,
            checkedIngredients: true,
            checkedName: false
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleOtherChanges = this.handleOtherChanges.bind(this);
        this.handleCookingTimeChanges = this.handleCookingTimeChanges.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }
    submitEvent = (e) => {
        e.preventDefault();
        console.log('ingredients => ' + JSON.stringify(this.state.ingredientDtos));

        RecipeService.getRecipes(this.state).then(res => {
            console.log('recipes response => ' + JSON.stringify(res));

            //localStorage.setItem('emailId', res.data.emailId);
            //localStorage.setItem('id', res.data.id);
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
            ingredientDtos: selectedOptions
        });
    }
    handleOtherChanges = (event) => {
        //console.log("submit event : image name : ",this.state.image.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleCookingTimeChanges = (event) => {
        const re = /^[0-9\b]+$/;
        //console.log("submit event : image name : ",this.state.image.name);
        if(re.test(event.target.value)){
            this.setState({
                [event.target.name]: event.target.value
            });
        }
        
    }
    handleChecked = (event) => {
        this.setState({
            [event.target.name] : event.target.checked
        })
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
                {
                JSON.stringify(this.state)
                }

                <Form>
                    <Form.Group controlId="formBasicCheckbox" style={{float:'left', width:'15%'}}>
                        <Form.Check type="checkbox" label="Ingredients" name="checkedIngredients" onChange={this.handleChecked} checked={this.state.checkedIngredients}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" style={{float:'left', width:'15%'}}>
                        <Form.Check type="checkbox" label="Meal Type" name="checkedMealType" onChange={this.handleChecked}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" style={{float:'left', width:'15%'}}>
                        <Form.Check type="checkbox" label="Dish Type" name="checkedDishType" onChange={this.handleChecked}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" style={{float:'left', width:'15%'}}>
                        <Form.Check type="checkbox" label="Cooking Time" name="checkedCookingTime" onChange={this.handleChecked}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" style={{float:'left', width:'40%'}}>
                        <Form.Check type="checkbox" label="Name" name="checkedName" onChange={this.handleChecked}/>
                    </Form.Group>
                    {
                        this.state.checkedIngredients ?
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
                            style={{ borderColor: 'black' }}
                        />
                        </Form.Group>
                        : null
                    }
                    {
                        this.state.checkedMealType ?
                        <Form.Group style={{ width: '20%', float: 'left' }}>
                        <Form.Label>Meal Type</Form.Label>

                        <Form.Control as="select" placeholder="Choose dish type ..." name="mealType" onChange={this.handleOtherChanges} style={{ width: '80%' }}>
                            <option value="">Choose ...</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option>


                        </Form.Control>
                        </Form.Group>
                        : null
                    }
                    {
                        this.state.checkedDishType ?
                        <Form.Group style={{ width: '20%', float: 'left' }}>
                        <Form.Label>Dish Type</Form.Label>
                        <Form.Control as="select" placeholder="Choose dish type ..." name="dishType" onChange={this.handleOtherChanges} style={{ width: '80%' }}>
                            <option value="">Choose ...</option>
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
                        : null
                    }
                    {
                        this.state.checkedCookingTime ?
                        <Form.Group style={{ width: '20%', float: 'left' }}>
                        <Form.Label>Cooking Time</Form.Label>
                        <Form.Control type="text" pattern="[0-9]*" name="cookingTime" onChange={this.handleCookingTimeChanges} style={{ width: '80%' }}></Form.Control>

                        </Form.Group>
                        : null
                    }
                    {
                        this.state.checkedName ?
                        <Form.Group style={{ width: '40%', float: 'left' }}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleOtherChanges} style={{ width: '40%' }} value={this.state.name}></Form.Control>

                        </Form.Group>
                        : null
                    }
                    
                    <Form.Group controlId="formBasicCheckbox" style={{ width: '100%', float: 'left' }}>
                        <Form.Check type="checkbox" label="Recipes with additional ingredients" name="checked" onChange={this.handleChecked}/>
                    </Form.Group>
                    <div style={{width:'100%', float:'left'}}>
                    <Button variant="dark" type="submit" onClick={this.submitEvent} style={{ backgroungColor: '#343a40 !important' }}>
                        Submit
                    </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default IngredientsDropdown;