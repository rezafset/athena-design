import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;