import { faBook, faBookReader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className="col mb-3 mt-5 rounded-4">
            <div className="card sport-card border border-2 border-primary single-topic-parent-div">
                <img src={logo} className="card-img-top img-fluid custom-bg-image" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-primary">{name}</h3>
                    <h5 className="card-text text-dark font-bold">Questions: {total}</h5>
                    <div className='mt-3'>
                        <Link to={`/topics/${id}`}><button  className='btn btn-primary-css px-4 py-2 w-100 text-white'>Start Practice  <FontAwesomeIcon icon ={faBookReader} className='ms-1'></FontAwesomeIcon> </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;