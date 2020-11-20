import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './contact.module.css'

const Contact = () => {
    return (
        <div className={classes.contactContainer}>
            <Container>
                <div className={classes.contactSection}>
                    <div className={classes.contactHeader}>
                        <h2>Get your design right, right now</h2>
                        <p>Be the first know our latest offers and updates!</p>
                    </div>
                    <div className={classes.contactArea}>
                        <form action="" className={classes.contactForm}>
                            <input type="email" placeholder="Enter your Email" className={classes.contactEmail} />
                            <input className={`btn-all ${classes.contactSubmitBtn}`} type="submit" value="Get Started"/>
                        </form>
                    </div> 
                </div>
            </Container>
        </div>
    );
};

export default Contact;