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
                    
                    <div class="row bg-faded">
                    
                        <div class="col-8 mx-auto text-center" style={{width:'700'}}>
                        <h1 class="text-center" >center</h1>
                            <img src={process.env.PUBLIC_URL + 'assets/recipeImages/' + recipe.imageUrl} width='730' height='550' />
                            
                            {/* <Jumbotron>
                                hiiii
                            </Jumbotron> */}
                            <br /><br />
                            <div className="recipeDirections">hellooo</div>
                        </div>
                    </div>
                </Container>
                
            

        );
    }

}

export default FullRecipe;