import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner1 from '../../images/Home-Logo1.jpg';
import banner2 from '../../images/Home-Logo2.jpg';
import banner3 from '../../images/Home-Logo3.jpg';
import banner4 from '../../images/Home-Logo4.jpg';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {

    const topics = useLoaderData();
    console.log(topics.data);
    const { id, logo, name, total } = topics.data;

    return (
        <div>
            <div className='home-parent-div container d-flex justify-content-between align-items-center flex-md-column-reverse flex-lg-row flex-column-reverse'>
                <div className="home-left-div w-75 mb-3 mt-5">
                    <h1 className='text-primary fs-1 text-center'>Welcome To Short Quiz Mania</h1>
                    <p className='fs-5 header-p text-center'>The website is made for the students who wants to judge themselves by giving online Quiz Exams.. You can find <span className='text-primary fw-semibold'>React, JavaScript, CSS, Git</span> quiz questions by clicking the respected links. So, Go and seat for the exam.</p>
                    <div className='button-div d-flex justify-content-center align-items-center flex-md-row flex-lg-row flex-sm-column flex-column'>
                        <Link to='/about'><button className='home-button btn btn-primary-new px-5 py-2 border border-0 text-white'>About Us</button></Link>
                        <p className='fw-bold p-3 m-2'>Learn More</p>
                    </div>
                </div>

                <div className="home-right-div mt-5">
                    <div className='home-image-div'>
                        <img className='img-fluid rounded-4 w-100 h-50' src={banner3} alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-primary text-center fs-1 font-bold'>Quiz Topics</h3>
            </div>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mx-auto container  mb-5'>
                {
                    topics.data.map(topic => <Topic topic = {topic} key ={topic.id}></Topic>)
                }
            </div>
        </div>


    );
};

export default Topics;