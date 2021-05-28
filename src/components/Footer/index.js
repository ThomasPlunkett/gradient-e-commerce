import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return(
        <footer style={{
            marginTop:50,
            backgroundColor: '#eeeeee',
            padding: 20,
            fontSize: 15,
            fontFamily: 'helvetica',
            height: '80px',
            }} className="mt-5">
        <Container fluid={true}>
        <Row className="border-top justify-content-between p-3" >
            <Col className="p-0" md={3} sm={12}>
                <br/>
            Copyright &copy; 2021 Gradient E-Commerce. All Rights Reserved.
            </Col>
            <Col style={{fontWeight:'bolder'}} className="p-0 d-flex justify-content-end" md={3}>
                Made with ❤ in ATL
            </Col>
        </Row>
    </Container>
</footer>
    )
}

export default Footer;