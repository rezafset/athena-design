import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './achievements.module.css';
import happy from '../../../resource/Illustration/happy.png'
import marketing from '../../../resource/Illustration/marketing.png'
import surface from '../../../resource/Illustration/surface.png'
import transportation from '../../../resource/Illustration/transportation.png'

 

const Achievements = () => {
    return (
        <div id="achievement" className={classes.achievementsContainer}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={classes.achievementDesc}>
                            <h2 className="sectionHeader">Our Achievements</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={6} style={{"margin-bottom": "20px"}}>
                                <div className={`btn-all ${classes.singleAchievementOdd}`}>
                                    <Row className={classes.singleAchievementWrapper}>
                                        <Col md={4}>
                                            <img src={happy} alt=""/>
                                        </Col>
                                        <Col md={8}>
                                            <h2>700+</h2>
                                            <p>Happy Clients</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} style={{"margin-bottom": "20px"}}>
                            <div className={`btn-all ${classes.singleAchievementEven}`}>
                                    <Row className={classes.singleAchievementWrapper}>
                                        <Col md={4}>
                                            <img src={marketing} alt=""/>
                                        </Col>
                                        <Col md={8}>
                                            <h2>140+</h2>
                                            <p>Projects Completed</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} style={{"margin-bottom": "20px"}}>
                            <div className={`btn-all ${classes.singleAchievementEven}`}>
                                    <Row className={classes.singleAchievementWrapper}>
                                        <Col md={4}>
                                            <img src={surface} alt=""/>
                                        </Col>
                                        <Col md={8}>
                                            <h2>25+</h2>
                                            <p>Crazy Minds</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} style={{"margin-bottom": "20px"}}>
                            <div className={`btn-all ${classes.singleAchievementOdd}`}>
                                    <Row className={classes.singleAchievementWrapper}>
                                        <Col md={4}>
                                            <img src={transportation} alt=""/>
                                        </Col>
                                        <Col md={8}>
                                            <h2>75+</h2>
                                            <p>Running Projects</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Achievements;