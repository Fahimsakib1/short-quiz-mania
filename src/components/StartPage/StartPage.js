import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';
import pic from '../../images/working.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'
import pic1 from '../../images/comma.png';
import feedBack1 from '../../images/feedback-student-1.png';
import feedBack2 from '../../images/feedback-student-2.png';




const StartPage = () => {
    return (
        <div>
            <div className='banner'>
                <div className='content d-flex align-items-center justify-content-center'>
                    <div className='my-auto start-page-content'>
                        <h1>Welcome to The Website</h1>
                        <p>If you are new to the website then please login or register to see the contents..</p>

                        <div>
                            <Link to='/register'><button className='fs-5 start-page-register-button' type='button'>Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <section className="bg-light mb-5 mt-2 rounded-4 " id="man-with-laptop">

                    <div className='d-flex justify-content-center align-items-center mb-5 flex-column flex-lg-row flex-md-row man-with-laptop border border-1 rounded-2'>

                        <div className='w-50'>
                            <img className="img-fluid h-100 rounded-2" src={pic} alt="" />
                        </div>

                        <div class="w-50 ms-5 mt-5">

                            <h1> <span className="text-primary">Explore</span> Our Quizes</h1>
                            <p class="text-muted pe-4">We are welcoming you to our Exam center. Here we provide the best quality of teaching by our best teachers across the country. We have branches in Dhaka, Rajshahi, Chittagong, Rangpur, Sylhet and Dinajpur. All the branches are located at the heart of the city. We always try to make better the facilities for our students. In all the branches we provide the same modules and quality teaching. Currently we have 4000+ students across the country that are participating in our quizes. We always believe in quality not in quantity. Join us to secure your path as a Developer.
                            </p>

                            <p className='text-muted pe-4'> Currently we are providing quizes 4 courses: JavaScript, React JS, CSS and Git. All the portion has some questions and options attached with it. You have to choose the correct option and after choosing the option you will be submitting the answers and our system will provide you the scores you achieved right away. </p>

                            <div className="row mt-5">

                                <div className="col col-12 col-lg-4 col-md-6 col-sm-6">
                                    <h1 className="fw-bold">4+ </h1>
                                    <p className="text-muted">Online Courses</p>
                                </div>

                                <div className="col col-12 col-lg-4 col-md-6 col-sm-6">
                                    <h1 className="fw-bold">50+ </h1>
                                    <p className="text-muted">Expert Members</p>
                                </div>

                                <div className="col col-12 col-lg-4 col-md-6 col-sm-6">
                                    <h1 className="fw-bold">1k+ </h1>
                                    <p className="text-muted">Rating & Review</p>
                                </div>

                            </div>

                            <div className="text-start mb-5">
                                <Link to='/topics'>
                                    <button type="button" className="btn btn-outline-primary px-4 py-2 read-more-button"> <a className="d-flex justify-content-center" style={{ textDecoration: "none" }} href="#read-more" data-bs-toggle="collapse">Our Quizes</a></button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </section>
            </div>


            <div className='container'>

                <h1 className="text-center student-feedback-title">Our Students <span className="text-primary">Feedback</span></h1>
                <p className=" text-muted text-center w-50 mx-auto mb-5">We maintain a good bonding with our students. We are like a family and stand beside them in their needs. Our students are the main strength of our education center.</p>

                <section className="student-feedback my-5">

                    <div className="d-flex  justify-content-center flex-column flex-lg-row flex-md-column flex-sm-column">

                        <div className="d-flex  justify-content-center align-items-center">
                            <FontAwesomeIcon className='rounded-circle  border border-1 border-primary arrow-text-primary arrow-padding feedback-section-arrow' icon={faAngleLeft}></FontAwesomeIcon>
                        </div>

                        <div className="border border-2 rounded-2 ms-4 me-4 pt-2 mb-3 mt-3">
                            <div className="d-flex justify-content-between my-4 ms-4">

                                <div>
                                    <img className="img-fluid" src={pic1} alt="" />
                                </div>

                                <div className="rating-and-all">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                </div>

                            </div>

                            <p className="text-muted ms-4 mb-3" >I am highly satisfied with the courses. The Web Development course helped me to improve my knowledge and skills. Currently, I am working at a reputed IT company in our country. I am thanking to the whole team of Learners Home.</p>

                            <div className="d-flex mb-3">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid ms-4" src={feedBack1} alt="" />
                                </div>

                                <div className="ms-3">
                                    <h6 className="feedback-student-name fw-bold"> Fahim Faysal</h6>
                                    <p className="text-muted feedback-job-title">Web Developer</p>
                                </div>

                            </div>
                        </div>


                        <div className="border border-2 rounded-2 pt-2 ms-4 me-4 mb-3 mt-3">
                            <div className="d-flex justify-content-between my-4 ms-4">

                                <div>
                                    <img className="img-fluid" src={pic1} alt="" />
                                </div>

                                <div className="rating-and-all">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                    <FontAwesomeIcon  icon={faStar} />
                                </div>

                            </div>

                            <p className="text-muted ms-4">I am highly satified with the courses. The Graphic Design course helped me to improve my knowledge and skills. Now, I am working at a reputed IT company in our country. I am thanking to the whole team of Learners Home.</p>

                            <div className="d-flex">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid ms-4" src= {feedBack2} alt="" />
                                </div>

                                <div className="ms-3">
                                    <h6 className="feedback-student-name fw-bold"> Sara Rahman</h6>
                                    <p className="text-muted feedback-job-title">Graphic Designer</p>
                                </div>

                            </div>
                        </div>


                        <div className="d-flex  justify-content-center align-items-center  ">
                            <FontAwesomeIcon className='rounded-circle  border border-1 border-primary arrow-text-primary arrow-padding feedback-section-arrow' icon={faAngleRight}></FontAwesomeIcon>
                        </div>


                    </div>

                </section>


            </div>





        </div>

    );
};

export default StartPage;