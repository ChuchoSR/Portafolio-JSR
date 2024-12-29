import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from '../assets/image/pixel-nf.png';


const About = () => {
    return (
        <section id="about" className="my-5">
            <Container className='about-container'>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className='col-container'>
                        <div className="pixel-container">
                            <img
                                src={myImage}
                                alt="Jesús Sierra"
                                className="img-fluid img-me mb-4 mb-md-0"
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='about-text'>
                        <h2>Acerca de mí</h2>
                        <p>
                            Bienvenidos, soy Jesús Sierra, soy ingeniero de Computación y me desempeño como web developer. Soy una persona a la que le gustan los desafíos, día a día para mí es una nueva oportunidad de aprendizaje, lo cual en lo particular, creo firmemente que debe ser el ideal de todos.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
