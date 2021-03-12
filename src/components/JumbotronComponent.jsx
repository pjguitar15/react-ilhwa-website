import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'

const JumbotronComponent = () => {
  return (
    <Jumbotron className='m-0 rounded-0 jumbotron-section'>
      <Container>
        <Row>
          <Col md='12' lg='6' xs='12' className='text-center text-lg-left'>
            <div className='front-page-h1 mb-4 text-light'>
              Il Hwa Philippines
            </div>
            <p className='front-page-text mb-5 text-light'>
              Korean Authenticated Ginseng Products, other herbal products,
              Vitamin, Supplement, Facial products etc.
            </p>
            <p>
              <Button size='md' variant='warning'>
                About Company
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default JumbotronComponent
