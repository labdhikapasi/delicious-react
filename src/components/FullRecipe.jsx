import React, { Component } from 'react';
import Media from 'react-bootstrap/Media'
import { Container, Row, Col, Image, Button, Jumbotron, Card, CardColumns, CardDeck } from 'react-bootstrap';

class FullRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: {}
        }
    }
    componentDidMount() {
        console.log(this.props.location.state.recipe);
        this.setState({
            recipe: this.props.location.state.recipe
        })
    }
    render() {
        const recipe = this.props.location.state.recipe
        return (
            
            <Container>
                    <br />
                    <div class="row bg-faded">
                    
                        <div class="col-10 mx-auto text-center" style={{width:'700'}}>
                        <div class="recipeDirections"><h2 style={{textAlign:'center', height:'30px'}}>{recipe.name}</h2></div><br />
                            <img src={recipe.imageUrl} width='600' height='450' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius:'10px'}} />
                            
                            {/* <Jumbotron>
                                hiiii
                            </Jumbotron> */}
                            <br /><br />
                            
                            <div class="recipeDirections">
                                <div className="recipeDirectionsHeadingsLeft">
                                    <h4>Cooking Time : {recipe.cookingTime} minutes</h4>
                                </div>
                                <div className="recipeDirectionsHeadingsRight">
                                        <h4>Serves : {recipe.serves}</h4>
                                </div>
                                <br /><br />
                                <h4>Ingredients : </h4>
                                {
                                    recipe.ingredientList.map((ingredient, index) => 
                                        <div>{index+1}&nbsp;&nbsp;&nbsp;{ingredient}</div>)
                                }
                                
                                <br />
                                <h4>Directions : </h4>
                                {
                                    recipe.directions.map((direction, index) => 
                                        <div>{index+1}&nbsp;&nbsp;&nbsp;{direction}</div>)
                                }
                            </div>

                        </div>
                    </div>
                </Container>
                
            

        );
    }

}

export default FullRecipe;