import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Section style/Section2.css'
import Pizza from '../../../assets/about/pizza.png'
import Salad from '../../../assets/about/salad.png'
import Delivery from '../../../assets/about/delivery-bike.png'



const Section2 = () => {

  // Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
];


  return (
    <>
<section className="about">
   <Container>
    <Row>
        <Col lg={{span:8, offset:2}}>
        <h2>The burger tastes better when you eat it with your family</h2>
        <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus</p>
                <button className='order_now btn btn_red'>Explore Full Menu</button>
        </Col>
    </Row>
   </Container>
</section>
<section className="about_wrap">
<Container>
  <Row className='justify-content-md-center'>

     {mockData.map((cardData) => (
              <Col md={6} lg={4} className='mb-md-0 mb-4'>
                <div className="about_box">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
  </Row>
</Container>
</section>
</>
  )
}

export default Section2
