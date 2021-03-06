import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
const TriSection = () => {
  return (
    <div id='about' className='tri-section m-0 text-center'>
      <Container>
        <Row>
          <Col md='4' className='p-4'>
            <div className='my-1 p-0'>
              <i className='fas fa-heartbeat tri-icons mb-4'></i>
              <h4 className='mb-4'>Healthy Products</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                voluptatem quo inventore commodi harum!
              </p>
            </div>
          </Col>
          <Col md='4' className='p-4'>
            <div className='my-1 p-0'>
              <i className='fas fa-user-md tri-icons mb-4'></i>
              <h4 className='mb-4'>Proven and Tested</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                voluptatem quo inventore commodi harum!
              </p>
            </div>
          </Col>
          <Col md='4' className='p-4'>
            <div className='my-1 p-0'>
              <i className='fas fa-syringe tri-icons mb-4'></i>
              <h4 className='mb-4'>Cures Illness</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                voluptatem quo inventore commodi harum!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TriSection
