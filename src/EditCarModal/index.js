import React from 'react';
import { Modal, Form, Button, Label } from 'semantic-ui-react';


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
                    Image: 
                </Label>
                    <Form.Input type="text" name="image" value={props.carToEdit.image} onChange={props.handleEditChange} />
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
