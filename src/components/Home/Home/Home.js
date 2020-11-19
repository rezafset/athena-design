import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Team></Team>
        </div>
    );
};

export default Home;