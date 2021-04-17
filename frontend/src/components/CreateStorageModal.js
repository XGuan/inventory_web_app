import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const CreateStorageModal = (props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const submitHandler = (e) => {
    // debugger
    // e.preventDefault()
    // debugger
    console.log('handler')
    console.log(name)
    console.log(description)
    console.log(props.onHide)
    props.onStorageInfo(name)
    // setModalShow(false)
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Create New Storage
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormContainer>
          <Form>
            <Form.Group controlId='name'>
              <Form.Label>Storage Name</Form.Label>
              <Form.Control
                type='storage name'
                placeholder='Enter Storage Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='description'
                placeholder='Enter Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </FormContainer>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide} variant='secondary'>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            submitHandler.call()
            props.onHide.call()
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateStorageModal
