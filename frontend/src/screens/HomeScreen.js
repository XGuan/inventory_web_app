import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Storage from '../components/Storage'
import CreateStorageModal from '../components/CreateStorageModal'

const HomeScreen = () => {
  const [storageList, setStorageList] = useState(['Basement', 'Garderob'])
  const [modalShow, setModalShow] = useState(false)
  //   const [storageInfo, setStorageInfo] = useState({})

  const createStorage = (storage) => {
    setStorageList([...storageList, storage])
  }

  return (
    <>
      <Row>
        debugger
        {storageList.map((storageName) => (
          <Col className='m-3' key={storageName} sm={12} lg={4} xl={3}>
            <Storage storageName={storageName} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 9 }}>
          <Button
            variant='primary'
            className='btn btn-block'
            onClick={() => setModalShow(true)}
          >
            Create New Storage
          </Button>

          <CreateStorageModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onStorageInfo={createStorage}
          />
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
