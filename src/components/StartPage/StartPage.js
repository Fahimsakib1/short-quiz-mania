import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';




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



        </div>

    );
};

export default StartPage;