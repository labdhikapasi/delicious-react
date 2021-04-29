import React, { Component } from 'react';
import Data from './Data'
import { Form, NavItem, NavDropdown, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

class IngredientsDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients : [
                { name : 'labdhi', email: 'labdhik2@gmail,com'},
                {name : 'harshil', email: 'harshil@gmail.com'}
            ]
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        ingredients: [

        ]
    }
    handleChange = (selectedOptions) => {
        this.setState({
            ingredients: selectedOptions
        });
    }

    render() {
        return (
            <div>
                <div>
                    Selected Values: {JSON.stringify(this.state.ingredients)}
                </div>

                <Form>
                    <Form.Group style={{ marginTop: '20px' }}>
                        <Form.Label>Multiple Selections</Form.Label>
                        <Typeahead
                            id="basic-typeahead-multiple"
                            labelKey="name"
                            multiple
                            onChange={this.handleChange}
                            options={Data}
                            placeholder="Choose several states..."
                            selected={this.state.ingredients}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button> 
                </Form>
            </div>
        );
    }
}

export default IngredientsDropdown;