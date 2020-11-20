import React from 'react';
import happy from '../../../resource/Illustration/happy.png';
import marketing from '../../../resource/Illustration/marketing.png';
import surface from '../../../resource/Illustration/surface.png';
import transportation from '../../../resource/Illustration/transportation.png';
import './Achievement.css';

const Achievement = () => {
    return (
        <div id="achievement" className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="sectionHeader">Our Achievements</h2>
                    <small className="text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</small>
                </div>
                <div className="col-md-8 mt-4 mt-lg-0 mt-md-0">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="achievementSection" className="achievementOdd achievementWrapper d-flex justify-content-center">
                                <img src={happy} alt="" />
                                <div className="ml-3">
                                    <h2 className="mb-0 font-weight-bold">700+</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mt-lg-0 mt-md-0">
                            <div className="achievementEven achievementWrapper d-flex justify-content-center">
                                <img src={marketing} alt="" />
                                <div className="ml-3">
                                    <h2 className="mb-0 font-weight-bold text-secondary">140+</h2>
                                    <p className="text-secondary">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 ">
                        <div className="col-md-6  col-12">
                            <div className="achievementEven achievementWrapper d-flex justify-content-center">
                                <img src={surface} alt="" />
                                <div className="ml-3">
                                    <h2 className="mb-0 font-weight-bold text-secondary">25+</h2>
                                    <p className="text-secondary">Crazy Minds</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                            <div className="achievementOdd achievementWrapper d-flex justify-content-center">
                                <img src={transportation} alt="" />
                                <div className="ml-3">
                                    <h2 className="mb-0 font-weight-bold text-secondary">75+</h2>
                                    <p className="text-secondary">Running Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;