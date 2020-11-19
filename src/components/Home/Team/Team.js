import React from 'react';
import team from '../../../resource/Illustration/teamproject.png';

const Team = () => {
    return (

        <div className="container py-5" id="team">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid feature-img" src={team} alt="" />
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                    <h3 className="pb-3" style={{ fontWeight: 'bold', color: '#0D052E' }}>Stay Running & Project</h3>
                    <small className="text-secondary"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter. </small> <br />
                    <button className="btn-all mt-3">Contact Us</button>
                </div>
            </div>
        </div>

    );
};

export default Team;