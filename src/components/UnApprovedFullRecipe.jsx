import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import RecipeService from '../services/RecipeService.js'

class UnApprovedFullRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: {},
            error: null
        }
        this.approveEvent = this.approveEvent.bind(this);
        this.rejectEvent = this.rejectEvent.bind(this);
    }
    componentDidMount() {
        console.log(this.props.location.state.recipe.name);
        this.setState({
            recipe: this.props.location.state.recipe
        })
    }
    approveEvent() {

        const params = {
            id: this.props.location.state.recipe.id
        }
        RecipeService.approveRecipe(params).then(res => {
            if (res.data === true) {
                this.props.history.push("/unApprovedRecipes");
            }
            else {
                this.setState({
                    error: "There is some error"
                })
            }
        })
    }
    rejectEvent() {

        const params = {
            id: this.props.location.state.recipe.id
        }
        RecipeService.rejectRecipe(params).then(res => {
            if (res.data === true) {
                this.props.history.push("/unApprovedRecipes");
            }
            else {
                this.setState({
                    error: "There is some error"
                })
            }
        })
    }
    render() {
        console.log(JSON.stringify('recipeeeee : ',this.props.location.state.recipe))
        const recipe = this.props.location.state.recipe
        return (

            <Container>
                <br />
                <div class="row bg-faded">

                    <div class="col-10 mx-auto text-center" style={{ width: '700' }}>
                        <div class="recipeDirections"><h4 style={{ textAlign: 'center', height: '30px' }}>{this.state.recipe.name}</h4></div><br />
                        <img src={recipe.imageUrl} alt='Recipe' width='500' height='350' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }} />

                        {/* <Jumbotron>
                                hiiii
                            </Jumbotron> */}
                        <br /><br />

                        <div class="recipeDirections" style={{ width: '100%' }} >
                            <div>
                                <br />
                                <div className="recipeDirectionsHeadingsLeft">
                                    <h5>Cooking Time : {recipe.cookingTime} minutes</h5>
                                </div>
                                <div className="recipeDirectionsHeadingsRight">
                                    <h5>Serves : {recipe.serves}</h5>
                                </div>

                                <div style={{ width: '50%', float: 'left' }}>
                                    <br />
                                    <h5>Ingredients : </h5>
                                    {
                                        recipe.ingredientList.map((ingredient, index) =>
                                            <div><div style={{ width: '30px', float: 'left' }}>{index + 1}</div><div style={{ width: '402px', float: 'left' }}>{ingredient}</div></div>)
                                    }
                                </div>
                                {this.props.location.state.additional ?
                                    <div style={{ width: '50%', float: 'left' }}>
                                        <br />
                                        <h5>Additional Ingredients : </h5>
                                        {
                                            recipe.ingredientDtos.map((ingredient, index) =>
                                                <div>{index + 1}&nbsp;&nbsp;&nbsp;{ingredient.name}</div>)
                                        }
                                    </div>
                                    : null}
                                <br />
                                <div style={{ float: 'left', width: '100%' }}>
                                    <br />
                                    <h5>Directions : </h5>
                                    {
                                        recipe.directions.map((direction, index) =>
                                            <div><div style={{ width: '22px', float: 'left' }}>{index + 1}</div><div style={{ width: '665px' }}>{direction}</div></div>)
                                    }
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                            <br />
                            <div style={{width:'50%', float:'left'}}>
                                <Button variant="dark" type="submit" onClick={this.approveEvent} style={{ backgroundColor: '#994d00', float:'right', marginRight:'30px' }}>
                                    Approve
                            </Button>
                            </div>
                            <div style={{width:'50%', float:'left'}}>
                                <Button variant="dark" type="submit" onClick={this.rejectEvent} style={{ backgroundColor: '#994d00' }}>
                                    Reject
                            </Button>
                            </div>
                            <div style={{clear:'both'}}></div>
                            {this.state.error}
                        </div>
                    </div>
                </div>
                <br /><br />
            </Container>



        );
    }
}

export default UnApprovedFullRecipe;