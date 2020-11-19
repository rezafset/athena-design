import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import siteLogo from '../../../resource/Illustration/logo.png';
import fb from '../../../resource/Illustration/fb.png'
import dribble from '../../../resource/Illustration/dribble.png';
import twitter from '../../../resource/Illustration/twitter.png';
import linkedin from '../../../resource/Illustration/linkedin.png';
import classes from './footer.module.css';


const Footer = () => {
    return (
        <div className="footerContainer">
            <Container>
                <Row className={classes.footer}>
                    <Col md={4}> 
                        <div className="footerLogos">
                            <div className={classes.siteLogo}>
                                <img src={siteLogo} alt="siteLogo"/>
                            </div>
                            <div className={classes.socialLogo}>
                                <img src={fb} alt="fbLogo"/>
                                <img src={dribble} alt="dribbleLogo"/>
                                <img src={twitter} alt="twitterLogo"/>
                                <img src={linkedin} alt="linkedInLogo"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={4}>
                                <div className={classes.footerListGroup}>

                                <li>Features</li>
                                <li>Enterprise</li>
                                <li>Pricing</li>
                                </div>
                            </Col>
                        
                            <Col md={4}>
                            <div className={classes.footerListGroup}>
                                    
                                <li>BLog</li>
                                <li>Help Center</li>
                                <li>Contact Us</li>
                                <li>Status</li>
                                    </div>
                            </Col>
                            <Col md={4}>
                            <div className={classes.footerListGroup}>
                                    
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