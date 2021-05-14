import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import IngredientService from '../services/IngredientService';
import { Container, Jumbotron} from 'react-bootstrap';

class AdminAddIngredient extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            nameError: null,
            message: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange = (event) => {
        
        const params = {
            name : event.target.value
        }
        IngredientService.findIngredientByName(params).then(res => {
            if(res.data === true){
                this.setState({
                    nameError : "Ingredient already exist"
                })
            }
            else{
                this.setState({
                    nameError : null,
                    name : event.target.value
                })
            }
        })
    }
    submitEvent = (e) => {
        //console.log("submit event : image name : ",this.state.image.name);
        e.preventDefault();
        
        IngredientService.addIngredient(this.state).then(res => {
            console.log('response => ' + JSON.stringify(res));
            this.setState({
                message : <p style={{color:'green'}}>Ingredient Added successfully!</p>
            })
        })
        .catch(error => {
            this.setState({
                message : <p style={{color:'red'}}>There is some error!</p>
            })
        });
    }
    render() {
        return (
            <Container>
                <br></br>
                <Jumbotron>
                    <h3>Add Ingredient</h3>
                    <br />
                <Form>
                <Form.Group>
                        <Form.Label>Ingredient Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleNameChange} style={{width:"50%"}}></Form.Control>
                        {this.state.nameError ? <p style={{fontSize:'0.7rem', left:'40px', color:'red'}}>{this.state.nameError}</p> : null}
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={this.submitEvent} style={{ backgroungColor: '#343a40 !important' }}>
                        Submit
                    </Button>
                    <br /><br />
                    <p >{this.state.message}</p>
                </Form>
            </Jumbotron>
            </Container>
        );
    }
}

export default AdminAddIngredient;