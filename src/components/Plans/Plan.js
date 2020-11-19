import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import classes from './plan.module.css'
const Plan = () => {
    return (
        <div className={classes.plansContainer}>
            <Container>
                <h2 style={{"text-align":"center", "margin-bottom":"60px"}} className="sectionHeader">Choose your dedicated team.</h2>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}  className={classes.singlePlanContainer}>
                            <Card.Body>
                                <Card.Title className={classes.planPrice}><h2>$199</h2></Card.Title>
                                <Card.Subtitle className={`mb-2 text-muted ${classes.planName}`}>For Basic</Card.Subtitle>
                                <Card.Text className={classes.planFeatures}>
                                    <li>Homepage</li>
                                    <li>No Inner Page</li>
                                    <li>Asset file</li>
                                    <li>Source file</li>
                                    <li>Free Stock Photos</li>
                                    <li>10 Days Free support</li>
                                    <li>24/7 Support</li>
                                </Card.Text>
                                <button className={`btn-all ${classes.planOrderBtn}`}>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}  className={classes.singlePlanContainer}>
                            <Card.Body>
                                <Card.Title className={classes.planPrice}><h2>$399</h2></Card.Title>
                                <Card.Subtitle className={`mb-2 text-muted ${classes.planName}`}>For Basic</Card.Subtitle>
                                <Card.Text className={classes.planFeatures}>
                                    <li>Homepage</li>
                                    <li>No Inner Page</li>
                                    <li>Asset file</li>
                                    <li>Source file</li>
                                    <li>Free Stock Photos</li>
                                    <li>10 Days Free support</li>
                                    <li>24/7 Support</li>
                                </Card.Text>
                                <button className={`btn-all ${classes.planOrderBtn}`}>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }} className={classes.singlePlanContainer}>
                            <Card.Body>
                                <Card.Title className={classes.planPrice}><h2>$599</h2></Card.Title>
                                <Card.Subtitle className={`mb-2 text-muted ${classes.planName}`}>For Basic</Card.Subtitle>
                                <Card.Text className={classes.planFeatures}>
                                    <li>Homepage</li>
                                    <li>No Inner Page</li>
                                    <li>Asset file</li>
                                    <li>Source file</li>
                                    <li>Free Stock Photos</li>
                                    <li>10 Days Free support</li>
                                    <li>24/7 Support</li>
                                </Card.Text>
                                <button className={`btn-all ${classes.planOrderBtn}`}>Order Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            
        </div>
    );
};

export default Plan;