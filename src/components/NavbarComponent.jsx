import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ilhwalogo from '../Assets/ilhwalogo.svg'
const NavbarComponent = () => {
  return (
    <div className='navbar-component shadow-sm'>
      <Container>
        <Row className='align-items-center'>
          <Col md='2' lg='6' xs='12' className='logo mt-md-0 mt-4'>
            <div style={{ height: '45px' }}>
              <img style={{ height: '100%' }} src={ilhwalogo} alt='' />
            </div>
          </Col>
          <Col md='10' lg='6' xs='12' className='links py-4'>
            <ul className='d-flex align-items-center m-0 justify-content-between p-0'>
              <li className='list-unstyled navbar-links'>Home</li>
              <li className='list-unstyled navbar-links'>About</li>
              <li className='list-unstyled navbar-links'>Service</li>
              <li className='list-unstyled navbar-links'>Shop</li>
              <li className='list-unstyled navbar-links'>Blog</li>
              <li className='list-unstyled navbar-links'>Contact</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavbarComponent
