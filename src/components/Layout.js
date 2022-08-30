import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './cssfiles/layout.css';
function Layout() {
  return (
    <Container className='layout'>
    <Row >
      <Col sm={6}><h1>THE JALALS<br/>
#MAXBOMBING</h1></Col>
      <Col sm={3}><Image thumbnail={true} src='https://jalalstest.my.canva.site/videos/37fff48731c5d92b578bb926cee42ee6.gif'/></Col>
      <Col sm={3}><Image thumbnail={true} src='https://jalalstest.my.canva.site/videos/badf028a46421c273ade4a2535a57ba0.gif' /></Col>
    </Row>
    <Row>
      <Col sm ={6}><h1>Scroll down to<br/> Lock the Target</h1> </Col>
      <Col sm><Image thumbnail={true} src='https://jalalstest.my.canva.site/videos/4afabbf15679f4fdd2560f5c110b47c3.gif'/></Col>
      <Col sm><Image thumbnail={true} src='https://jalalstest.my.canva.site/videos/e7621ac98763471d00b23b4f7f31bcf5.gif'/></Col>
    </Row>
  </Container>
  )
}

export default Layout