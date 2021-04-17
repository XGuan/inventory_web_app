import React, { useState } from 'react'

const CartonBoxScreen = () => {
  const [cartonList, setCartonList] = useState(['Winter shoes', 'Coat'])
  return (
    <div>
      <Row>
        {cartonList.map((cartonName) => (
          <Col className='m-3' key={cartonName} sm={12} lg={4} xl={3}>
            <Storage storageName={cartonName} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CartonBoxScreen
