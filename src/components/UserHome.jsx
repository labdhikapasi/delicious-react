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
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55
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
                <Jumbotron>
                    <h2>Welcome to RecipeBook</h2>
                    <p>This is how to build a website with React, React-Router, React-bootstrap</p>
                    <IngredientsDropdown {...this.props}/>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>

                <CardColumns>
                    <Card>
                    
                        <Card.Img variant="top" src="assets/soup.jpg" className="h-75 d-inline-block" />
                        <Card.Body>
                            <Card.Title>Soup</Card.Title>
                            
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        
                        <Card.Img variant="top" src="assets/salad.jpg" className="h-75 d-inline-block"/>
                        <Card.Body>
                            <Card.Title>Salad</Card.Title>
                            
                        </Card.Body>
                        
                    </Card>
                    <Card>
                    
                        <Card.Img variant="top" src="assets/cake.jpg" />
                        <Card.Body>
                            <Card.Title>Cake</Card.Title>
                            
                        </Card.Body>
                       
                    </Card>
                    <br></br>
                    <Card>
                        <Card.Img variant="top" src="assets/chinese.jpg" />
                        <Card.Body>
                            <Card.Title>Chinese</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="assets/dosa.jpg" />
                        <Card.Body>
                            <Card.Title>Dosa</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="assets/icecream.jpg" />
                        <Card.Body>
                            <Card.Title>IceCream</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="assets/juice.jpg" />
                        <Card.Body>
                            <Card.Title>Juice</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="assets/pizza.jpg" />
                        <Card.Body>
                            <Card.Title>Pizza</Card.Title>
                            
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="assets/shakes.jpg" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
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