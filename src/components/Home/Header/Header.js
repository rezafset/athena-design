import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resource/Illustration/logo.png'
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <Link to="/" class="navbar-brand" href="#">
                    <img className="logo" src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/" style={{ color: '#0D052E' }} class="nav-link font-weight-bold mr-2" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#team">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#achievement">Achievement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#pricing">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <button class="btn-all" href="#contact">Contact Us</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;