import React, { Component } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import RecipeService from '../services/RecipeService';
import { Link } from 'react-router-dom';


class ApproveRejectRecipesHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        RecipeService.findUnApprovedRecipes().then((res) => {
            this.setState({
                data: res.data
            });
            console.log(res);
            console.log(this.state.data);
        })
            .catch(error => {

                console.error('There was an error!', error);

            });
    }
    submitEvent = (e) => {
        //console.log("submit event : image name : ",this.state.image.name);
        e.preventDefault();

        console.log('recipe = ',JSON.stringify(e.currentTarget.value));
        this.props.history.push({
            pathname: '/unApprovedFullRecipe',
            state: {
            recipe: e.currentTarget.value.name
        }
        });


    }
    render() {
        return (
            <div class="outer">
                <div class="container" style={{ width: '50%', backgroundImage: 'none' }}>
                    {
                        this.state.data ? 
                        <p style={{color:'wheat', fontSize:'25px', textAlign:'center'}}>Recipes added by Users</p>
                        : <p style={{color:'wheat', fontSize:'25px', textAlign:'center'}}>Users haven't added any Recipe</p>
                    }
                
                    {this.state.data ?
                        <ListGroup variant="flush" >
                            {this.state.data.map(recipe =>
                                

                                    <ListGroup.Item style={{ color: 'black', float:'left', verticalAlign:'center'}}>{recipe.name} 
                                    <Link to={{
                                    pathname: '/unApprovedFullRecipe',
                                    state: {
                                        recipe: recipe
                                    }
                                    }}>
                                    <Button variant="dark" type="button" value={recipe} style={{float:'right' }} >View</Button></Link>
                                    </ListGroup.Item>

                            )}
                        </ListGroup>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default ApproveRejectRecipesHome;