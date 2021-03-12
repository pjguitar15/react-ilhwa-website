import React from 'react'
import { Container } from 'react-bootstrap'
import profphoto from '../Assets/smiling-guy.jpg'
const CustomerFeedback = () => {
  return (
    <div className='m-0 customer-feedback text-center'>
      <Container>
        <h2>What Our Customers Say</h2>
        <div className='col-5 py-5 mx-auto '>
          <div className='row'>
            <div className='col-4 mx-auto'>
              <img
                style={{
                  maxWidth: '100%',
                  clipPath: 'circle()',
                }}
                className='rounded-circle'
                src={profphoto}
                alt='smiling guy'
              />
            </div>
            <div className='col-8 pl-0 text-left d-flex align-items-center'>
              <div>
                <div className='p-0 m-0 font-weight-bold'>Howard Wolowitz</div>
                <div className='m-0 p-0'>Customer</div>
              </div>
            </div>
          </div>
        </div>
        <p className='lead col-7 mx-auto'>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          architecto, quos nulla expedita vel molestiae doloremque, sit nostrum
          sapiente debitis ipsam autem consectetur non recusandae sint accusamus
          cumque minus repellendus."
        </p>
        <div>
          <i class='fas fa-star mr-1 text-warning'></i>
          <i class='fas fa-star mr-1 text-warning'></i>
          <i class='fas fa-star mr-1 text-warning'></i>
        </div>
      </Container>
    </div>
  )
}

export default CustomerFeedback
