import React, { Component } from 'react';
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
    card: {
        borderWidth: '0px', 
        borderColor:'white', 
        borderRadius:'50px',
        width: '300px',
        height: '360px',
        backgroundColor:' #fff3e6'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius:'50px 50px 0 0',
      width: '300px',
      height: '300px'
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
                {
                    this.state.recipes.length === 0 ? <p style={{color:'wheat', fontSize:'25px', textAlign:'center'}}>No Results Found</p>: null
                }
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
                            <Card.Img variant="top" src={recipe.imageUrl} style={styles.cardImage} />
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
                    <p style={{color:'wheat', fontSize:'25px', textAlign:'center'}}>┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ Other Recipes ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈</p>
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
                            <Card.Img variant="top" src={recipe.imageUrl} style={styles.cardImage} />
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