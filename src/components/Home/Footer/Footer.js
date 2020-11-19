import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import siteLogo from '../../../resource/Illustration/logo.png';
import fb from '../../../resource/Illustration/fb.png'
import dribble from '../../../resource/Illustration/dribble.png';
import twitter from '../../../resource/Illustration/twitter.png';
import linkedin from '../../../resource/Illustration/linkedin.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="footerLogos">
                            <div className="siteLogo">
                                <img src={siteLogo} alt="siteLogo" />
                            </div>
                            <div className="socialLogo mt-4">
                                <img className="mr-4 mr-md-3" src={fb} alt="fbLogo" />
                                <img className="mr-4 mr-md-3" src={dribble} alt="dribbleLogo" />
                                <img className="mr-4 mr-md-3" src={twitter} alt="twitterLogo" />
                                <img className="mr-4 mr-md-3" src={linkedin} alt="linkedInLogo" />
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col className="mt-4 mt-md-0 mt-lg-0" md={4}>
                                <div className="footerListGroup">
                                    <li>Features</li>
                                    <li>Enterprise</li>
                                    <li>Pricing</li>
                                </div>
                            </Col>

                            <Col md={4} className="py-4 py-md-0 py-lg-0">
                                <div className="footerListGroup">
                                    <li>BLog</li>
                                    <li>Help Center</li>
                                    <li>Contact Us</li>
                                    <li>Status</li>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="footerListGroup">
                                    <li>About Us</li>
                                    <li>Terms of Service</li>
                                    <li>Security</li>
                                    <li>Login</li>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;