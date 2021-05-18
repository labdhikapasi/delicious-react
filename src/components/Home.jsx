import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Card, CardColumns } from 'react-bootstrap';
import './Home.css';

import IngredientsDropdown from './IngredientsDropdown';
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
    },
    ingredientImage: {
        backgroundColor:'url("../images/background_image.jpg")'
    }
    
  }
  
class Home extends Component {
    constructor(props){
        super(props)
        console.log('emailId => ' + localStorage.getItem('emailId'));
        console.log('id => ' + localStorage.getItem('id'));
    }
    render() {
        
            //const [singleSelections, setSingleSelections] = useState([]);
            //const [multiSelections, setMultiSelections] = useState([]);
        return (<>
        
            <Container>
                <br></br>
                {
                    console.log(JSON.stringify(localStorage.getItem('emailId')))
                }
                <Jumbotron style={styles.ingredientImage}>
                    <h2>Welcome to RecipeBook</h2>
                    <p style={{fontStyle: 'italic'}}>"A Recipe has no soul, you as the Cook must bring soul to the Recipe"</p>
                    < br/>
                    <IngredientsDropdown {...this.props}/>
                    <div style={{clear:'both'}}></div>
                </Jumbotron>

                <CardColumns>
                <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Soup"
                            }
                        }}>
                    <Card style={styles.card} >
                    
                        <Card.Img variant="top" src="assets/soup.jpg" style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Soup</Card.Title>
                            
                        </Card.Body>
                        
                    </Card>
                    </Link>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Salad"
                            }
                        }}>
                    <Card style={styles.card}>
                        {
                            //<Card.Img variant="top" src="assets/salad.jpg" className="h-75 d-inline-block" style={styles.cardImage}/>
                        
                        }
                        <Card.Img variant="top" src="assets/salad.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Salad</Card.Title>
                            
                        </Card.Body>
                        
                    </Card>
                    </Link>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Cake"
                            }
                        }}>
                    <Card style={styles.card}>
                    
                        <Card.Img variant="top" src="assets/cake.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Cake</Card.Title>
                            
                        </Card.Body>
                       
                    </Card>
                    </Link>
                    <br></br>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Chinese"
                            }
                        }}>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/chinese.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Chinese</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    </Link>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Dosa"
                            }
                        }}>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/dosa.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Dosa</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    </Link>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "IceCream"
                            }
                        }}>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/icecream.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>IceCream</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    </Link>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Juice"
                            }
                        }}>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/juice.jpg" style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Juice</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    </Link>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Pizza"
                            }
                        }}>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/pizza.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Pizza</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    </Link>
                    <Link to={{
                            pathname:'/recipesByDishType',
                            state: {
                                dishType: "Shake"
                            }
                        }}>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/shakes.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Shake</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    </Link>
                </CardColumns>
            </Container>
            </>
        );
    }
}

export default Home;