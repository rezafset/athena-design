import React from 'react';
import './Banner.css';
import banner from '../../../resource/Illustration/banner.png';

const Banner = () => {
    return (
            <div className="container py-5" id="banner">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 ">
                        <h1 className="pb-3">Florence <br/> agency</h1>
                        <small className="text-secondary"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda voluptatum rem, maiores pariatur temporibus enim ipsam corrupti in itaque earum ducimus incidunt magnam. Neque, laudantium? </small> <br/>
                        <button className="btn-all mt-3">See Pricing</button>                    
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={banner} alt=""/>
                    </div>
                </div>
            </div>
    );
};

export default Banner;