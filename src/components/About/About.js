import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import course1 from '../../images/Course1.png';
import course2 from '../../images/Course2.png';
import course3 from '../../images/Course3.png';
import course4 from '../../images/Course4.png';
import teacher1 from '../../images/Teacher1.png';
import teacher2 from '../../images/Teacher2.png';
import teacher3 from '../../images/Teacher3.png';
import teacher4 from '../../images/Teacher4.png';
import b1 from '../../images/banner/2.webp';
import b2 from '../../images/banner/3.webp';
import b3 from '../../images/banner/4.webp';
import b4 from '../../images/banner/5.webp';
import './About.css'

const About = () => {

    return (
        <div>
            <h3 className='text-center fs-1 my-3 text-primary'>Our Courses</h3>
            <div className=''>
                <Carousel className='container rounded-4 '>

                    <Carousel.Item>
                        <img
                            className="d-block img-fluid rounded-4"
                            src={course1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Java</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block img-fluid  rounded-4"
                            src={course2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Python</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block img-fluid  rounded-4"
                            src={course3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>React</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block img-fluid  rounded-4"
                            src={course4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Artificial Intelligence</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

            <div className='mt-5'>
                <h1 className="text-center successfull-student-title mt-4 mb-3">Our <span className="text-primary">Respected </span>Instructors</h1>
                <section className='container mt-4'>
                    <div className='row'>

                        <div className="col col-12 col-lg-3 col-md-6 col-sm-12 mb-5">
                            <img className="img-fluid w-100 rounded" src={teacher1} alt="" />
                            <div className="border border-1 rounded-1 ">
                                <h5 className="fw-semibold mt-3 ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">Fahim Faysal</h5>
                                <p className="text-muted ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">React Instructor</p>
                                <div className='text-center'>
                                    <Link to='/about/teacher1details'><button className='btn btn-primary-teacher my-3 w-75 mx-auto text-white'>View Details</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-3 col-md-6 col-sm-12 mb-5">
                            <img className="img-fluid w-100 rounded" src={teacher2} alt="" />
                            <div className="border border-1 rounded-1 ">
                                <h5 className="fw-semibold mt-3 ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">Nafiz Hasan</h5>
                                <p className="text-muted ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">Java Instructor</p>
                                <div className='text-center'>
                                    <Link to='/about/teacher2details'><button className='btn btn-primary-teacher my-3 w-75 mx-auto text-white'>View Details</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-3 col-md-6 col-sm-12 mb-5">
                            <img className="img-fluid w-100 rounded" src={teacher3} alt="" />
                            <div className="border border-1 rounded-1 ">
                                <h5 className="fw-semibold mt-3 ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">Akash Islam</h5>
                                <p className="text-muted ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">AI Instructor</p>
                                <div className='text-center'>
                                    <Link to='/about/teacher3details'><button className='btn btn-primary-teacher text-white my-3 w-75 mx-auto'>View Details</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-3 col-md-6 col-sm-12 mb-5">
                            <img className="img-fluid w-100 rounded" src={teacher4} alt="" />
                            <div className="border border-1 rounded-1 ">
                                <h5 className="fw-semibold mt-3 ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">Tamim Hasan</h5>
                                <p className="text-muted ms-3 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start">JavaScript Instructor</p>
                                <div className='text-center'>
                                    <Link to='/about/teacher4details'><button className='btn btn-primary-teacher text-white my-3 w-75 mx-auto'>View Details</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>



        </div>
    );
};

export default About;