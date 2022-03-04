import React from 'react'
import {Row, Col, Form } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
          <Row className='footer_title' md={4}>
                <Col>LOGO</Col>
                <Col>
                  <div className='footer_1'>
                      <span>Home</span>
                      <span>Discovery</span>
                      <span>Photos</span>
                      <span>Contact</span>
                  </div>
                </Col>
                <Col>
                  <div className='footer_2'>
                      <span>About</span>
                      <span>Help</span>
                      <span>Terms</span>
                      <span>Guidlines</span>
                  </div>
                </Col>
                <Col>
                  <div className='footer_3'>
                      <span>Testinomials</span>
                      <span>Advertise</span>
                      <span>Intergration</span>
                      <span>Carrees</span>
                  </div>
                </Col>
          </Row>
          <div className='footer_email'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control className='footer_btn' type="email" placeholder="name@example.com"/>
                  <Form.Text className='email_text'>Stay in touch with us for the fresher product!</Form.Text>
             </Form.Group>
          </div>
          <Row className='footer_social'>
              <Col><i class="fa-brands fa-instagram"></i></Col>
              <Col><i class="fa-brands fa-facebook"></i></Col>
              <Col><i class="fa-brands fa-twitter"></i></Col>
          </Row>
        </div>
    </footer>
  )
}

export default Footer