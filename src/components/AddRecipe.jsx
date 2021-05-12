import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import { Typeahead } from 'react-bootstrap-typeahead';
import IngredientService from '../services/IngredientService.js'
import RecipeService from '../services/RecipeService';
import './Login.css';
import './AdminRecipe.css';
import { storage } from '../firebase';

class AddRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            ingredientDtos: [

            ],
            data: [],
            name: '',
            cookingTime: '',
            serves: '',
            mealType: '',
            dishType: '',
            directions: '',
            ingredientsList: '',
            imageUrl: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleOtherChanges = this.handleOtherChanges.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }
    submitEvent = (e) => {
        //console.log("submit event : image name : ",this.state.image.name);
        e.preventDefault();
        
        RecipeService.addRecipe(this.state).then(res => {
            console.log('response => ' + JSON.stringify(res));
            this.setState({
                message : "Recipe Added successfully!"
            })
        })
        .catch(error => {
            this.setState({
                message : "There is some error!"
            })
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
    handleImageChange = (event) => {
        this.setState({
            image: event.target.files[0]
        })
        const uploadTask = storage.ref(`images/${this.state.name}`).put(event.target.files[0]);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(this.state.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    this.setState({
                        imageUrl: url
                    })
                })
            }
        )
        //const image = event.target.files[0];
        //console.log("image name : ",image.name);
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
                {console.log(this.state.image)}
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
                            style={{ borderColor: 'black', width: '50%' }}
                        />
                    </Form.Group>
                    <Form.Group style={{ width: '50%', float: 'left' }}>
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleOtherChanges} style={{ width: '70%' }}></Form.Control>
                        
                    </Form.Group>
                    <Form.Group style={{width: '50%', float: 'left', height:'70px'}}>
                        <Form.File id="exampleFormControlFile1" label="Example file input" onChange={this.handleImageChange} />

                    </Form.Group>
                    <Form.Group style={{ width: '50%', float: 'left' }}>
                        <Form.Label>Cooking Time</Form.Label>
                        <Form.Control type="text" name="cookingTime" onChange={this.handleOtherChanges} style={{ width: '70%' }}></Form.Control>

                    </Form.Group>
                    <Form.Group style={{ width: '50%', float: 'left' }}>
                        <Form.Label>Serves</Form.Label>
                        <Form.Control type="text" name="serves" onChange={this.handleOtherChanges} style={{ width: '70%' }}></Form.Control>

                    </Form.Group>
                    <Form.Group style={{ width: '50%', float: 'left' }}>
                        <Form.Label>Meal Type</Form.Label>

                        <Form.Control as="select" placeholder="Choose dish type ..." name="mealType" onChange={this.handleOtherChanges} style={{ width: '70%' }}>
                            <option value="">Choose ...</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option>


                        </Form.Control>
                    </Form.Group>
                    <Form.Group style={{ width: '50%', float: 'left' }}>
                        <Form.Label>Dish Type</Form.Label>
                        <Form.Control as="select" placeholder="Choose dish type ..." name="dishType" onChange={this.handleOtherChanges} style={{ width: '70%' }}>
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
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Directions</Form.Label>
                        <Form.Control as="textarea" rows={3} name="directions" onChange={this.handleOtherChanges} style={{ width: '80%' }} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea2">
                        <Form.Label>Ingredients With Quantity</Form.Label>
                        <Form.Control as="textarea" rows={3} name="ingredientsList" value={this.state.ingredientsList} onChange={this.handleOtherChanges} style={{ width: '80%' }} />
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={this.submitEvent} style={{ backgroungColor: '#343a40 !important' }}>
                        Submit
                    </Button>
                    {this.state.message}
                </Form>
            </div >
        );
    }
}

export default AddRecipe;