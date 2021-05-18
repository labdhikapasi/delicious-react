import React, { useState, Fragment } from 'react';
import { Form,  Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import Data from './Data'

function SeachDropdown(){
    
   const initialState = {
    name: '',
    email: ''
  };
  const [singleSelections, setSingleSelections] = useState([]);
   const [multiSelections, setMultiSelections] = useState();

   const submitHandler = event => {
    event.preventDefault();
    console.log(multiSelections);
  };
  var ChangeEvent = (e) =>{
    setMultiSelections = (e.map(x => {return {name : x.name, email: x.email}}));
  }
  return (
    <Fragment>
      <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange=''
          options=''
          placeholder="Choose a state..."
          selected=''
        />
      </Form.Group>
      <Form.Group style={{ marginTop: '20px' }}>
        <Form.Label>Multiple Selections</Form.Label>
        <Typeahead
          id="basic-typeahead-multiple"
          labelKey="name"
          multiple
          onChange={ChangeEvent}
          options={Data}
          placeholder="Choose several states..."
          selected={multiSelections}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
    Submit
  </Button> {multiSelections}
      </Form>  
    </Fragment>
  );
}

export default SeachDropdown;