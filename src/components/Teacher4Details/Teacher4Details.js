import React from 'react';
import { Link } from 'react-router-dom';
import teacher4 from '../../images/Teacher4.png';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Teacher4Details = () => {
    return (
        <div className='container mt-4'>
            <div className="card w-75 mx-auto">
                <img src={teacher4} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">Tamim Hasan</h2>
                    <h5 className="card-text">JavaScript Instructor</h5>
                    <h6 className='text-muted'>BSc: BRAC University</h6>
                    <h6 className='text-muted'>MSc: BRAC University</h6>
                    <h6 className='text-muted'>Email: tahimhasan@gmail.com</h6>
                    <h6 className='text-muted'>Mobile: 0154782348</h6>
                    <div className='mx-auto my-2 text-center d-flex justify-content-center'>
                        <Link className='m-1 px-2' title="Facebook" target="_blank" role="button"><FaFacebook className='fs-3 facebook-icon'></FaFacebook></Link>

                        <Link className='instagram-icon m-1 px-2' title="Instagram" target="_blank" role="button"><FaInstagram className='text-danger fs-3 '></FaInstagram></Link>

                        <Link className='m-1 px-2' title="LinkedIn" target="_blank" role="button"><FaLinkedin className='text-primary fs-3 linkedin-icon'></FaLinkedin></Link>

                        <Link className='m-1 px-2' title="GitHub" target="_blank" role="button"><FaGithub className='text-black fs-3 github-icon'></FaGithub></Link>
                    </div>
                </div>
                
                <div className='mx-auto  mb-3'>
                    <Link to="/about"><button className='btn btn-outline-primary px-5'>Back</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Teacher4Details;