import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Plan from '../Plans/Plan';
import Achievements from '../Achievements/Achievements';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Team></Team>
            <Achievements></Achievements>
            <Plan></Plan>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;