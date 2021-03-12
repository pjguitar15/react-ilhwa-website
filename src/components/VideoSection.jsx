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
              Il Hwa Korean Ginseng Extract is made from 100% pure ginseng
              extracted from highest quality ginseng roots through a low
              temperature vacuum method. This new method preserves the original
              efficacy and flavor of ginseng. It is delicious both in hot or
              cold water.
            </p>
            <p className='text-justify'>
              Direction for Use: Put one spoonful of this concentrated ginseng
              tea into a cup of hot water. Add sugar or honey to taste. Stir
              well.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VideoSection
