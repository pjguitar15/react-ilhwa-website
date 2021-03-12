import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Benefits = () => {
  return (
    <div className='benefits m-0'>
      <Container>
        <Row>
          <Col md='6' className='p-4'>
            <h4>
              <span style={{ color: '#0f6b9e' }}>Benefits </span>of
            </h4>
            <h2>Registered Massage Therapy</h2>
            <p className='my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              repellat officia aliquam. Ducimus harum, iure at quas voluptatibus
              similique ipsa sed quos unde? Illo fugiat ullam molestiae cumque
              error tempore.
            </p>
            <ul>
              <li className='my-2'>Reducing or eliminating pain</li>
              <li className='my-2'>Improving joint mobility</li>
              <li className='my-2'>Circulatory Problems</li>
              <li className='my-2'>Reducing muscular tension</li>
              <li className='my-2'>Post-surgical rehabilitation</li>
            </ul>
          </Col>
          <Col md='6' className='p-4'>
            <h2>
              Therapy <span style={{ color: '#0f6b9e' }}>Rates</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias cupiditate dicta minus, excepturi.
            </p>
            <h5 className='mb-4'>Rates {'(Reducing or eliminating pain)'}</h5>
            <Row>
              <Col md='4'>
                <Card className='border-0 shadow-sm text-center p-3'>
                  <h1>30</h1>
                  <p className='m-0'>minutes</p>
                  <hr />
                  <h4 style={{ color: '#0f6b9e' }}>$65.00</h4>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='border-0 shadow-sm text-center p-3'>
                  <h1>30</h1>
                  <p className='m-0'>minutes</p>
                  <hr />
                  <h4 style={{ color: '#0f6b9e' }}>$65.00</h4>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='border-0 shadow-sm text-center p-3'>
                  <h1>30</h1>
                  <p className='m-0'>minutes</p>
                  <hr />
                  <h4 style={{ color: '#0f6b9e' }}>$65.00</h4>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Benefits
