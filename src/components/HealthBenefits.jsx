import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const HealthBenefits = () => {
  return (
    <Container id='benefits' className='services'>
      <div className='text-center p-4'>
        <h2>Health Benefits</h2>
        <p>
          Ilhwa products has ingredients that will help our immune system
          perform on best state as possible.
        </p>
      </div>
      <Row className='text-center mt-4'>
        <Col md='4' className='p-4'>
          <i class='fas services-icons mb-3 fa-heartbeat'></i>
          <h5>Decrease High Blood Pressure</h5>
          <p>
            Blood pressure often increases as weight increases. Being overweight
            also causes disrupted breathing while asleep.
          </p>
        </Col>
        <Col md='4' className='p-4'>
          <i class='fas mb-2 services-icons fa-child'></i>
          <h5>Boost Metabolism</h5>
          <p>
            Metabolism is a term that describes all the chemical reactions in
            your body. These chemical reactions keep your body alive and
            functioning.
          </p>
        </Col>
        <Col md='4' className='p-4'>
          <i class='fas mb-2 services-icons fa-briefcase-medical'></i>
          <h5>Prevent Heart Diseases</h5>
          <p>
            Leading cause of the death in the United States. A major cause of
            disability. There are many things that can raise your risk for heart
            disease.
          </p>
        </Col>
        <Col md='4' className='p-4'>
          <i class='fas mb-2 services-icons fa-ban'></i>
          <h5>Anti Cancer</h5>
          <p>
            No single food can prevent cancer, but the right combination of
            foods may help make a difference.
          </p>
        </Col>
        <Col md='4' className='p-4'>
          <i className='fas mb-2 services-icons fa-running'></i>
          <h5>Energizer</h5>
          <p>
            Stress-induced emotions consume huge amounts of energy. Seeing a
            psychotherapist can help diffuse stress.
          </p>
        </Col>
        <Col md='4' className='p-4'>
          <i class='fa mb-2 services-icons fa-hand-sparkles'></i>
          <h5>Healthy Skin</h5>
          <p>
            Getting enough vitamin E is essential for helping protect your skin
            against damage from free radicals and inflammation.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default HealthBenefits
