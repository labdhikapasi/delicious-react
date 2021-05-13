import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Jumbotron, Card, CardColumns, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
    card: {
        borderWidth: '0px', 
        borderColor:'white', 
        borderRadius:'50px'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius:'50px 50px 0 0'
    }
    
  }
class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            otherRecipes:null
        }
    }
    componentDidMount() {
        this.setState({
            recipes: this.props.location.state.recipeDtos,
            otherRecipes: this.props.location.state.otherRecipeDtos
        })
    }
    
    render() {
        
        return (

            <Container>
                {
                console.log(JSON.stringify(this.props.location.state))
                }
                <br /><br />
                <CardColumns>
                {
                    this.state.recipes.map(recipe => 
                        
                        <Link to={{
                            pathname:'/recipe',
                            state: {
                                recipe: recipe
                            }
                        }}>
                        <Card style={styles.card}>
                            <Card.Img variant="top" src={recipe.imageUrl} className="h-75 d-inline-block" style={styles.cardImage} />
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:'black'}}>{recipe.name}</Card.Title>
    
                            </Card.Body>
                        </Card>
                        </Link>
                    )
                }
                </CardColumns>

                <br /><br />
                
                {
                    this.state.otherRecipes != null ?
                    <>
                    <p>Other Recipes</p>
                    <CardColumns>
                {
                    this.state.otherRecipes.map(recipe => 
                        
                        <Link to={{
                            pathname:'/recipe',
                            state: {
                                recipe: recipe,
                                additional:true
                            }
                        }}>
                        <Card style={styles.card}>
                            <Card.Img variant="top" src={recipe.imageUrl} className="h-75 d-inline-block" style={styles.cardImage} />
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:'black'}}>{recipe.name}</Card.Title>
    
                            </Card.Body>
                        </Card>
                        </Link>
                    )
                }
                </CardColumns>
                </>
                     : null
                }

            </Container>
        );
    }
}

export default Recipe;