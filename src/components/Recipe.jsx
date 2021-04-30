import React, { Component } from 'react';

class Recipe extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.props.location.state)}
                
            </div>
        );
    }
}

export default Recipe;