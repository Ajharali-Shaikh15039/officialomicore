import React from 'react'
import { Container, Row , Col } from "react-bootstrap";

function Aboutus() {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                <img 
                    style={{height: '500px' }}
                    className="d-block w-50"
                    src="./logo_omicore.png"
                    alt="First slide"
                />
                </Col>
                <Col sm={6}>
                <div className="d-block w-50">
                <img 
                    style={{ marginLeft:'86px',width:'115px', display:'block', position:'relative',height: '100px' }}
                    // className="d-block w-10"
                    src="./logo_omicore.png"
                    alt="First slide"
                />
                <div style={{width:'300px'}}>
                <p style={{fontSize:'15px'}}>OmiCore Art Gallery is a service based company where we provide the Art Works for the Art Lovers to decorate their dorms with exquisite products.</p>
                <p style={{fontSize:'17px'}}>Email: omicoreartgallery@gmail.com</p>
                <p style={{fontSize:'17px'}}>Contact:9819981802</p>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Aboutus;
