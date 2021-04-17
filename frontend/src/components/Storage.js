import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Storage = ({ storageName }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded' style={{ width: '18rem' }}>
        <Card.Img variant='top' src='logo192.png' />
        <Card.Body>
          <Card.Title as='h3'>{storageName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go to {storageName}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Storage
