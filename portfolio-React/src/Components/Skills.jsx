import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bootstrapIcon from '../assets/image/bootstrap.svg';
import cssIcon from '../assets/image/css.svg';
import htmlIcon from '../assets/image/html.svg';
import jsIcon from '../assets/image/javascript.svg';
import githubIcon from '../assets/image/git.svg'
import reactIcon from '../assets/image/react.svg'

const Skills = () => {
    return (
        <Container className="skills-container"> 
            <h2 className="text-white">Las tecnologías que manejo son:</h2> 
            <Row className="justify-content-center my-3"> 
                <Col xs={6} md={4} className="icon-wrapper"> 
                    <Image src={htmlIcon} thumbnail /> 
                </Col> 
                <Col xs={6} md={4} className="icon-wrapper"> 
                    <Image src={cssIcon} thumbnail /> 
                </Col> 
                <Col xs={6} md={4} className="icon-wrapper"> 
                    <Image src={jsIcon} thumbnail /> 
                </Col> 
            </Row> 
            <Row className="justify-content-center my-3"> 
                <Col xs={6} md={4} className="icon-wrapper"> 
                    <Image src={reactIcon} thumbnail /> 
                </Col> 
                <Col xs={6} md={4} className="icon-wrapper"> 
                    <Image src={githubIcon} thumbnail /> 
                </Col> 
                <Col xs={6} md={4} className="icon-wrapper"> 
                    <Image src={bootstrapIcon} thumbnail /> 
                </Col>
            </Row> 
        </Container>
    );
};

export default Skills;
