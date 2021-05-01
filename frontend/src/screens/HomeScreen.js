import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Storage from '../components/Storage'
import CreateStorageModal from '../components/CreateStorageModal'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getAllStorage } from '../actions/storageActions'

const HomeScreen = () => {
  const [modalShow, setModalShow] = useState(false)

  const dispatch = useDispatch()

  const storageState = useSelector((state) => state.storageList)
  const { loading, error, storageList } = storageState

  // const createStorage = (storage) => {
  //   setStorageList([...allStorage, storage])
  // }

  useEffect(() => {
    dispatch(getAllStorage())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {storageList.map((storage) => (
            <Col className='m-3' key={storage._id} sm={12} lg={4} xl={3}>
              <Storage storageName={storage.name} />
            </Col>
          ))}
        </Row>
      )}

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
            // onStorageInfo={createStorage}
          />
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
