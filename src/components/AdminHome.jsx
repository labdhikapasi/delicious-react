import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Jumbotron, Card, CardColumns, CardDeck } from 'react-bootstrap';
import './Home.css';
import CustomNavbar from './CustomNavbar';
import SearchDropdown from './SearchDropdown';
import SeachDropdown from './SearchDropdown';
import IngredientsDropdown from './IngredientsDropdown';
import AddRecipe from './AddRecipe';
const styles = {
    card: {
        borderWidth: '0px', 
        borderColor:'white', 
        borderRadius:'50px'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius:'50px 50px 0 0'
    },
    ingredientImage: {
        backgroundColor:'url("../images/background_image.jpg")'
    }
    
  }
  
class AdminHome extends Component {
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
                <Jumbotron style={styles.ingredientImage}>
                    <h2>Welcome to RecipeBook</h2>
                    <p>This is how to build a website with React, React-Router, React-bootstrap</p>
                    <AddRecipe {...this.props}/>
                    
                </Jumbotron>

                <CardColumns>
                <Link to="/login">
                    <Card style={styles.card} >
                    
                        <Card.Img variant="top" src="assets/soup.jpg" className="h-75 d-inline-block" style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Soup</Card.Title>
                            
                        </Card.Body>
                        
                    </Card>
                    </Link>
                    <Card style={styles.card}>
                        
                        <Card.Img variant="top" src="assets/salad.jpg" className="h-75 d-inline-block" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Salad</Card.Title>
                            
                        </Card.Body>
                        
                    </Card>
                    <Card style={styles.card}>
                    
                        <Card.Img variant="top" src="assets/cake.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Cake</Card.Title>
                            
                        </Card.Body>
                       
                    </Card>
                    <br></br>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/chinese.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Chinese</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/dosa.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Dosa</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/icecream.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>IceCream</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/juice.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Juice</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/pizza.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Pizza</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src="assets/shakes.jpg" style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Shake</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            </>
        );
    }
}

export default AdminHome;