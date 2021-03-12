import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
const SpecialOffer = () => {
  return (
    <div className='special-offer m-0'>
      <Container>
        <Row>
          <Col md='9' className='p-3'>
            <h3>New Product Special Offer</h3>
            <h2>For your convenience, you can book your appointment</h2>
          </Col>
          <Col md='3' className='d-flex align-items-center p-3'>
            <Button variant='info' size='lg'>
              Book an Appointment
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpecialOffer
