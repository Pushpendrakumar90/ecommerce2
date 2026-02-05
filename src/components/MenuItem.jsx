import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export default function MenuItem() {
    let data = 'Time : 15min';
    let ItemName = 'Cheeseburger with Bacon';
    let dec = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem';
    let price = 40;

    return (
        <>
            <div className="col-md-4 col-lg-3 col-sm-6">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="assets/images/2.png" style={{ height: '200px' ,borderBottom: '1px solid black'}} />
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            {!ItemName && <Placeholder xs={7} > </Placeholder>}
                            {ItemName && <p className='text-success  fw-bold'>{ItemName}</p>}
                        </Placeholder>

                        <Placeholder as={Card.Title} animation="glow">
                            {!dec && <Placeholder xs={7} > </Placeholder>}
                            {dec && <p className=''>{dec}</p>}
                        </Placeholder>

                        <Placeholder as={Card.Text} animation="glow">
                            {data && <p className='text-dark'>{data} , <span>Price: ${price}</span></p>}
                        </Placeholder>

                        <Placeholder.Button variant="primary" xs={6}>Order Now </Placeholder.Button>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
