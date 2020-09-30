import React, { Component } from 'react'
import './home.css'
import { Container, Carousel, Row, Col } from 'react-bootstrap'

class Home extends Component {
  render() {
    return <>
      <Carousel className="homeCarousel" interval='5000'>
        <Carousel.Item>


          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        </Carousel.Item>
        <Carousel.Item>



          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </Carousel.Item>
        <Carousel.Item>



          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

        </Carousel.Item>
      </Carousel>
      <Container className="homeDescriptions"style={{ marginTop: '50px' }}>
        <h1>Why Us?</h1>
        <Row>
          <Col className="columnHome" lg={4}>
            <i class="fab fa-react"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate vero, odit consequuntur quod illo ut quidem qui ex vel! Necessitatibus, nemo autem. Perspiciatis fugiat provident id tenetur modi eos sit delectus, est maxime, odit reiciendis laudantium magni officia blanditiis placeat commodi voluptatem vitae architecto rerum itaque </p>
          </Col>
          <Col className="columnHome" lg={4}>
            <i class="fab fa-react"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate vero, odit consequuntur quod illo ut quidem qui ex vel! Necessitatibus, nemo autem. Perspiciatis fugiat provident id tenetur modi eos sit delectus, est maxime, odit reiciendis laudantium magni officia blanditiis placeat commodi voluptatem vitae architecto rerum itaque </p>
          </Col>
          <Col className="columnHome" lg={4}>
            <i class="fab fa-react"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate vero, odit consequuntur quod illo ut quidem qui ex vel! Necessitatibus, nemo autem. Perspiciatis fugiat provident id tenetur modi eos sit delectus, est maxime, odit reiciendis laudantium magni officia blanditiis placeat commodi voluptatem vitae architecto rerum itaque </p>
          </Col>
        </Row>



      </Container>

    </>
  }
}

export default Home