import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Section style/Card.css'
import { Link } from "react-router-dom";
const Cards = (props) => {
    return (
        <div className='box'>
            <Card className='overflow-hidden'>
                <div className='overflow-hidden'>
                    <Card.Img variant="top" src={props.image} />
                </div>
                <Card.Body>
                    <div className="wishlist">
                        <Card.Title>{props.title}</Card.Title>

                        <i class="bi bi-heart"></i>
                    </div>
                    <Card.Text>{props.paragraph}</Card.Text>
                    <Card.Text><strong>Rating:</strong> {props.rating} ⭐</Card.Text>
                    <div className="flex">
                        <div className="menu_price">
                            <h5 className="mb-0">${props.price}</h5>
                        </div>
                        <div className="add_to_card">
                            <Link to="/">
                                <i class="bi bi-bag me-2"></i>
                                Add To Cart
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
