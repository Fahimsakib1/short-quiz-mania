import React from 'react';
import { Link } from 'react-router-dom';
import teacher3 from '../../images/Teacher3.png';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Teacher3Details = () => {
    return (
        <div className='container mt-4'>
            <div className="card w-75 mx-auto">
                <img src={teacher3} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">Akash Islam</h2>
                    <h5 className="card-text">AI Instructor</h5>
                    <h6 className='text-muted'>BSc: East West University (EWU)</h6>
                    <h6 className='text-muted'>MSc: American International University Bangladesh (AIUB)</h6>
                    <h6 className='text-muted'>Email: akashislam@gmail.com</h6>
                    <h6 className='text-muted'>Mobile: 01766452348</h6>
                    <div className='mx-auto my-3 text-center d-flex justify-content-center'>
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

export default Teacher3Details;