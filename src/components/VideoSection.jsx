import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../Assets/herbal.jpg'
const VideoSection = () => {
  return (
    <div className='video-section m-0'>
      <Container>
        <Row className='m-0'>
          <Col lg='5' xs='12' className='p-0 d-flex align-items-center mt-sm-5'>
            <img
              src={img}
              style={{ maxHeight: '100%', maxWidth: '100%' }}
              alt=''
            />
          </Col>
          <Col lg='7' xs='12' className='col-right'>
            <h4>Positive Effects of</h4>
            <h3>Our Ilhwa Ginseng Products</h3>

            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              architecto, accusamus reiciendis provident est qui facere nam
              temporibus, rerum quo asperiores aspernatur quae doloremque
              aliquam repellat voluptas. Vel, eum corporis.
            </p>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              architecto, accusamus reiciendis provident est qui facere nam.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VideoSection
