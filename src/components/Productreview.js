import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-bootstrap/Carousel'
import "./style.css";
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col, CarouselItem } from "react-bootstrap";

const review =[
    {
        image: './images/7.jpeg',
        title: 'Wall Clock',
        description: 'This product is heavily used for decoration purpose though it is main intention of this product design.It is a Custom design made specially for only few Clients and not sold on loose.',
        quote:'“The product is very good and the quality also as seen on picture ”',
        avatar: './logo_omicore.png',
        name:'Radhika',
        residence:'hyderabad'

    },
    {
        image: './images/Table figurine/tf14.jpg',
        title: 'Table Figuruines',
        description: 'This product is heavily used for decoration purpose though it is main intention of this product design.It is a Custom design made specially for only few Clients and not sold on loose.',
        quote:'“The product is very good and the quality also as seen on picture ”',
        avatar: './logo_omicore.png',
        name:'Sagar',
        residence:'Mumbai'

    },
    {
        image: './images/Tea light/tl1.png',
        title: 'Tea Light',
        description: 'This product is heavily used for decoration purpose though it is main intention of this product design.It is a Custom design made specially for only few Clients and not sold on loose.',
        quote:'“The product is very good and the quality also as seen on picture ”',
        avatar: './logo_omicore.png',
        name:'Sultan',
        residence:'Delhi'
    },
]

const Productreview = () => {
    return (
        <Container>
            <Carousel>
            {review.map(item => {
                return (
                    <CarouselItem>
                        <div style={{ display: 'flex', padding: '25px' }}>

                            <img
                                style={{ borderRadius: '50%', height: '500px' }}
                                className="d-block w-50"
                                src={item.image}
                                alt="First slide"
                            />

                            <div className="d-block w-50" style={{ paddingLeft: '15px' }}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p style={{ fontFamily: 'Petit Formal Script', fontSize: '20px', fontStyle: 'italic' }}>{item.quote}</p>
                                <div style={{ textAlign: 'right' }}>
                                    <img style={{ position: 'relative', width: '144.31px', height: '147.92px', borderRadius: '50%' }} src={item.avatar}></img>
                                    <p style={{ fontFamily: 'Petit Formal Script', fontSize: '20px', fontStyle: 'italic' }}>{item.name}</p>
                                    <p style={{ fontFamily: 'Petit Formal Script', fontSize: '20px', fontStyle: 'italic' }}>{item.residence}</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                );
            })}
            </Carousel>
        </Container >
    )
}

export default Productreview;