import React, { useState } from 'react';
import './Service.css';
import service1 from '../../../resource/Illustration/service1.png';
import service2 from '../../../resource/Illustration/service2.png';
import service3 from '../../../resource/Illustration/service3.png';
import service4 from '../../../resource/Illustration/service4.png';

const Service = () => {
    const [serviceInfo] = useState([
        {
            img: service1,
            title: 'Experience Design',
            description: 'The point of using Lorem Ipsum is that it has a more or less normal.'
        },
        {
            img: service2,
            title: 'Interface Design',
            description: 'The point of using Lorem Ipsum is that it has a more or less normal.'
        },
        {
            img: service3,
            title: 'Prototyping',
            description: 'The point of using Lorem Ipsum is that it has a more or less normal.'
        },
        {
            img: service4,
            title: 'Illustration',
            description: 'The point of using Lorem Ipsum is that it has a more or less normal.'
        }
    ])
    return (
        <div id="service">
            <div className="container">
                <div className="row">
                    {
                        serviceInfo.map(service =>
                            <div className="col-md-3">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <img className="mx-auto service-img" src={service.img} alt="" />
                                        <h5 className="card-title font-weight-bold pt-4" style={{ color: '#0D052E' }}>{service.title}</h5>
                                        <p className="text-secondary">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;