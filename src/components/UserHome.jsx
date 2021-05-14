import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Jumbotron, Card, CardColumns, CardDeck } from 'react-bootstrap';
import './Home.css';
import CustomNavbar from './CustomNavbar';
import SearchDropdown from './SearchDropdown';
import SeachDropdown from './SearchDropdown';
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
  
class UserHome extends Component {
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
                    <IngredientsDropdown {...this.props}/>
                    <div style={{clear:'both'}}></div>
                </Jumbotron>

                <CardColumns>
                <Link to="/login">
                    <Card style={styles.card} >
                    
                        <Card.Img variant="top" src="assets/soup.jpg" style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title className="text-center" style={{color:'black'}}>Soup</Card.Title>
                            
                        </Card.Body>
                        
                    </Card>
                    </Link>
                    <Card style={styles.card}>
                        {
                            //<Card.Img variant="top" src="assets/salad.jpg" className="h-75 d-inline-block" style={styles.cardImage}/>
                        
                        }
                        <Card.Img variant="top" src="assets/salad.jpg" style={styles.cardImage}/>
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
                        <Card.Img variant="top" src="assets/juice.jpg" style={styles.cardImage} />
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
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            </>
        );
    }
}

export default UserHome;