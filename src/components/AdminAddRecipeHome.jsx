import React, { Component } from 'react';

import { Container, Jumbotron } from 'react-bootstrap';
import './Home.css';

import AdminAddRecipe from './AdminAddRecipe';

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
  
class AdminAddRecipeHome extends Component {
    constructor(props){
        super(props)
        console.log('emailId => ' + localStorage.getItem('emailId'));
        console.log('id => ' + localStorage.getItem('id'));
    }
    render() {
        
            //const [singleSelections, setSingleSelections] = useState([]);
            //const [multiSelections, setMultiSelections] = useState([]);
        return (
        <>
            <Container>
                <br></br>
                <Jumbotron style={styles.ingredientImage}>
                    <h3>Add Recipe Details</h3>
                    
                    <AdminAddRecipe {...this.props}/>
                    
                </Jumbotron>

                
            </Container>
            <br />
            </>
        );
    }
}

export default AdminAddRecipeHome;