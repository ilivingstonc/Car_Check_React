import React from 'react';
import { Modal, Form, Button, Label } from 'semantic-ui-react';

//edit
//creating edit form. passes up edit props with handlechange on submit.
//make, model, year
// -------removed image label and form.input between Model and Year to match model in CarContainer-----------------
const EditCarModal = (props) => {
    return (

        <Modal open={props.open}>
        <Modal.Content>
            <Form onSubmit={props.closeAndEdit}>
                <Label>
                    Make: 
                </Label>
                    <Form.Input type="text" name="make" value={props.carToEdit.make} onChange={props.handleEditChange} />
                <Label>
                    Model: 
                </Label>
                    <Form.Input type="text" name="model" value={props.carToEdit.model} onChange={props.handleEditChange} />
                <Label>
                    Year: 
                </Label>
                    <Form.Input type="text" name="year" value={props.carToEdit.year} onChange={props.handleEditChange} />
                <Modal.Actions>
                    <Button color="green" type="submit">Edit Car</Button>
                </Modal.Actions>
            </Form>
        </Modal.Content>
        </Modal>

    )
}



export default EditCarModal
