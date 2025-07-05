import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import burger from '../../../assets/hero/hero-2.png'
import '../Section style/Section1.css'



const Section1 = () => {
    return (
        <section className="hero">
            <div className="section">
                <Container>
                    <Row>
                        <Col lg={7} >
                            <div className="position-relative">
                                <img src={burger} alt="hero" className='img-fluid' />
                                <div className="price-badge">
                                    <div className="badge_text">
                                        <h4 className='txt'>Only</h4>
                                        <h4 className='price'>$6.99</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="hero_text">
                                <h1 className='txt1'>New Burger</h1>
                                <h2 className='txt2'>With Onion</h2>
                                <p className='para'>
                                    Feugiat primis ligula risus auctor laoreet augue egestas mauris
                                    viverra tortor in iaculis pretium at magna mauris ipsum primis
                                    rhoncus feugiat
                                </p>
                                <button className="btn order_now">
                                    Order Now
                                </button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Section1
