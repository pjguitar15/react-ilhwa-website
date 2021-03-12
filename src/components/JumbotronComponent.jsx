import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'
import jumbotronImg from '../Assets/jumbotron-img.jpg'
const JumbotronComponent = () => {
  return (
    <Jumbotron
      className='m-0 rounded-0'
      style={{ background: '#F8F9FE', padding: '18rem 0' }}
    >
      <Container>
        <Row>
          <Col md='12' lg='6' xs='12' className='text-center text-lg-left'>
            <div className='front-page-h1 mb-4'>Il Hwa Philippines</div>
            <p className='front-page-text mb-5'>
              Korean Authenticated Ginseng Products, other herbal products,
              Vitamin, Supplement, Facial products etc.
            </p>
            <p>
              <Button size='md' variant='warning'>
                About Company
              </Button>
            </p>
          </Col>
          <Col className='img-col' md='12' lg='6' xs='12'>
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
            >
              <img
                style={{ borderRadius: '50%', height: '100%', width: '100%' }}
                src={jumbotronImg}
                alt='product'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default JumbotronComponent
