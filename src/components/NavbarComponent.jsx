import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ilhwalogo from '../Assets/ilhwalogo.svg'
import { Link } from 'react-scroll'
const NavbarComponent = () => {
  return (
    <div className='navbar-component shadow-sm fixed-top bg-light'>
      <Container>
        <Row className='align-items-center'>
          <Col md='2' lg='6' xs='12' className='logo mt-md-0 mt-4'>
            <div style={{ height: '45px' }}>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img
                  className='brand-logo'
                  style={{ height: '100%' }}
                  src={ilhwalogo}
                  alt=''
                />
              </Link>
            </div>
          </Col>
          <Col md='10' lg='6' xs='12' className='links py-4'>
            <ul className='d-flex align-items-center m-0 justify-content-between p-0'>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className='list-unstyled navbar-links user-select-none'>
                  Home
                </li>
              </Link>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className='list-unstyled navbar-links user-select-none'>
                  About
                </li>
              </Link>
              <Link
                activeClass='active'
                to='benefits'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className='list-unstyled navbar-links user-select-none'>
                  Benefits
                </li>
              </Link>
              <Link
                activeClass='active'
                to='therapy'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className='list-unstyled navbar-links user-select-none'>
                  Therapy
                </li>
              </Link>
              <Link
                activeClass='active'
                to='shop'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className='list-unstyled navbar-links user-select-none'>
                  Shop
                </li>
              </Link>
              <Link
                activeClass='active'
                to='feedback'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li className='list-unstyled navbar-links user-select-none'>
                  Feedback
                </li>
              </Link>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavbarComponent
