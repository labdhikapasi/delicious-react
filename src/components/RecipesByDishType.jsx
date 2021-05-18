import React, { Component } from 'react';
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeService from '../services/RecipeService';


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
class RecipesByDishType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            dishType:'',
            message: null
        }
    }
    componentDidMount() {
        this.setState({
            dishType: this.props.location.state.dishType,
            
        })
        const params = {
            dishType : this.props.location.state.dishType
        }
        RecipeService.getRecipesByDishType(params).then(res => {
            if(res.data.length === 0){
                this.setState({
                    message : "No Results Found"
                })
            }
            else{
                this.setState({
                    recipes : res.data
                })
            }
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
                    this.state.recipes.length === 0 ? <p style={{color:'wheat', fontSize:'25px', textAlign:'center'}}>{this.state.message}</p>: null
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

                
            </Container>
        );
    }
}

export default RecipesByDishType;