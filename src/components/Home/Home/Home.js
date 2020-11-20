import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Plan from '../Plans/Plan';
import Team from '../Team/Team';
import Achievement from '../Achievement/Achievement';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Team></Team>
            <Achievement></Achievement>
            <Plan></Plan>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;